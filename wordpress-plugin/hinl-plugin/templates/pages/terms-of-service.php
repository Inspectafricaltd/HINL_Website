<?php
/**
 * Template Name: HINL: Terms of Service
 */
hinl_header();
?>
<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">
  <div class="hinl-container" style="max-width:800px;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Legal</span>
    <h1 class="hinl-h1" style="margin-bottom:.5rem;">Terms of Service</h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:.875rem;margin-bottom:4rem;">Last updated: 1 April 2025</p>

    <?php
    $sections = [
      ['title' => '1. Introduction',             'body' => 'These Terms govern your engagement with Home Inspection Nigeria Limited ("HINL") for property inspection services. By booking an inspection, you agree to these Terms.'],
      ['title' => '2. Nature of Services',       'body' => 'HINL provides non-invasive visual and technical inspections. Our reports represent professional opinions based on conditions observed on the inspection date and are not warranties, guarantees, or formal structural surveys.'],
      ['title' => '3. Booking & Confirmation',   'body' => 'A booking is confirmed only upon receipt of full payment. HINL will confirm your slot within 2 business hours. Bookings are subject to inspector availability.'],
      ['title' => '4. Client Obligations',       'body' => 'You must provide accurate property details, ensure the property is accessible on the agreed date, notify HINL of known hazards, and ensure utilities are connected for a standard inspection.'],
      ['title' => '5. Cancellation Policy',      'body' => 'Cancellations 48+ hours before inspection: full credit toward a rescheduled slot. 24–48 hours: 50% rescheduling fee. Less than 24 hours: full fee forfeited.'],
      ['title' => '6. Reports',                  'body' => 'Reports are delivered within 24–48 hours and are for the exclusive use of the named client. They may not be relied upon by third parties without HINL\'s prior written consent.'],
      ['title' => '7. Limitation of Liability',  'body' => 'HINL\'s liability is limited to the fee paid for the inspection. HINL is not liable for indirect or consequential losses arising from any inspection or report. Nothing limits liability for negligence causing death or personal injury.'],
      ['title' => '8. Governing Law',            'body' => 'These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes are subject to the jurisdiction of the courts of Lagos State.'],
    ];
    foreach ($sections as $s): ?>
    <div style="margin-bottom:3rem;">
      <h2 class="hinl-h3" style="margin-bottom:1rem;color:var(--hinl-on-surface);"><?php echo esc_html($s['title']); ?></h2>
      <p style="color:var(--hinl-on-surface-variant);line-height:1.8;"><?php echo esc_html($s['body']); ?></p>
    </div>
    <?php endforeach; ?>

    <div class="hinl-card" style="margin-bottom:4rem;">
      <strong style="display:block;margin-bottom:.5rem;">Home Inspection Nigeria Limited</strong>
      <span style="color:var(--hinl-on-surface-variant);">Lagos, Nigeria</span><br>
      <a href="mailto:info@homeinspectors.ng" style="color:var(--hinl-primary);">info@homeinspectors.ng</a>
    </div>
  </div>
</main>
<?php hinl_footer(); ?>
