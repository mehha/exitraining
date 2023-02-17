@if(get_field('kuupaev'))
  <time>
    {{__('Date', 'sage')}}: {{get_field('date')}}
  </time>
@endif

@if(get_field('hind'))
  <span>
    {{__('Price', 'sage')}}: {{get_field('price')}}
  </span>
@endif
