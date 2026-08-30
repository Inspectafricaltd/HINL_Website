<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="hinl-navbar" role="banner">
  <div class="hinl-navbar__inner hinl-container">

    <a href="<?php echo esc_url(home_url('/')); ?>" class="hinl-navbar__logo" aria-label="HINL Home">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/images/logo.png'); ?>" alt="HINL" />
    </a>

    <nav class="hinl-navbar__links" id="hinl-nav-menu" aria-label="Main navigation">

      <!-- Services dropdown -->
      <div class="hinl-dropdown">
        <button class="hinl-dropdown__toggle hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], '/services') !== false ? 'active' : ''; ?>" aria-haspopup="true" aria-expanded="false">
          Services
          <span class="material-symbols-outlined" style="font-size:18px">keyboard_arrow_down</span>
        </button>
        <div class="hinl-dropdown__panel" role="menu">
          <?php
          $service_links = [
            ['label' => 'Standard Home Inspection',   'slug' => 'hinl-standard-home-inspection'],
            ['label' => 'Snag Inspection',             'slug' => 'hinl-snag-inspection'],
            ['label' => 'Construction Control',        'slug' => 'construction-control'],
            ['label' => 'No Utility Inspection',       'slug' => 'hinl-no-utility-inspection'],
            ['label' => 'Commercial Inspection',       'slug' => 'hinl-commercial-building-inspection-consultancy'],
            ['label' => 'Move-In Certification',       'slug' => 'move-in-certification'],
            ['label' => 'Thermal Inspection',          'slug' => 'hinl-thermal-inspection'],
            ['label' => 'Virtual Reality',             'slug' => 'vr-home-inspection'],
          ];
          foreach ($service_links as $sl):
          ?>
          <a href="<?php echo esc_url(home_url('/' . $sl['slug'] . '/')); ?>" class="hinl-dropdown__item" role="menuitem">
            <span class="material-symbols-outlined" style="font-size:16px;color:rgba(101,179,46,0.6)">chevron_right</span>
            <?php echo esc_html($sl['label']); ?>
          </a>
          <?php endforeach; ?>
          <div class="hinl-dropdown__divider">
            <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-dropdown__item hinl-dropdown__cta" role="menuitem">
              <span class="material-symbols-outlined" style="font-size:16px">payments</span>
              View All Pricing
            </a>
          </div>
        </div>
      </div>

      <a href="<?php echo esc_url(home_url('/diaspora-services/')); ?>" class="hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], 'diaspora') !== false ? 'active' : ''; ?>">
        Diaspora Services
      </a>
      <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], '/blog') !== false ? 'active' : ''; ?>">
        Blog
      </a>
      <a href="<?php echo esc_url(home_url('/about/')); ?>" class="hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], '/about') !== false ? 'active' : ''; ?>">
        About
      </a>
      <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], 'careers') !== false ? 'active' : ''; ?>" style="display:inline-flex;align-items:center;gap:6px;">
        Careers
        <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;background:var(--hinl-primary);color:#fff;padding:2px 6px;border-radius:4px;line-height:1.4;">Hiring</span>
      </a>
      <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="hinl-navbar__link <?php echo strpos($_SERVER['REQUEST_URI'], 'contact') !== false ? 'active' : ''; ?>">
        Contact
      </a>
    </nav>

    <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-navbar__cta">
      Book Your Inspection
    </a>

    <!-- Hamburger (mobile only) -->
    <button class="hinl-hamburger" id="hinl-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="hinl-mobile-drawer">
      <span class="hinl-hamburger__bar"></span>
      <span class="hinl-hamburger__bar"></span>
      <span class="hinl-hamburger__bar"></span>
    </button>

  </div>
</header>

<!-- Mobile overlay -->
<div class="hinl-mobile-overlay" id="hinl-mobile-overlay" aria-hidden="true"></div>

