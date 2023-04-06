{{--
  Template Name: Archive
--}}

@extends('layouts.app')

@section('content')
  @php
    $args = array(
      'post_type' => 'trainings',
      'post_status' => 'publish',
      'meta_key' => 'begin_date',
      'orderby' => 'begin_date',
      'order' => 'ASC',
      'meta_value'   => date( "Ymd" ),
      'meta_compare' => '>',
    );
    $cpt_query = new WP_Query($args);
  @endphp
  <div class="wrap container" role="document">
    <div class="content">
      <div class="main-content-wrapper">
        @include('partials.page-header')

        @while($cpt_query->have_posts()) @php($cpt_query->the_post())
          <div class="article-container d-sm-flex gap-3">
            @if(has_post_thumbnail())
              <div class="top-image">
                {!! get_the_post_thumbnail(null, 'thumbnail', ['class' => 'rounded']) !!}
              </div>
            @endif
            @includeFirst(['partials.content-trainings', 'partials.content'])
          </div>
        @endwhile

        @php(wp_reset_query())
      </div>
    </div>
    @include('partials.sidebar')
  </div>
@endsection
