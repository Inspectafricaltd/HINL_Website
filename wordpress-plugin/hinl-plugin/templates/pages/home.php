<?php
/**
 * Template Name: HINL: Home
 */
hinl_header('home');

$IMG_BASE = plugin_dir_url( dirname( dirname( __FILE__ ) ) ) . 'assets/images/';
?>

<main>

  <!-- ── HERO ── -->
  <section style="position:relative;min-height:100vh;display:flex;align-items:center;padding-top:var(--hinl-navbar-height);overflow:hidden;">
    <div style="position:absolute;inset:0;z-index:0;">
      <img src="<?php echo esc_url($IMG_BASE . 'DSC06085-1024x683.jpg'); ?>" alt="Property inspection in progress" style="width:100%;height:100%;object-fit:cover;">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,var(--hinl-surface),rgba(18,20,21,.7) 60%,transparent);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to top,var(--hinl-surface),transparent 50%);"></div>
    </div>
    <div style="position:relative;z-index:10;width:100%;max-width:1280px;margin:0 auto;padding:5rem 2rem;">
      <div style="max-width:700px;">
        <h1 class="hinl-h1" style="font-size:clamp(2.5rem,6vw,4.5rem);line-height:1.1;margin-bottom:2rem;">
          Build or Buy With <span class="hinl-primary-text" style="font-style:italic;">Confidence</span> — Not Assumptions
        </h1>
        <p style="color:var(--hinl-on-surface-variant);font-size:1.15rem;max-width:560px;margin-bottom:2.5rem;line-height:1.7;">
          Professional property inspections and construction control that reveal hidden defects, verify work, and protect your investment.
        </p>
        <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem;">
          <span style="display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--hinl-on-surface-variant);">
            <span class="material-symbols-outlined hinl-primary-text" style="font-size:18px;">verified</span>
            100+ years combined construction experience
          </span>
          <span style="display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--hinl-on-surface-variant);">
            <span class="material-symbols-outlined" style="font-size:18px;color:#facc15;">star</span>
            5-Star Google Rating
          </span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;">
          <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary" style="font-size:1.1rem;padding:1.25rem 2.5rem;">Book Inspection</a>
          <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-btn hinl-btn-outline" style="font-size:1.1rem;padding:1.25rem 2.5rem;">View Pricing</a>
        </div>
      </div>
    </div>
    <!-- Proof strip -->
    <div style="position:absolute;bottom:0;left:0;right:0;z-index:10;background:rgba(18,20,21,.9);backdrop-filter:blur(8px);border-top:1px solid rgba(255,255,255,.08);padding:1rem 2rem;">
      <div style="max-width:1280px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;font-size:.875rem;color:var(--hinl-on-surface-variant);">
        <?php
        $proofs = ['Hidden defect detection','Construction control + material testing','Independent, evidence-based reports','Non-invasive inspection tools'];
        foreach ($proofs as $p): ?>
        <span style="display:flex;align-items:center;gap:.5rem;">
          <span class="material-symbols-outlined hinl-primary-text" style="font-size:16px;">check_circle</span>
          <?php echo esc_html($p); ?>
        </span>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ── THE PROBLEM ── -->
  <section style="padding:6rem 2rem;background:var(--hinl-surface-container-low);">
    <div class="hinl-container" style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;">
      <div>
        <span class="hinl-label" style="color:var(--hinl-error);display:block;margin-bottom:1.5rem;">The Problem</span>
        <h2 class="hinl-h2" style="margin-bottom:2rem;">Most Defects Are <span class="hinl-primary-text">Built In</span> — Not Discovered</h2>
        <p style="color:var(--hinl-on-surface-variant);font-size:1.1rem;line-height:1.7;margin-bottom:2.5rem;">
          Properties often look perfect at handover. Then cracks appear. Wiring fails. Plumbing leaks.
        </p>
        <div style="background:rgba(186,26,26,.1);border-left:4px solid var(--hinl-error);padding:2rem;border-radius:0 var(--hinl-radius) var(--hinl-radius) 0;">
          <p style="color:var(--hinl-on-surface);font-weight:700;font-size:1.05rem;margin-bottom:.5rem;">
            Most defects only show after 6 months — making standard warranties inadequate.
          </p>
          <p style="color:var(--hinl-on-surface-variant);font-size:.9rem;">By then, the damage is already done.</p>
        </div>
      </div>
      <div style="position:relative;border-radius:1rem;overflow:hidden;box-shadow:0 25px 50px rgba(0,0,0,.5);">
        <img src="<?php echo esc_url($IMG_BASE . 'DSC06096-1024x683.jpg'); ?>" alt="HINL inspector uncovering hidden defects" style="width:100%;height:480px;object-fit:cover;">
        <div style="position:absolute;bottom:1.5rem;left:1.5rem;">
          <span style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(186,26,26,.9);backdrop-filter:blur(4px);padding:.5rem 1rem;border-radius:.5rem;">
            <span class="material-symbols-outlined" style="color:#fff;font-size:16px;">warning</span>
            <span style="color:#fff;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">Defect Found Before Handover</span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SERVICES GRID ── -->
  <section style="padding:6rem 2rem;">
    <div class="hinl-container">
      <div style="text-align:center;margin-bottom:4rem;">
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Our Services</span>
        <h2 class="hinl-h2">Complete Property Protection</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;">
        <?php
        $services = [
          ['icon'=>'home_search',   'name'=>'Standard Home Inspection',    'price'=>'₦350,000', 'slug'=>'hinl-standard-home-inspection'],
          ['icon'=>'rule',          'name'=>'Snag Inspection',             'price'=>'₦500,000', 'slug'=>'hinl-snag-inspection'],
          ['icon'=>'flash_off',     'name'=>'No Utility Inspection',       'price'=>'₦300,000', 'slug'=>'hinl-no-utility-inspection'],
          ['icon'=>'construction',  'name'=>'New Construction Inspection', 'price'=>'From ₦250,000', 'slug'=>'hinl-new-construction-inspection'],
          ['icon'=>'domain',        'name'=>'Commercial Inspection',       'price'=>'On demand', 'slug'=>'hinl-commercial-building-inspection-consultancy'],
          ['icon'=>'key',           'name'=>'Move-In Certification',       'price'=>'₦150,000', 'slug'=>'move-in-certification'],
          ['icon'=>'thermostat',    'name'=>'Thermal Inspection',          'price'=>'₦50,000',  'slug'=>'hinl-thermal-inspection'],
          ['icon'=>'straighten',    'name'=>'Zip Level Inspection',        'price'=>'Add-on',   'slug'=>'hinl-zip-level-inspection'],
        ];
        foreach ($services as $s): ?>
        <a href="<?php echo esc_url(home_url('/' . $s['slug'] . '/')); ?>" class="hinl-card" style="display:block;text-decoration:none;transition:border-color .2s,transform .2s;" onmouseover="this.style.borderColor='var(--hinl-primary)';this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='';this.style.transform='';">
          <span class="material-symbols-outlined hinl-primary-text" style="font-size:32px;margin-bottom:1rem;"><?php echo esc_html($s['icon']); ?></span>
          <h3 style="font-family:var(--hinl-font-headline);font-weight:700;font-size:1rem;margin-bottom:.5rem;color:var(--hinl-on-surface);"><?php echo esc_html($s['name']); ?></h3>
          <p style="color:var(--hinl-primary);font-weight:700;font-size:.875rem;"><?php echo esc_html($s['price']); ?></p>
        </a>
        <?php endforeach; ?>
      </div>
      <div style="text-align:center;margin-top:3rem;">
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-btn hinl-btn-outline">View All Services & Pricing</a>
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section style="padding:6rem 2rem;">
    <div class="hinl-container">
      <div style="background:var(--hinl-surface-container-low);border-radius:2rem;padding:5rem;text-align:center;position:relative;overflow:hidden;">
        <h2 class="hinl-h2" style="margin-bottom:2rem;">Don&rsquo;t Build Blind. <span class="hinl-primary-text">Don&rsquo;t Buy Blind.</span></h2>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;">
          <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary" style="font-size:1.1rem;padding:1.25rem 3rem;">Book Inspection Now</a>
          <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-btn hinl-btn-outline" style="font-size:1.1rem;padding:1.25rem 3rem;">View Pricing</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem;padding-top:3rem;border-top:1px solid rgba(255,255,255,.08);max-width:600px;margin-left:auto;margin-right:auto;">
          <?php
          $contacts = [
            ['icon'=>'call',     'text'=>'+234 806 161 6311'],
            ['icon'=>'language', 'text'=>'homeinspectors.ng'],
            ['icon'=>'mail',     'text'=>'info@homeinspectors.ng'],
          ];
          foreach ($contacts as $c): ?>
          <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;text-align:center;">
            <div style="width:40px;height:40px;background:rgba(101,179,46,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <span class="material-symbols-outlined hinl-primary-text"><?php echo esc_html($c['icon']); ?></span>
            </div>
            <span style="font-size:.875rem;color:var(--hinl-on-surface);"><?php echo esc_html($c['text']); ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <!-- Careers Banner -->
  <section style="padding:4rem 2rem;background:var(--hinl-surface-container-low);">
    <div class="hinl-container">
      <div style="border:1px solid rgba(101,179,46,.3);border-radius:1rem;background:var(--hinl-surface-container);padding:3rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2rem;">
        <div>
          <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:.75rem;">Now Recruiting</span>
          <h2 style="font-family:var(--hinl-font-headline);font-weight:700;font-size:1.75rem;margin-bottom:.75rem;">Become a Certified Property Inspector</h2>
          <p style="color:var(--hinl-on-surface-variant);max-width:500px;line-height:1.6;">
            Join Nigeria&rsquo;s fastest-growing network of professional property inspectors. Earn from real assignments and build a career in a growing industry.
          </p>
        </div>
        <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="hinl-btn hinl-btn-primary" style="display:flex;align-items:center;gap:.5rem;font-size:1rem;padding:1rem 2rem;white-space:nowrap;">
          Apply Now
          <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Final strip -->
  <div style="background:var(--hinl-primary);padding:1.5rem;text-align:center;">
    <p style="color:#fff;font-family:var(--hinl-font-headline);font-weight:900;font-size:1.1rem;text-transform:uppercase;letter-spacing:.15em;">Inspect Before You Invest</p>
  </div>

</main>

<?php hinl_footer(); ?>
