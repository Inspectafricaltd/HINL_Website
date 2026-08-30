<?php
// Register REST API endpoint
add_action('rest_api_init', function() {
    register_rest_route('hinl/v1', '/book', [
        'methods' => 'POST',
        'callback' => 'hinl_handle_booking',
        'permission_callback' => '__return_true',
    ]);
});

function hinl_handle_booking($request) {
    $data = $request->get_json_params();
    $name = sanitize_text_field($data['name']);
    $email = sanitize_email($data['email']);
    $service = sanitize_text_field($data['service']);
    $date = sanitize_text_field($data['date']);
    $address = sanitize_textarea_field($data['address']);
    $addons = isset($data['addons']) && is_array($data['addons']) ? array_map('sanitize_text_field', $data['addons']) : [];

    $to = 'tentmaking25@gmail.com';
    $subject = sprintf('New Booking: %s — %s', $service, $name);
    
    $addons_html = '';
    if (!empty($addons)) {
        $addons_html = '<p><strong>Add-Ons:</strong><br/>' . implode('<br/>', $addons) . '</p>';
    }

    $html = "
        <h2>New Inspection Booking</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Service:</strong> {$service}</p>
        <p><strong>Preferred Date:</strong> " . ($date ? $date : 'Not specified') . "</p>
        <p><strong>Property Address:</strong><br/>" . ($address ? $address : 'Not provided') . "</p>
        {$addons_html}
    ";

    $headers = ['Content-Type: text/html; charset=UTF-8'];
    
    $sent = wp_mail($to, $subject, $html, $headers);
    
    if ($sent) {
        return new WP_REST_Response(['ok' => true], 200);
    } else {
        return new WP_REST_Response(['error' => 'Failed to send'], 500);
    }
}

// Register Shortcode
add_shortcode('hinl_booking_form', 'hinl_booking_form_shortcode');

function hinl_booking_form_shortcode() {
    ob_start();
    ?>
    <div class="hinl-booking-form-container bg-surface-container border border-outline-variant p-6 md:p-8 rounded-xl shadow-2xl" style="background-color: #1e2021; border: 1px solid #42493d; padding: 32px; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
      
      <div id="hinl-booking-success" style="display: none; text-align: center; padding: 40px 0; gap: 16px; flex-direction: column; align-items: center;">
        <span class="material-symbols-outlined text-primary text-6xl" style="color: #65B32E; font-size: 60px;">task_alt</span>
        <h3 style="font-family: var(--font-manrope, Manrope), sans-serif; font-size: 24px; font-weight: bold; color: #e2e2e3; margin-top: 16px;">Booking Request Received</h3>
        <p style="color: #c2c8bb; max-width: 400px; margin: 16px auto;">Our team will verify the details and confirm your inspection slot within 2 business hours.</p>
        <button type="button" onclick="document.getElementById('hinl-booking-success').style.display='none'; document.getElementById('hinl-booking-form').style.display='block'; document.getElementById('hinl-booking-form').reset();" style="background: none; border: none; color: #65B32E; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; text-decoration: underline; text-underline-offset: 8px; cursor: pointer;">Submit another request</button>
      </div>

      <form id="hinl-booking-form" style="display: block;">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 24px;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" style="width: 100%; background-color: #121415; border: 1px solid #42493d; color: #e2e2e3; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;">
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" style="width: 100%; background-color: #121415; border: 1px solid #42493d; color: #e2e2e3; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 24px;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Select Service</label>
            <select name="service" style="width: 100%; background-color: #121415; border: 1px solid #42493d; color: #e2e2e3; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;">
              <option>HINL Home Inspection (Standard)</option>
              <option>HINL Move-In Certification</option>
              <option>HINL No Utility Inspection</option>
              <option>HINL Snag Inspection</option>
              <option>New Construction — Phase 1 (Per-Cast)</option>
              <option>New Construction — Phase 2 (Pre-Coverage)</option>
              <option>Commercial Inspection & Consultancy</option>
              <option>Construction Control — Core</option>
              <option>Construction Control — Premium</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Preferred Due Date</label>
            <input type="date" name="date" style="width: 100%; background-color: #121415; border: 1px solid #42493d; color: #e2e2e3; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;">
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Property Address</label>
          <textarea name="address" placeholder="Street name, Number, City, State..." rows="3" style="width: 100%; background-color: #121415; border: 1px solid #42493d; color: #e2e2e3; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;"></textarea>
        </div>

        <div style="margin-bottom: 24px;">
          <label style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c2c8bb; margin-bottom: 8px;">Select Add-Ons (Optional)</label>
          <div style="max-height: 200px; overflow-y: auto; border: 1px solid #42493d; border-radius: 8px; padding: 16px; background-color: #121415; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;" class="custom-scrollbar">
            <?php
            $addons = [
              "Repair & Cost Estimate", "Video Walkthrough", "Drone Roof Scan", "Full Thermal Scan", 
              "Post-Repair Follow-Up", "Swimming Pool Inspection", "Cinema Inspection", 
              "Inverter System Inspection", "Boys Quarter Inspection", "Moisture Intrusion Inspection", 
              "Septic Inspection", "Extra Rooms (Over 5 Bedrooms)"
            ];
            foreach ($addons as $addon): ?>
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer; color: #e2e2e3; font-size: 14px;">
                <input type="checkbox" name="addons[]" value="<?php echo esc_attr($addon); ?>" style="accent-color: #65B32E;">
                <span><?php echo esc_html($addon); ?></span>
              </label>
            <?php endforeach; ?>
          </div>
        </div>

        <button type="submit" id="hinl-booking-submit" style="width: 100%; padding: 20px; background-color: #65B32E; color: #ffffff; font-family: var(--font-manrope, Manrope), sans-serif; font-weight: bold; font-size: 18px; border-radius: 8px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px;">
          <span id="hinl-submit-text">Confirm Booking</span>
          <span class="material-symbols-outlined" id="hinl-submit-icon">arrow_forward</span>
        </button>
        <p style="text-align: center; font-size: 12px; color: #c2c8bb; margin-top: 16px;">
          By clicking confirm, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('hinl-booking-form');
      if (!form) return;
      
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = document.getElementById('hinl-booking-submit');
        const text = document.getElementById('hinl-submit-text');
        const icon = document.getElementById('hinl-submit-icon');
        
        text.innerText = 'Sending...';
        icon.style.display = 'none';
        btn.disabled = true;
        
        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          service: formData.get('service'),
          date: formData.get('date'),
          address: formData.get('address'),
          addons: formData.getAll('addons[]')
        };
        
        try {
          const res = await fetch('/wp-json/hinl/v1/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (res.ok) {
            document.getElementById('hinl-booking-form').style.display = 'none';
            document.getElementById('hinl-booking-success').style.display = 'flex';
          } else {
            alert('An error occurred. Please try again.');
          }
        } catch (err) {
          console.error(err);
          alert('An error occurred. Please try again.');
        } finally {
          text.innerText = 'Confirm Booking';
          icon.style.display = 'inline-block';
          btn.disabled = false;
        }
      });
    });
    </script>
    <?php
    return ob_get_clean();
}
