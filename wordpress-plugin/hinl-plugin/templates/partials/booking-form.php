<?php
/**
 * HINL Booking Form Partial
 * Usage: hinl_booking_form( 'HINL Standard Home Inspection' )
 */
$selected = $selected ?? '';
?>
<div id="hinl-booking-status" class="hinl-form-status" style="display:none;padding:12px 16px;border-radius:10px;margin-bottom:1rem;font-size:0.875rem;font-weight:600;"></div>

<form id="hinl-booking-form" novalidate>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
    <div class="hinl-form-group">
      <label class="hinl-form-label" for="hinl-name">Full Name <span class="required">*</span></label>
      <input class="hinl-input" id="hinl-name" name="name" type="text" required placeholder="Your full name" />
    </div>
    <div class="hinl-form-group">
      <label class="hinl-form-label" for="hinl-email">Email Address <span class="required">*</span></label>
      <input class="hinl-input" id="hinl-email" name="email" type="email" required placeholder="you@example.com" />
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
    <div class="hinl-form-group">
      <label class="hinl-form-label" for="hinl-phone">Phone / WhatsApp</label>
      <input class="hinl-input" id="hinl-phone" name="phone" type="tel" placeholder="+234 8XX XXX XXXX" />
    </div>
    <div class="hinl-form-group">
      <label class="hinl-form-label" for="hinl-service">Inspection Type <span class="required">*</span></label>
      <select class="hinl-select" id="hinl-service" name="service" required>
        <option value="">Select a service...</option>
        <?php
        $services = [
          'HINL Standard Home Inspection (₦350,000)',
          'HINL Snag Inspection (₦500,000)',
          'HINL No Utility Inspection (₦300,000)',
          'HINL Move-In Certification (₦150,000)',
          'HINL New Construction Inspection — Phase 1 (₦250,000)',
          'HINL New Construction Inspection — Phase 2 (₦300,000)',
          'HINL Commercial Inspection (On Demand)',
          'Construction Control — Core (2% / ₦500K mo)',
          'Construction Control — Premium (3.5% / ₦1M mo)',
          'Thermal Inspection Add-On (₦50,000)',
          'Virtual Reality Inspection (On Demand)',
        ];
        foreach ($services as $svc):
          $sel = ($selected === $svc) ? ' selected' : '';
        ?>
        <option value="<?php echo esc_attr($svc); ?>"<?php echo $sel; ?>><?php echo esc_html($svc); ?></option>
        <?php endforeach; ?>
      </select>
    </div>
  </div>

  <div class="hinl-form-group" style="margin-bottom:1.5rem;">
    <label class="hinl-form-label" for="hinl-address">Property Address <span class="required">*</span></label>
    <input class="hinl-input" id="hinl-address" name="address" type="text" required placeholder="Full property address" />
  </div>

  <div class="hinl-form-group" style="margin-bottom:2rem;">
    <label class="hinl-form-label" for="hinl-message">Additional Information</label>
    <textarea class="hinl-textarea" id="hinl-message" name="message" rows="4" placeholder="Property size, preferred dates, anything we should know..."></textarea>
  </div>

  <button type="submit" class="hinl-btn hinl-btn-primary" style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;">
    <span class="material-symbols-outlined" style="font-size:20px">calendar_add_on</span>
    Book My Inspection
  </button>

  <p style="text-align:center;font-size:0.75rem;color:var(--hinl-on-surface-variant);margin-top:1rem;">
    We confirm all bookings within 2 business hours.
  </p>

</form>

<style>
.hinl-form-status--success { background:rgba(101,179,46,0.1); border:1px solid rgba(101,179,46,0.3); color:#7ecf44; display:block !important; }
.hinl-form-status--error   { background:rgba(220,53,69,0.1);  border:1px solid rgba(220,53,69,0.3);  color:#f87171; display:block !important; }
</style>
