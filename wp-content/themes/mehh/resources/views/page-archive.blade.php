{{--
  Template Name: Archive
--}}

@extends('layouts.app')

@section('content')
  @php
    $args = array('post_type' => 'trainings');
    $cpt_query = new WP_Query($args);
  @endphp
  <div class="wrap container" role="document">
    <div class="content">
      <div class="main-content-wrapper">
        @include('partials.page-header')

        @while($cpt_query->have_posts()) @php($cpt_query->the_post())
          @if(has_post_thumbnail())
            <div class="top-image">
              {!! get_the_post_thumbnail(null,'top_image') !!}
            </div>
          @endif
          @includeFirst(['partials.content-trainings', 'partials.content'])
        @endwhile
      </div>
    </div>
    @include('partials.sidebar')
  </div>
@endsection
