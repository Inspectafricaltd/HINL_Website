<?php
/**
 * Template Name: HINL: Diaspora Services
 */
hinl_header('diaspora');
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">

  <!-- Hero -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">For Nigerians Abroad</span>
    <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Your Eyes and Ears<br>On the Ground</h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:1.15rem;max-width:640px;line-height:1.7;">
      Wherever you are in the world, HINL acts as your professional representative in Nigeria — inspecting, documenting, and reporting on your behalf so you can invest with confidence.
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:2.5rem;">
      <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary" style="font-size:1.1rem;padding:1.25rem 2.5rem;">Secure Your Investment Today</a>
      <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-btn hinl-btn-outline" style="font-size:1.1rem;padding:1.25rem 2.5rem;">Schedule a Consultation</a>
    </div>
  </div>

  <!-- Services for Diaspora -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;margin-bottom:5rem;">
    <div class="hinl-container">
      <h2 class="hinl-h2" style="text-align:center;margin-bottom:3rem;">What We Do For You</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;">
        <?php
        $services = [
          ['icon'=>'videocam',       'title'=>'Live Video Inspection',   'desc'=>'We conduct your inspection live on a video call so you can follow along in real time from anywhere in the world.'],
          ['icon'=>'360',            'title'=>'Virtual Reality Capture', 'desc'=>'Immersive 3D walkthrough of your property with annotated defects — viewable on any device.'],
          ['icon'=>'description',    'title'=>'Detailed Written Report', 'desc'=>'Full photographic and video evidence report delivered to you and your advisors within 24–48 hours.'],
          ['icon'=>'gavel',          'title'=>'Legal Due Diligence',     'desc'=>'We coordinate with your lawyer, agent, and surveyor to ensure all documents are verified.'],
          ['icon'=>'construction',   'title'=>'Construction Monitoring', 'desc'=>'Regular site visits and progress reports while you build from abroad — phase by phase.'],
          ['icon'=>'support_agent',  'title'=>'Dedicated Liaison',       'desc'=>'A single point of contact who manages your inspection and answers every question promptly.'],
        ];
        foreach ($services as $s): ?>
        <div class="hinl-card">
          <span class="material-symbols-outlined hinl-primary-text" style="font-size:32px;margin-bottom:1rem;"><?php echo esc_html($s['icon']); ?></span>
          <h3 style="font-family:var(--hinl-font-headline);font-weight:700;margin-bottom:.5rem;"><?php echo esc_html($s['title']); ?></h3>
          <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);line-height:1.6;"><?php echo esc_html($s['desc']); ?></p>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <!-- How It Works -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <h2 class="hinl-h2" style="text-align:center;margin-bottom:3rem;">How It Works</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.5rem;counter-reset:steps;">
      <?php
      $steps = [
        'Contact us with your property details and requirements.',
        'We confirm a slot and send you a secure payment link.',
        'Inspection is conducted — live or on your behalf.',
        'Full report and video delivered to you within 48 hours.',
        'We advise on next steps, negotiations, or remediation.',
      ];
      foreach ($steps as $i => $step): ?>
      <div style="text-align:center;padding:1.5rem;">
        <div style="width:48px;height:48px;background:var(--hinl-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-family:var(--hinl-font-headline);font-weight:900;font-size:1.25rem;color:#fff;">
          <?php echo $i + 1; ?>
        </div>
        <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);line-height:1.6;"><?php echo esc_html($step); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- CTA -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;text-align:center;">
    <div class="hinl-container" style="max-width:640px;">
      <h2 class="hinl-h2" style="margin-bottom:1rem;">Ready to Invest From Abroad With Confidence?</h2>
      <p style="color:var(--hinl-on-surface-variant);margin-bottom:2.5rem;line-height:1.7;">
        Book your diaspora inspection package today. We operate across Lagos, Abuja, Port Harcourt, and all major cities.
      </p>
      <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary" style="font-size:1.1rem;padding:1.25rem 3rem;">Book Your Inspection</a>
    </div>
  </div>

</main>

<?php hinl_footer(); ?>
