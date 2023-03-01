@extends('layouts.app')

@section('content')
  @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif

  @while(have_posts()) @php(the_post())
  <div class="wrap container" role="document">
    <div class="content">
      <div class="main-content-wrapper">
        @include('partials.page-header')
        @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
      </div>
    </div>
    @include('partials.sidebar')
  </div>
  @endwhile

  {!! get_the_posts_navigation() !!}
@endsection
