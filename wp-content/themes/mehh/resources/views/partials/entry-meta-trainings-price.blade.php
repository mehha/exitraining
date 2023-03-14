@if($price)
  <div class="text-center">
    <h5 class="mb-1">{{$price}}</h5>
    <div>{{__('VAT will be added!', 'sage')}}</div>
  </div>
@endif
