<div class="entry-content">
  <article @php(post_class())>
    <header>
      <h2 class="entry-title">
        <a href="{{ get_permalink() }}">
          {!! $title !!}
        </a>
      </h2>

      <div class="d-flex flex-column flex-md-row gap-2 items-center mb-3">
        @include('partials/entry-meta-trainings-date', ['left_aligned' => true])
        @include('partials/entry-meta-trainings-category')
      </div>
    </header>

    <div class="entry-summary">
      @php(the_excerpt())
    </div>
  </article>
</div>
