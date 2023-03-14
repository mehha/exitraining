{{--
  Template Name: Home
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <div class="wrap" role="document">
      <div class="content">
        <div class="main-content-wrapper">
          @includeFirst(['partials.content-page', 'partials.content'])
        </div>
      </div>
    </div>
  @endwhile
@endsection
