<?php
/**
 * Template Name: HINL: Contact Us
 */
hinl_header('contact');
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">
  <div class="hinl-container">

    <div style="margin-bottom:4rem;">
      <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;letter-spacing:.2em;">Get In Touch</span>
      <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Let&rsquo;s Talk About Your Property.</h1>
      <p style="color:var(--hinl-on-surface-variant);font-size:1.1rem;max-width:600px;line-height:1.7;">
        Whether you&rsquo;re ready to book an inspection or just want to ask a question, our professional engineers are here to help.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:5rem;align-items:start;">

      <!-- Form -->
      <div>
        <h2 class="hinl-h2" style="margin-bottom:2rem;">Send Us a Message</h2>
        <form id="hinl-contact-form" style="display:flex;flex-direction:column;gap:1.5rem;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
            <div class="hinl-form-group">
              <label class="hinl-form-label" for="c-name">Full Name <span class="required">*</span></label>
              <input class="hinl-input" id="c-name" name="name" type="text" required placeholder="Your full name">
            </div>
            <div class="hinl-form-group">
              <label class="hinl-form-label" for="c-email">Email <span class="required">*</span></label>
              <input class="hinl-input" id="c-email" name="email" type="email" required placeholder="you@example.com">
            </div>
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="c-phone">Phone / WhatsApp</label>
            <input class="hinl-input" id="c-phone" name="phone" type="tel" placeholder="+234 8XX XXX XXXX">
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="c-subject">Subject <span class="required">*</span></label>
            <select class="hinl-select" id="c-subject" name="subject" required>
              <option value="">Select a subject...</option>
              <option>Book an Inspection</option>
              <option>Request a Quote</option>
              <option>General Enquiry</option>
              <option>Diaspora Services</option>
              <option>Construction Control</option>
              <option>Report Follow-Up</option>
              <option>Other</option>
            </select>
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="c-message">Message <span class="required">*</span></label>
            <textarea class="hinl-textarea" id="c-message" name="message" rows="5" required placeholder="Tell us about your property and what you need..."></textarea>
          </div>
          <button type="submit" class="hinl-btn hinl-btn-primary" style="display:flex;align-items:center;justify-content:center;gap:8px;">
            <span class="material-symbols-outlined" style="font-size:18px">send</span>
            Send Message
          </button>
        </form>
      </div>

      <!-- Info sidebar -->
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <div class="hinl-card">
          <h3 class="hinl-h3" style="margin-bottom:1.5rem;">Contact Information</h3>
          <div style="display:flex;flex-direction:column;gap:1.5rem;">
            <?php
            $contacts = [
              ['icon' => 'mail',        'label' => 'Email',          'value' => 'info@homeinspectors.ng', 'href' => 'mailto:info@homeinspectors.ng'],
              ['icon' => 'call',        'label' => 'WhatsApp/Phone', 'value' => '+234 (0) 800 HINL',      'href' => 'tel:+2348061616311'],
              ['icon' => 'location_on', 'label' => 'Office',         'value' => 'Lagos, Nigeria',          'href' => '#'],
            ];
            foreach ($contacts as $c): ?>
            <a href="<?php echo esc_attr($c['href']); ?>" style="display:flex;align-items:flex-start;gap:1rem;text-decoration:none;">
              <div style="width:40px;height:40px;border-radius:50%;background:rgba(101,179,46,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span class="material-symbols-outlined" style="color:var(--hinl-primary);"><?php echo esc_html($c['icon']); ?></span>
              </div>
              <div>
                <div class="hinl-label" style="color:var(--hinl-on-surface-variant);margin-bottom:2px;"><?php echo esc_html($c['label']); ?></div>
                <div style="color:var(--hinl-on-surface);font-weight:500;"><?php echo esc_html($c['value']); ?></div>
              </div>
            </a>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="hinl-card">
          <h3 class="hinl-h3" style="margin-bottom:1rem;">Office Hours</h3>
          <div style="display:flex;flex-direction:column;gap:.75rem;font-size:.875rem;color:var(--hinl-on-surface-variant);">
            <div style="display:flex;justify-content:space-between;"><span>Monday – Friday</span><span style="color:var(--hinl-on-surface);font-weight:500;">8:00am – 6:00pm</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Saturday</span><span style="color:var(--hinl-on-surface);font-weight:500;">9:00am – 4:00pm</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Sunday</span><span>By appointment only</span></div>
          </div>
        </div>

        <div style="background:rgba(101,179,46,.08);border:1px solid rgba(101,179,46,.25);border-radius:var(--hinl-radius);padding:1.5rem;">
          <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;">
            <span class="material-symbols-outlined hinl-primary-text" style="font-size:24px;">bolt</span>
            <strong>Ready to book now?</strong>
          </div>
          <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);margin-bottom:1rem;">Skip the form — go straight to our booking page and secure your slot today.</p>
          <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-primary" style="display:block;text-align:center;font-size:.875rem;padding:12px 24px;">
            Book Your Inspection
          </a>
        </div>
      </div>

    </div>
  </div>

  <div style="margin-top:4rem;"></div>
</main>

<?php hinl_footer(); ?>
