<?php
/**
 * Template Name: HINL: About Us
 */
hinl_header('about');
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">

  <!-- Hero -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">About HINL</span>
    <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Building Quality. <span class="hinl-primary-text">Verified.</span></h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:1.15rem;max-width:640px;line-height:1.7;">
      Home Inspectors Nigeria Limited (HINL) is redefining how structural integrity and construction standards are measured across the continent.
    </p>
  </div>

  <!-- Stats -->
  <div style="background:var(--hinl-surface-container-low);padding:4rem 2rem;margin-bottom:5rem;">
    <div class="hinl-container" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:2rem;">
      <?php
      $stats = [
        ['num'=>'100+',  'label'=>'Years Combined Experience'],
        ['num'=>'500+',  'label'=>'Properties Inspected'],
        ['num'=>'5★',    'label'=>'Google Rating'],
        ['num'=>'Reg.',  'label'=>'Professional Engineers'],
      ];
      foreach ($stats as $s): ?>
      <div class="hinl-card" style="text-align:center;">
        <div style="font-family:var(--hinl-font-headline);font-weight:900;font-size:2.5rem;color:var(--hinl-primary);margin-bottom:.5rem;"><?php echo esc_html($s['num']); ?></div>
        <div style="font-size:.875rem;color:var(--hinl-on-surface-variant);text-transform:uppercase;letter-spacing:.1em;"><?php echo esc_html($s['label']); ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- Mission -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;">
      <div>
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Our Mission</span>
        <h2 class="hinl-h2" style="margin-bottom:1.5rem;">Independent. Evidence-Based. On Your Side.</h2>
        <p style="color:var(--hinl-on-surface-variant);line-height:1.7;margin-bottom:1.5rem;">
          HINL was founded to fill a critical gap in the Nigerian property market: truly independent, engineering-grade inspections that protect buyers and investors — not developers or agents.
        </p>
        <p style="color:var(--hinl-on-surface-variant);line-height:1.7;margin-bottom:1.5rem;">
          Every report we produce is evidence-based, photographically documented, and written to be understood by non-engineers — while meeting the highest engineering standards.
        </p>
        <p style="color:var(--hinl-on-surface-variant);line-height:1.7;">
          We are completely independent of developers, contractors, and estate agents. Our only obligation is to the truth — and to your financial safety.
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <?php
        $values = [
          ['icon'=>'shield',        'title'=>'Independence',   'desc'=>'No developer partnerships. No referral fees. Pure professional objectivity.'],
          ['icon'=>'engineering',   'title'=>'Professional Standards','desc'=>'Every inspection led by a registered engineer meeting national professional standards.'],
          ['icon'=>'visibility',    'title'=>'Transparency',   'desc'=>'No jargon. No hidden clauses. Clear findings, clear recommendations.'],
          ['icon'=>'support_agent', 'title'=>'Client-First',   'desc'=>'We work for you — not the seller, developer, or agent.'],
        ];
        foreach ($values as $v): ?>
        <div class="hinl-card" style="display:flex;gap:1rem;align-items:flex-start;">
          <div style="width:42px;height:42px;background:rgba(101,179,46,.1);border-radius:.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span class="material-symbols-outlined hinl-primary-text"><?php echo esc_html($v['icon']); ?></span>
          </div>
          <div>
            <h3 style="font-family:var(--hinl-font-headline);font-weight:700;margin-bottom:.25rem;"><?php echo esc_html($v['title']); ?></h3>
            <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);line-height:1.6;"><?php echo esc_html($v['desc']); ?></p>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;text-align:center;">
    <div class="hinl-container" style="max-width:640px;">
      <h2 class="hinl-h2" style="margin-bottom:1rem;">Ready to Protect Your Investment?</h2>
      <p style="color:var(--hinl-on-surface-variant);margin-bottom:2.5rem;line-height:1.7;">
        Book an inspection today and get an independent, professionally certified assessment of your property.
      </p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
        <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary">Book an Inspection</a>
        <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="hinl-btn hinl-btn-outline">Contact Us</a>
      </div>
    </div>
  </div>

</main>

<?php hinl_footer(); ?>
