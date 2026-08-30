<?php
/**
 * Template Name: HINL: Services & Pricing
 */
hinl_header('services');
?>

<main style="padding-top:var(--hinl-navbar-height);">

  <!-- Hero -->
  <header style="position:relative;min-height:480px;display:flex;align-items:center;padding:4rem 0 3rem;text-align:center;overflow:hidden;">
    <div style="position:absolute;inset:0;z-index:0;">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/images/DSC06085-1024x683.jpg'); ?>" alt="" style="width:100%;height:100%;object-fit:cover;">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(18,20,21,.8),rgba(18,20,21,.7),rgba(18,20,21,1));"></div>
    </div>
    <div class="hinl-container" style="position:relative;z-index:2;width:100%;">
      <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:12px;letter-spacing:.2em;">Investment Security</span>
      <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Transparent Pricing, Precise Audits.</h1>
      <p style="font-size:1.1rem;color:var(--hinl-on-surface-variant);max-width:600px;margin:0 auto 2rem;line-height:1.7;">
        Protect your real estate investment with Nigeria&rsquo;s most detailed technical audits. No hidden fees, just uncompromising precision.
      </p>
    </div>
  </header>

  <!-- Pricing Grid -->
  <section class="hinl-section">
    <div class="hinl-container">
      <div style="text-align:center;margin-bottom:3rem;">
        <h2 class="hinl-h2" style="margin-bottom:12px;">Core Inspection Packages</h2>
        <div class="hinl-divider" style="margin:0 auto;"></div>
      </div>

      <div class="hinl-pricing-grid">
        <?php
        $tiers = [
          ['name' => 'HINL Move-In Certification',        'price' => '₦150,000', 'badge' => 'Starter',     'recommended' => false, 'features' => ['HINL Walk-through Inspection','Move-In Certificate','Summary of Major Defects']],
          ['name' => 'HINL Home Inspection (Standard)',    'price' => '₦350,000', 'badge' => 'Recommended', 'recommended' => true,  'features' => ['Full HINL Home Inspection','Foundation (Zip & Schmidt)','Thermal Scan','Pictures & Videos','Detailed Report']],
          ['name' => 'HINL No Utility Inspection',        'price' => '₦300,000', 'badge' => 'No Utilities', 'recommended' => false, 'features' => ['HINL Home Inspection (No Utilities)','Foundation (Zip & Schmidt)','Thermal Scan','Pictures & Videos','Detailed Report']],
          ['name' => 'HINL Snag Inspection',              'price' => '₦500,000', 'badge' => 'In-Depth',    'recommended' => false, 'features' => ['HINL Snag Inspection','Foundation (Zip & Schmidt)','Pictures & Videos','Detailed Report']],
        ];
        foreach ($tiers as $tier):
          $cardClass = $tier['recommended'] ? 'hinl-card hinl-card--featured' : 'hinl-card';
          $badgeClass = $tier['recommended'] ? 'hinl-badge' : 'hinl-badge hinl-badge--muted';
        ?>
        <div class="<?php echo $cardClass; ?>" style="position:relative;display:flex;flex-direction:column;">
          <div class="<?php echo $badgeClass; ?>"><?php echo esc_html($tier['badge']); ?></div>
          <h3 class="hinl-headline" style="font-size:1.25rem;font-weight:600;margin-bottom:.5rem;"><?php echo esc_html($tier['name']); ?></h3>
          <div class="hinl-price" style="margin-bottom:1.5rem;"><?php echo esc_html($tier['price']); ?></div>
          <ul class="hinl-checklist" style="flex-grow:1;margin-bottom:2rem;">
            <?php foreach ($tier['features'] as $f): ?>
            <li>
              <span class="material-symbols-outlined">check_circle</span>
              <?php echo esc_html($f); ?>
            </li>
            <?php endforeach; ?>
          </ul>
          <a href="#booking" class="hinl-btn <?php echo $tier['recommended'] ? 'hinl-btn-primary' : 'hinl-btn-ghost'; ?>" style="text-align:center;">Select Plan</a>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Booking Section -->
  <section class="hinl-section" id="booking" style="scroll-margin-top:80px;">
    <div class="hinl-container">
      <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:5rem;align-items:start;">
        <div>
          <h2 class="hinl-h2" style="margin-bottom:1.5rem;">Secure Your Inspection Date</h2>
          <p style="color:var(--hinl-on-surface-variant);margin-bottom:2rem;line-height:1.7;">
            Fill out the form to initiate your technical audit. Our team will confirm your slot within 2 business hours.
          </p>
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div style="display:flex;align-items:center;gap:1rem;">
              <div style="width:48px;height:48px;border-radius:50%;background:var(--hinl-surface-container);border:1px solid var(--hinl-outline-variant);display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined hinl-primary-text">timer</span>
              </div>
              <div>
                <div style="font-weight:700;">Rapid Response</div>
                <div style="font-size:.875rem;color:var(--hinl-on-surface-variant);">Confirmed bookings scheduled within 48 hours.</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <div style="width:48px;height:48px;border-radius:50%;background:var(--hinl-surface-container);border:1px solid var(--hinl-outline-variant);display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined hinl-primary-text">verified</span>
              </div>
              <div>
                <div style="font-weight:700;">Certified Auditors</div>
                <div style="font-size:.875rem;color:var(--hinl-on-surface-variant);">Every inspection led by a registered professional engineer.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hinl-card">
          <?php hinl_booking_form(); ?>
        </div>
      </div>
    </div>
  </section>

</main>

<?php hinl_footer(); ?>
