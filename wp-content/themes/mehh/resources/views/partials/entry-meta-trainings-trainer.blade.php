@if($trainer && isset($trainer))
  <div class="mt-5">
    <h2>{{__('Trainer', 'sage')}}</h2>
    <div class="trainer-container has-gray-light-background-color p-3 rounded">
      <div class="trainer-image">
        {!! get_the_post_thumbnail($trainer->ID, 'thumbnail', ['class' => 'rounded']) !!}
      </div>
      <div class="trainer-content">
        <h3 class="mt-2">{{$trainer->post_title}}</h3>
        {!! $trainer->post_content !!}
      </div>
    </div>
  </div>
@endif
