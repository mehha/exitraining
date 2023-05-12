<?php

$acf_fields = array(
    'page/page.php',
    'seo/seo.php',
    'contact-form/contact-form.php',
    'accordion/accordion.php',
    'training/training.php',
    'testimonial/testimonial.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