<!-- Mobile drawer -->
<nav class="hinl-mobile-drawer" id="hinl-mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">

  <!-- Drawer header -->
  <div class="hinl-mobile-drawer__head">
    <img src="<?php echo esc_url(get_template_directory_uri() . '/images/logo.png'); ?>" alt="HINL">
    <button class="hinl-mobile-drawer__close" id="hinl-drawer-close" aria-label="Close menu">
      <span class="material-symbols-outlined" style="font-size:20px">close</span>
    </button>
  </div>

  <!-- Drawer body -->
  <div class="hinl-mobile-drawer__body">

    <!-- Book CTA -->
    <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-mobile-cta" id="hinl-mobile-cta-link">
      <span class="material-symbols-outlined" style="font-size:18px">calendar_month</span>
      Book Your Inspection
    </a>

    <!-- Services accordion -->
    <button class="hinl-mobile-nav__item" id="hinl-mobile-services-toggle" aria-expanded="false">
      Services
      <span class="material-symbols-outlined" style="font-size:20px;color:var(--hinl-on-surface-variant);transition:transform 0.2s;" id="hinl-services-arrow">keyboard_arrow_down</span>
    </button>
    <div class="hinl-mobile-services" id="hinl-mobile-services-panel" style="display:none;">
      <?php
      $mobile_service_links = [
        ['label' => 'Standard Home Inspection',   'slug' => 'hinl-standard-home-inspection'],
        ['label' => 'Snag Inspection',             'slug' => 'hinl-snag-inspection'],
        ['label' => 'Construction Control',        'slug' => 'construction-control'],
        ['label' => 'No Utility Inspection',       'slug' => 'hinl-no-utility-inspection'],
        ['label' => 'New Construction',            'slug' => 'hinl-new-construction-inspection'],
        ['label' => 'Commercial Inspection',       'slug' => 'hinl-commercial-building-inspection-consultancy'],
        ['label' => 'Move-In Certification',       'slug' => 'move-in-certification'],
        ['label' => 'Thermal Inspection',          'slug' => 'hinl-thermal-inspection'],
        ['label' => 'Virtual Reality',             'slug' => 'vr-home-inspection'],
      ];
      foreach ($mobile_service_links as $sl): ?>
      <a href="<?php echo esc_url(home_url('/' . $sl['slug'] . '/')); ?>"><?php echo esc_html($sl['label']); ?></a>
      <?php endforeach; ?>
      <a href="<?php echo esc_url(home_url('/services/')); ?>" class="is-pricing">
        <span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:4px;">payments</span>View All Pricing
      </a>
    </div>

    <!-- Main links -->
    <?php
    $mobile_nav_links = [
      ['label' => 'Diaspora Services',  'url' => home_url('/diaspora-services/'),   'key' => 'diaspora'],
      ['label' => 'Blog',               'url' => home_url('/blog/'),               'key' => 'blog'],
      ['label' => 'About',              'url' => home_url('/about/'),              'key' => 'about'],
      ['label' => 'Careers',            'url' => home_url('/careers/'),            'key' => 'careers'],
      ['label' => 'Contact',            'url' => home_url('/contact-us/'),         'key' => 'contact'],
    ];
    foreach ($mobile_nav_links as $mnl):
      $is_active = strpos($_SERVER['REQUEST_URI'], $mnl['key']) !== false;
      $is_careers = $mnl['key'] === 'careers';
    ?>
    <a href="<?php echo esc_url($mnl['url']); ?>" class="hinl-mobile-nav__item <?php echo $is_active ? 'active' : ''; ?>" style="text-decoration:none;">
      <?php echo esc_html($mnl['label']); ?>
      <?php if ($is_careers): ?>
      <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;background:var(--hinl-primary);color:#fff;padding:2px 6px;border-radius:4px;line-height:1.4;">Hiring</span>
      <?php endif; ?>
    </a>
    <?php endforeach; ?>

  </div>

  <!-- Drawer footer -->
  <div class="hinl-mobile-drawer__foot">
    <a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>">Terms &amp; Conditions</a>
  </div>

</nav>

<script>
(function() {
  var hamburger = document.getElementById('hinl-hamburger');
  var overlay   = document.getElementById('hinl-mobile-overlay');
  var drawer    = document.getElementById('hinl-mobile-drawer');
  var closeBtn  = document.getElementById('hinl-drawer-close');
  var svcToggle = document.getElementById('hinl-mobile-services-toggle');
  var svcPanel  = document.getElementById('hinl-mobile-services-panel');
  var svcArrow  = document.getElementById('hinl-services-arrow');
  var ctaLink   = document.getElementById('hinl-mobile-cta-link');

  function openMenu() {
    hamburger.classList.add('is-open');
    overlay.classList.add('is-open');
    drawer.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('is-open');
    overlay.classList.remove('is-open');
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);
  ctaLink.addEventListener('click', closeMenu);

  drawer.querySelectorAll('a.hinl-mobile-nav__item').forEach(function(a) {
    a.addEventListener('click', closeMenu);
  });
  drawer.querySelectorAll('.hinl-mobile-services a').forEach(function(a) {
    a.addEventListener('click', closeMenu);
  });

  svcToggle.addEventListener('click', function() {
    var open = svcPanel.style.display !== 'none';
    svcPanel.style.display = open ? 'none' : 'flex';
    svcArrow.style.transform = open ? '' : 'rotate(180deg)';
    svcToggle.setAttribute('aria-expanded', String(!open));
  });
})();
</script>
