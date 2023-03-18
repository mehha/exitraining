<script async defer src='https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit&hl={{$recaptcha_lang}}'></script>

@if($success_message)
  <div class="alert alert-success mb-4" role="alert">
    <div>
      {!! __('Your message has been successfully sent.', 'sage') !!}
    </div>
  </div>
@endif

<form id="contact-form" class="form contact-form needs-validation" action="<?php echo esc_url( get_permalink() ); ?>"
      method="post" novalidate>

  <input type="hidden" name="contact_form">

  <div class="col-12 mb-2" title="{{$post_title}}">
    <label class="form-label" for="training">{{__('Training', 'sage')}}*</label>
    <input type="text" id="training" class="form-control" name="training" value="{{$post_title}}" placeholder="{{$post_title}}" readonly>
  </div>

  <div class="col-12 mb-3">
    <label class="form-label d-none" for="date">{{__('Date', 'sage')}}*</label>
    <input type="text" id="date" class="form-control" name="date"
           value="@if(isset($start_date) && $start_date) {{$start_date}} @endif @if(isset($end_date) && $end_date) - {{$end_date}} @endif"
           placeholder="@if(isset($start_date) && $start_date) {{$start_date}} @endif @if(isset($end_date) && $end_date) - {{$end_date}} @endif"
           readonly
    >
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="full-name">{{__('Name', 'sage')}}*</label>
    <input type="text" id="full-name" class="form-control" name="full_name" placeholder="{{__('Name', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="personal-code">{{__('Personal code', 'sage')}}*</label>
    <input type="number" id="personal-code" class="form-control" name="personal_code" placeholder="{{__('Personal code', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="company-name">{{__('Company name', 'sage')}}*</label>
    <input type="text" id="company-name" class="form-control" name="company_name" placeholder="{{__('Company name', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="address">{{__('Address', 'sage')}}*</label>
    <input type="text" id="address" class="form-control" name="address" placeholder="{{__('Address', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="phone">{{__('Phone', 'sage')}}*</label>
    <input type="tel" id="phone" class="form-control" name="phone" placeholder="{{__('Phone', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="email">{{__('Email', 'sage')}}*</label>
    <input type="email" id="email" class="form-control" name="email" placeholder="{{__('Email', 'sage')}}*" required>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="participants">{{__('Add participants', 'sage')}}*</label>
    <textarea id="participants" class="form-control" name="participants" rows="4" placeholder="{{__('Add participants', 'sage')}}*" required></textarea>
  </div>

  <div class="col-12 mb-2">
    <label class="form-label fw-bold d-none" for="message">{{__('Notes', 'sage')}}*</label>
    <textarea id="message" class="form-control" name="message" rows="4" placeholder="{{__('Notes', 'sage')}}*" required></textarea>
  </div>

  @if(get_field('captcha_key', 'options'))
    <div class="col-12 recaptcha-container mb-2">
      <div id="g-recaptcha" class="g-recaptcha" data-sitekey="{{get_field('captcha_key', 'options')}}"></div>
    </div>
  @endif

  @if(get_field('privacy_disclaimer', 'options'))
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="contact-form-confirm-checkbox"
               name="contact-form-confirm" value="agree" required checked>
        <label class="form-check-label" for="contact-form-confirm-checkbox">
          {!! get_field('privacy_disclaimer', 'options') !!}
        </label>
        <div class="invalid-feedback">
          {{ __('You must agree before submitting.', 'sage') }}
        </div>
      </div>
    </div>
  @endif

  <div class="col-12 mt-3 d-none">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="send-copy-checkbox"
             name="contact_form_send_copy" value="agree" checked>
      <label class="form-check-label" for="send-copy-checkbox">
        {{ __('Send copy to your email.', 'sage') }}
      </label>
    </div>
  </div>

  <input class="btn btn-primary mt-4" type="submit" id="contact-form-submit" value="{{__('Submit', 'sage')}}">

</form>
