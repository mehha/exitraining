@if(!get_field('hide_sidebar', $post->ID))
  <aside class="sidebar sidebar-primary">
    @php(dynamic_sidebar('sidebar-primary'))
  </aside>
@endif
