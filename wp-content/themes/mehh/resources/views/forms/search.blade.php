<form role="search" method="get" class="search-form d-flex align-items-center" action="{{ home_url('/') }}">
  <label class="form-label">
    <span class="visually-hidden">
      {{ _x('Search for:', 'label', 'sage') }}
    </span>
  </label>

  <div class="input-group">
    <label for="searchField-{{$id}}" class="visually-hidden">{{ __('Search', 'sage') }}</label>
    <input
      id="searchField-{{$id}}"
      type="search"
      placeholder="{!! __('Search', 'sage') !!}"
      value="{{ get_search_query() }}"
      name="s"
      class="form-control search-field ms-0"
      autocomplete="off"
    >
  </div>
</form>
