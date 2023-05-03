<div class="entry-content">
  <article @php(post_class())>
    <header>
      <h1 class="entry-title">
        {!! $title !!}
      </h1>
      @include('partials/entry-meta-trainings-category')
    </header>

    <div class="entry-content">
      @php(the_content())
      @include('partials/entry-meta-trainings-register-info')
      @include('partials/entry-meta-trainings-trainer')
    </div>
  </article>
</div>
