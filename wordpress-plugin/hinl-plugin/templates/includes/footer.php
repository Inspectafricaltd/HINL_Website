<footer class="hinl-footer" role="contentinfo">
  <div class="hinl-container">
    <div class="hinl-footer__grid">

      <!-- Brand -->
      <div>
        <img src="<?php echo esc_url(get_template_directory_uri() . '/images/logo.png'); ?>" alt="HINL" style="height:56px;width:auto;margin-bottom:1rem;">
        <p style="color:var(--hinl-outline);font-size:0.875rem;line-height:1.6;max-width:260px;">
          Nigeria&rsquo;s leading independent property inspection firm. Professional engineers protecting your real estate investment.
        </p>
        <div style="display:flex;gap:12px;margin-top:1.5rem;">
            <?php
          $socials = [
            ['href' => 'https://www.instagram.com/homeinspectorng',                     'label' => 'Instagram', 'svg' => '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'],
            ['href' => 'https://www.facebook.com/homeinspectorng',                      'label' => 'Facebook',  'svg' => '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>'],
            ['href' => 'https://www.x.com/homeinspectorng',                             'label' => 'X',         'svg' => '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'],
            ['href' => 'https://www.tiktok.com/@homeinspectorsng',                       'label' => 'TikTok',    'svg' => '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>'],
            ['href' => 'https://www.linkedin.com/company/homeinspectionnigerialimited', 'label' => 'LinkedIn',  'svg' => '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'],
            ['href' => 'https://www.snapchat.com/add/homeinspectorng',                  'label' => 'Snapchat',  'svg' => '<path d="M12.166 3.549c-.128 0-.258.006-.388.016a4.894 4.894 0 0 0-3.793 2.214 5.005 5.005 0 0 0-.725 2.663v.092c-.003.12-.006.24-.006.362 0 .224.011.445.026.663-.136.058-.274.09-.41.09-.204 0-.384-.07-.614-.174l-.071-.033a.706.706 0 0 0-.327-.076.893.893 0 0 0-.872.748.87.87 0 0 0 .571.957c.136.047.272.076.407.1.424.077.843.166 1.12.575.063.092.063.19-.005.354l-.022.049c-.164.375-.447 1.023-.447 1.023-.065.145-.071.31-.016.458a.843.843 0 0 0 .5.485c.1.035.206.053.311.053.296 0 .605-.137.904-.27.286-.127.58-.259.875-.259.127 0 .253.018.375.055.275.08.485.248.723.434.58.45 1.296 1.009 2.75 1.009 1.454 0 2.169-.559 2.75-1.01.238-.185.448-.354.723-.433.122-.037.248-.055.375-.055.295 0 .589.132.875.26.299.132.608.269.904.269.105 0 .211-.018.311-.053a.843.843 0 0 0 .5-.485.852.852 0 0 0-.016-.458s-.283-.648-.447-1.023l-.022-.05c-.068-.163-.068-.261-.005-.353.277-.41.696-.498 1.12-.575.135-.024.27-.053.407-.1a.87.87 0 0 0 .571-.957.893.893 0 0 0-.872-.748.706.706 0 0 0-.327.076l-.071.033c-.23.104-.41.174-.614.174-.136 0-.274-.032-.41-.09.015-.218.026-.439.026-.663 0-.122-.003-.242-.006-.362v-.092a5.005 5.005 0 0 0-.725-2.663 4.894 4.894 0 0 0-3.793-2.214 4.977 4.977 0 0 0-.388-.016z"/>'],
          ];
          foreach ($socials as $s): ?>
          <a href="<?php echo esc_url($s['href']); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr($s['label']); ?>"
             style="width:32px;height:32px;border-radius:50%;border:1px solid rgba(138,148,128,0.2);display:flex;align-items:center;justify-content:center;color:var(--hinl-outline);transition:color 0.2s,border-color 0.2s;"
             onmouseover="this.style.color='var(--hinl-primary)';this.style.borderColor='var(--hinl-primary)'"
             onmouseout="this.style.color='var(--hinl-outline)';this.style.borderColor='rgba(138,148,128,0.2)'">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><?php echo $s['svg']; ?></svg>
          </a>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Services (hidden on mobile) -->
      <div class="hinl-footer__col--desktop-only">
        <div class="hinl-footer__col-title">Services</div>
        <ul class="hinl-footer__links">
          <?php
          $service_links = [
            ['label' => 'Standard Home Inspection',   'slug' => 'hinl-standard-home-inspection'],
            ['label' => 'Snag Inspection',             'slug' => 'hinl-snag-inspection'],
            ['label' => 'Construction Control',        'slug' => 'construction-control'],
            ['label' => 'No Utility Inspection',       'slug' => 'hinl-no-utility-inspection'],
            ['label' => 'Commercial Inspection',       'slug' => 'hinl-commercial-building-inspection-consultancy'],
            ['label' => 'Thermal Inspection',          'slug' => 'hinl-thermal-inspection'],
            ['label' => 'Virtual Reality',             'slug' => 'vr-home-inspection'],
          ];
          foreach ($service_links as $sl): ?>
          <li><a href="<?php echo esc_url(home_url('/' . $sl['slug'] . '/')); ?>"><?php echo esc_html($sl['label']); ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <div class="hinl-footer__col-title">Company</div>
        <ul class="hinl-footer__links">
          <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
          <li><a href="<?php echo esc_url(home_url('/diaspora-services/')); ?>">Diaspora Services</a></li>
          <li><a href="<?php echo esc_url(home_url('/blog/')); ?>">Blog</a></li>
          <li><a href="<?php echo esc_url(home_url('/faqs/')); ?>">Useful Information</a></li>
          <li><a href="<?php echo esc_url(home_url('/careers/')); ?>">Careers</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>">View Pricing</a></li>
        </ul>
      </div>

      <!-- Legal (hidden on mobile) -->
      <div class="hinl-footer__col--desktop-only">
        <div class="hinl-footer__col-title">Legal</div>
        <ul class="hinl-footer__links">
          <li><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Privacy Policy</a></li>
          <li><a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>">Terms of Service</a></li>
          <li><a href="https://www.homeinspectors.ng/wp-content/uploads/2025/04/NATIONAL-STANDARDS-OF-PRACTICE-1.pdf" target="_blank" rel="noopener noreferrer">Standards of Practice</a></li>
          <li><a href="https://www.homeinspectors.ng/wp-content/uploads/2025/04/NATIONAL-CODE-OF-CONDUCT-1.pdf" target="_blank" rel="noopener noreferrer">Code of Ethics</a></li>
        </ul>
      </div>

    </div>

    <div class="hinl-footer__bottom">
      <span>&copy; <?php echo date('Y'); ?> Home Inspection Nigeria Limited. All rights reserved.</span>
      <span style="color:rgba(138,148,128,0.4);">Independent &middot; Evidence-Based &middot; Trusted</span>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
