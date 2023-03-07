<button type="button" class="btn-search bg-transparent border-0" aria-label="Search" data-bs-toggle="collapse" data-bs-target="#collapseSearch-{{$id}}" aria-expanded="false" aria-controls="collapseSearch-{{$id}}">
  <span class="visually-hidden">Search</span>@svg('MagnifyingGlass')
</button>

<div id="collapseSearch-{{$id}}" class="toggle-search-form collapse position-absolute w-100">
  <div class="container">
    <div class="ms-auto inner-container">
      @include('forms.search', ['id' => $id])
    </div>
  </div>
</div>
