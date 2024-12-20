<?php

namespace App\View\Composers;

use GuzzleHttp\Exception\ClientException;
use Roots\Acorn\View\Composer;
use GuzzleHttp\Client;

class ContactForm extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'shortcodes.contact-form',
    ];


    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        if (!function_exists('get_field')) {
            return [];
        }

        $validation_messages = [];
        $success_message = '';

        if (isset($_POST['contact_form'])) {

            //Sanitize the data
            $training = isset($_POST['training']) ? sanitize_text_field($_POST['training']) : '';
            $training_id = isset($_POST['training_id']) ? $_POST['training_id'] : null;
            $training_cat = isset($_POST['training_cat']) ? $_POST['training_cat'] : null;
            $date = isset($_POST['date']) ? sanitize_text_field($_POST['date']) : '';
            $date_begin = isset($_POST['training_date_begin']) ? sanitize_text_field($_POST['training_date_begin']) : '';
            $date_end = isset($_POST['training_date_end']) ? sanitize_text_field($_POST['training_date_end']) : '';
            $full_name = isset($_POST['full_name']) ? sanitize_text_field($_POST['full_name']) : '';
            $personal_code = isset($_POST['personal_code']) ? (int)sanitize_text_field($_POST['personal_code']) : '';
            $company_name = isset($_POST['company_name']) ? sanitize_text_field($_POST['company_name']) : '';
            $address = isset($_POST['address']) ? sanitize_text_field($_POST['address']) : '';
            $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
            $email = isset($_POST['email']) ? sanitize_text_field($_POST['email']) : '';
            $participants = isset($_POST['participants']) ? sanitize_textarea_field($_POST['participants']) : '';
            $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

            $send_copy = isset($_POST['contact_form_send_copy']) ? sanitize_textarea_field($_POST['contact_form_send_copy']) : '';

            //Validate the data
            if (strlen($full_name) === 0) {
                $validation_messages[] = esc_html__('Please enter a valid name.', 'sage');
            }

            if (strlen($email) === 0 or
                !is_email($email)) {
                $validation_messages[] = esc_html__('Please enter a valid email address.', 'sage');
            }

            if (strlen($message) === 0) {
                $validation_messages[] = esc_html__('Please enter a valid message.', 'sage');
            }

            // Check for honeypot field
            if (isset($_POST['honeypot']) && !empty($_POST['honeypot'])) {
                $validation_messages[] = esc_html__('Error in contact form (honeypot).', 'sage');
            }

            if (!esc_attr(isset($_POST['form-type'])) || esc_attr($_POST['form-type']) != 'contact-form') {
                $validation_messages[] = esc_html__('Error in contact form.', 'sage');
            }

//            Check time
            $time = esc_attr($_POST['time']);
            if (!is_numeric($time) || ($time + 4 > time())) {
                $validation_messages[] = esc_html__('You have not filled out all the information required (time).', 'sage');
            }

            // REFERER ERROR
            if (!check_ajax_referer('contact_nonce')) {
                $validation_messages[] = esc_html__('check_ajax_referer error in contact form.', 'sage');
            }

            // VERIFY CAPTCHA
            $url = 'https://www.google.com/recaptcha/api/siteverify';
            $fields = array(
                'secret' => get_field('captcha_secret', 'options'),
                'response' => $_POST['g-recaptcha-response'],
                'remoteip' => $_SERVER['REMOTE_ADDR']
            );

            $fields_string = '';
            foreach ($fields as $key => $value) {
                $fields_string .= $key . '=' . $value . '&';
            }
            $fields_string = rtrim($fields_string, '&');

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, count($fields));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            $result = json_decode(curl_exec($ch));

            if (!$result->success) {
                $validation_messages[] = esc_html__('Captcha not clicked.', 'sage');
            }

            //Send an email to the WordPress administrator if there are no validation errors
            if (empty($validation_messages)) {

                //Airtable sync
                $apiKey = get_field('airtable_key', 'options') ?: null;
                $database = get_field('airtable_database', 'options') ?: null;

                $headers = [
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                ];

                $client = new Client();

                $endpoint = 'https://api.airtable.com/v0/' . $database;
                $endpointKliendid = $endpoint . '/Kliendid';
                $endpointReisidKoolitused = $endpoint . '/Reisid%2Fkoolitused';
                $endpointBroneeringud = $endpoint . '/Broneeringud';

                $dataKliendid = [
                    'performUpsert' => [
                        "fieldsToMergeOn" => [
                            "Isikukood"
                        ]
                    ],
                    'records' => [
                        [
                            'fields' => [
                                'Nimi' => $full_name,
                                "Email" => $email,
                                "Isikukood" => $personal_code,
                                "Telefon" => $phone,
                                "Ettevõte" => $company_name,
                                "Aadress" => $address,
                            ]
                        ],
                    ],
                ];

                $dataReisidKoolitused = [
                    'performUpsert' => [
                        "fieldsToMergeOn" => [
                            "ID"
                        ]
                    ],
                    'records' => [
                        [
                            'fields' => [
                                "ID" => $training_id,
                                "Nimi" => $training,
                                "Algus" => $date_begin,
                                "Lõpp" => $date_end,
                                "Tüüp" => $training_cat,
                            ]
                        ],
                    ],
                ];

                try {
                    $responseKliendid = $client->request('PATCH', $endpointKliendid, [
                        'headers' => $headers,
                        'json' => $dataKliendid,
                    ]);

                    $responseReisidKoolitused = $client->request('PATCH', $endpointReisidKoolitused, [
                        'headers' => $headers,
                        'json' => $dataReisidKoolitused,
                    ]);

                    $clientId = json_decode($responseKliendid->getBody()->getContents(), true)['records'][0]['id'];
                    $reisKoolitusId = json_decode($responseReisidKoolitused->getBody()->getContents(), true)['records'][0]['id'];

                    $dataBroneering = [
                        'records' => [
                            [
                                'fields' => [
                                    "Staatus" => "Ootel",
                                    "Osalejad" => $participants,
                                    "Märkused" => $message,
                                    "Klient" => [$clientId],
                                    "Reis/koolitus" => [$reisKoolitusId],
                                ]
                            ],
                        ],
                    ];

                    $responseBroneeringud = $client->request('POST', $endpointBroneeringud, [
                        'headers' => $headers,
                        'json' => $dataBroneering,
                    ]);

                } catch (ClientException $e) {
                    echo "Error: " . $e->getMessage();
                }

                // Send email to client
                $mail = get_field('contact_form_recipient', 'options') ? get_field('contact_form_recipient', 'options') : get_option('admin_email');
                $emailArray = preg_split('/\s*,\s*/', $mail, -1, PREG_SPLIT_NO_EMPTY);

                $subject = 'Registreerimine koolitusele';
                $subject_copy = 'Registreerimise koopia email';
                $message = 'Koolitus: ' . $training . '<br>Kuupäev: ' . $date . '<br>Saatja: ' . $full_name . '<br>Kliendi email: ' . $email . '<br>Isikukood: ' .
                    $personal_code . '<br>Ettevõte: ' . $company_name . '<br>Aaadress: ' . $address . '<br>Telefon: ' . $phone . '<br>Osalejad: ' . $participants .
                    '<br>Märkused: ' . $message;

                $headers = array('Content-Type: text/html; charset=UTF-8');

                foreach ($emailArray as $recipient) {
                    wp_mail($recipient, $subject, $message, $headers);
                }

                if ($send_copy) {
                    wp_mail($email, $subject_copy, $message, $headers);
                }

                $success_message = esc_html__('Your message has been successfully sent.', 'sage');

            }

        }

        //Display the validation errors
        if (!empty($validation_messages)) {
            echo '<div class="alert alert-danger d-grid gap-3 mb-4" role="alert">';
            foreach ($validation_messages as $validation_message) {
                echo '<div class="validation-message">' . esc_html($validation_message) . '</div>';
            }
            echo '</div>';
        }

        return [
            'success_message' => $success_message,
            'recaptcha_lang' => $this->getRecaptchaLang(),
            'post_title' => get_the_title()
        ];
    }

    private function getRecaptchaLang()
    {
        $lang = 'et';
//        if(get_current_blog_id() != 3){
//            $lang = 'en';
//        }
        return $lang;
    }
}
