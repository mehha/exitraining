@if(isset($post) && !get_field('hide_sidebar', $post->ID))
  <aside class="sidebar sidebar-primary mt-5 mt-lg-0">
    @php(dynamic_sidebar('sidebar-primary'))
  </aside>
@endif
