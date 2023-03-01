@if(!get_field('hide_sidebar', $post->ID))
  <aside class="sidebar sidebar-secondary">
    @php(dynamic_sidebar('sidebar-secondary'))
  </aside>
@endif
