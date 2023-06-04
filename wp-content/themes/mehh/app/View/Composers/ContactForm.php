<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

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
        if(!function_exists('get_field')) {
            return [];
        }

        $validation_messages = [];
       	$success_message = '';

       	if ( isset( $_POST['contact_form'] ) ) {

       		//Sanitize the data
       		$training = isset( $_POST['training'] ) ? sanitize_text_field( $_POST['training'] ) : '';
       		$date = isset( $_POST['date'] ) ? sanitize_text_field( $_POST['date'] ) : '';
       		$full_name = isset( $_POST['full_name'] ) ? sanitize_text_field( $_POST['full_name'] ) : '';
       		$personal_code = isset( $_POST['personal_code'] ) ? sanitize_text_field( $_POST['personal_code'] ) : '';
       		$company_name = isset( $_POST['company_name'] ) ? sanitize_text_field( $_POST['company_name'] ) : '';
       		$address = isset( $_POST['address'] ) ? sanitize_text_field( $_POST['address'] ) : '';
       		$phone = isset( $_POST['phone'] ) ? sanitize_text_field( $_POST['phone'] ) : '';
       		$email     = isset( $_POST['email'] ) ? sanitize_text_field( $_POST['email'] ) : '';
       		$participants   = isset( $_POST['participants'] ) ? sanitize_textarea_field( $_POST['participants'] ) : '';
       		$message   = isset( $_POST['message'] ) ? sanitize_textarea_field( $_POST['message'] ) : '';

            $send_copy   = isset( $_POST['contact_form_send_copy'] ) ? sanitize_textarea_field( $_POST['contact_form_send_copy'] ) : '';

       		//Validate the data
       		if ( strlen( $full_name ) === 0 ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid name.', 'sage' );
       		}

       		if ( strlen( $email ) === 0 or
       		     ! is_email( $email ) ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid email address.', 'sage' );
       		}

       		if ( strlen( $message ) === 0 ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid message.', 'sage' );
       		}

            // Check for honeypot field
            if ( isset( $_POST['honeypot'] ) && ! empty( $_POST['honeypot'] ) ) {
                $validation_messages[] = esc_html__( 'Error in contact form (honeypot).', 'sage' );
            }

            if(!esc_attr(isset($_POST['form-type'])) || esc_attr($_POST['form-type']) != 'contact-form'){
                $validation_messages[] = esc_html__( 'Error in contact form.', 'sage' );
            }

//            Check time
            $time = esc_attr($_POST['time']);
            if (!is_numeric($time) || ($time + 4 > time())) {
                $validation_messages[] = esc_html__( 'You have not filled out all the information required (time).', 'sage' );
            }

            // REFERER ERROR
            if (!check_ajax_referer('contact_nonce')) {
                $validation_messages[] = esc_html__( 'check_ajax_referer error in contact form.', 'sage' );
            }

       		//Send an email to the WordPress administrator if there are no validation errors
       		if ( empty( $validation_messages ) ) {

       			$mail    = get_field('contact_form_recipient', 'options') ? get_field('contact_form_recipient', 'options') : get_option( 'admin_email' );
       			$subject = 'Registreerimine koolitusele';
       			$subject_copy = 'Registreerimise koopia email';
       			$message = 'Koolitus: '.$training.'<br>Kuupäev: '.$date.'<br>Saatja: '.$full_name.'<br>Kliendi email: '.$email.'<br>Isikukood: '.
                    $personal_code.'<br>Ettevõte: '.$company_name.'<br>Aaadress: '.$address.'<br>Telefon: '.$phone.'<br>Osalejad: '.$participants.
                    '<br>Märkused: '.$message;

                $headers = array('Content-Type: text/html; charset=UTF-8');

       			wp_mail( $mail, $subject, $message, $headers );

                if ($send_copy) {
                    wp_mail( $email, $subject_copy, $message, $headers );
                }

       			$success_message = esc_html__( 'Your message has been successfully sent.', 'sage' );

       		}

       	}

       	//Display the validation errors
       	if ( ! empty( $validation_messages ) ) {
           echo '<div class="alert alert-danger d-grid gap-3 mb-4" role="alert">';
            foreach ( $validation_messages as $validation_message ) {
                echo '<div class="validation-message">' . esc_html( $validation_message ) . '</div>';
            }
            echo '</div>';
       	}

        return [
            'success_message' => $success_message,
            'recaptcha_lang' => $this->getRecaptchaLang(),
            'post_title' => get_the_title()
        ];
    }

    private function getRecaptchaLang() {
        $lang = 'et';
//        if(get_current_blog_id() != 3){
//            $lang = 'en';
//        }
        return $lang;
    }
}
