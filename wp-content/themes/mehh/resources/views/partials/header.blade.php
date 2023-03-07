<header class="banner fixed-top">
  <nav class="navbar navbar-primary navbar-expand-lg">
    <div class="container">

      <a class="navbar-brand" href="{{ home_url('/') }}" aria-label="{{$siteName}} logo">
        <img width="194" height="48" alt="Logo" src="@asset('/images/logo.webp')" />
      </a>

      <div class="d-lg-none">
        @include('forms.search-expandable', ['id' => 3])

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      @if (has_nav_menu('primary_navigation'))
        <div id="navbarPrimary" class="collapse navbar-collapse justify-content-end" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
        </div>
      @endif

      <div class="d-none d-lg-block">
        @include('forms.search-expandable', ['id' => 2])
      </div>

    </div>
  </nav>
</header>

<script type="text/javascript">
  let baseUrl = '{{get_bloginfo("url")}}';
</script>
