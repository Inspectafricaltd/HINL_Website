<?php
/**
 * Template Name: HINL: Privacy Policy
 */
hinl_header();
?>
<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">
  <div class="hinl-container" style="max-width:800px;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Legal</span>
    <h1 class="hinl-h1" style="margin-bottom:.5rem;">Privacy Policy</h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:.875rem;margin-bottom:4rem;">Last updated: 1 April 2025</p>

    <?php
    $sections = [
      ['title' => '1. Who We Are',              'body' => 'Home Inspection Nigeria Limited ("HINL") is a professional property inspection company registered in Nigeria. We are committed to protecting your privacy and handling your personal data transparently and lawfully.'],
      ['title' => '2. Data We Collect',         'body' => 'Identity data (name), contact data (email, phone, address), property data (address and details for inspection), transaction data (payments, bookings), and technical data (IP address, browser type) when you use our website.'],
      ['title' => '3. How We Use Your Data',    'body' => 'To process bookings and deliver inspection services; to issue reports and invoices; to respond to enquiries; to send service-related communications; to send marketing where you have opted in; and to comply with legal obligations.'],
      ['title' => '4. Data Sharing',            'body' => 'We do not sell your data. We may share it with payment processors, cloud storage providers, and professional advisors under confidentiality obligations, solely for the purpose of delivering our services.'],
      ['title' => '5. Data Retention',          'body' => 'Client records including inspection reports are retained for a minimum of 7 years to comply with professional and legal obligations. Marketing data is retained until you withdraw consent.'],
      ['title' => '6. Your Rights',             'body' => 'You have the right to access, correct, or delete your personal data, to object to or restrict processing, and to withdraw consent for marketing at any time. Contact info@homeinspectors.ng to exercise these rights.'],
      ['title' => '7. Cookies',                 'body' => 'Our website uses essential cookies for functionality and optional analytics cookies. You can manage cookie preferences through your browser settings.'],
      ['title' => '8. Contact',                 'body' => 'For questions about this Privacy Policy, contact us at info@homeinspectors.ng.'],
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
