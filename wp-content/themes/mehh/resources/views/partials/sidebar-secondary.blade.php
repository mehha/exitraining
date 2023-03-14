@if(!get_field('hide_sidebar', $post->ID))
  <aside class="sidebar sidebar-secondary">
    <section class="widget widget_block">
      <div class="wp-block-group has-green-light-background-color text-center px-3 py-4 rounded d-grid gap-4">
        @include('partials.entry-meta-trainings-date', ['left_aligned' => false])
        @include('partials.entry-meta-trainings-price')
        @include('partials.entry-meta-trainings-location')
      </div>
    </section>

    @php(dynamic_sidebar('sidebar-secondary'))
  </aside>
@endif
