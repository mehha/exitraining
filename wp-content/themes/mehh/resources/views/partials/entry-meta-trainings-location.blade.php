@if($location)
  <div class="text-center fw-semibold">
    <span class="d-flex align-items-center gap-2 justify-content-center">@svg('MapPin') {{$location}}</span>
  </div>
@else
  <div class="text-center">{{__('No location added yet', 'sage')}}</div>
@endif
