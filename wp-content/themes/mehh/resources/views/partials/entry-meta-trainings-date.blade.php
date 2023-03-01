@if($start_date || $end_date)
  <time class="d-flex gap-2 align-items-center fw-semibold @if(!$left_aligned) justify-content-center @endif">@svg('CalendarDays') {{$start_date}} @if(isset($end_date) && $end_date) - {{$end_date}} @endif</time>
@endif
