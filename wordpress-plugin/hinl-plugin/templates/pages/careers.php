<?php
/**
 * Template Name: HINL: Careers
 */
hinl_header('careers');
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">

  <!-- Hero -->
  <div class="hinl-container" style="text-align:center;margin-bottom:5rem;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Applications Now Open</span>
    <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Become a Certified<br><span class="hinl-primary-text">Property Inspector</span></h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:1.15rem;max-width:600px;margin:0 auto 2.5rem;line-height:1.7;">
      Help improve building quality, protect property buyers, and earn from professional inspection assignments across Nigeria.
    </p>
    <a href="#apply" class="hinl-btn hinl-btn-primary" style="font-size:1.1rem;padding:1.25rem 2.5rem;">
      Apply Here &darr;
    </a>
  </div>

  <!-- Why Join + Earnings -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;margin-bottom:5rem;">
    <div class="hinl-container" style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;">
      <div>
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">The Opportunity</span>
        <h2 class="hinl-h2" style="margin-bottom:1.5rem;">Why Join HINL?</h2>
        <p style="color:var(--hinl-on-surface-variant);line-height:1.7;margin-bottom:2rem;">
          At Home Inspectors Nigeria Ltd. (HINL), we are building Nigeria&rsquo;s largest network of trained property inspectors. As part of our network, you may receive opportunities to:
        </p>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.875rem;">
          <?php
          $opps = [
            'Conduct property inspections',
            'Participate in construction monitoring projects',
            'Support mortgage and lending inspections',
            'Perform estate safety audits',
            'Participate in commercial property inspections',
            'Access ongoing professional development',
            'Join a growing national inspection network',
          ];
          foreach ($opps as $o): ?>
          <li style="display:flex;align-items:flex-start;gap:.75rem;color:var(--hinl-on-surface-variant);">
            <span class="material-symbols-outlined hinl-primary-text" style="font-size:18px;margin-top:2px;flex-shrink:0;">check</span>
            <?php echo esc_html($o); ?>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div>
        <div class="hinl-card" style="margin-bottom:1.5rem;">
          <h3 class="hinl-h3" style="margin-bottom:1rem;">Earnings</h3>
          <p style="color:var(--hinl-on-surface-variant);font-size:.9rem;margin-bottom:1rem;line-height:1.6;">
            Inspectors are compensated on a project basis. Earnings vary depending on inspection type, property size, location, and complexity of assignment.
          </p>
          <div style="background:rgba(101,179,46,.08);border:1px solid rgba(101,179,46,.25);border-radius:var(--hinl-radius);padding:1rem;font-size:.875rem;color:var(--hinl-primary);font-weight:600;">
            High-performing inspectors may qualify for priority assignment allocation and leadership opportunities.
          </div>
        </div>
        <div class="hinl-card">
          <h3 class="hinl-h3" style="margin-bottom:1rem;">Career Path</h3>
          <?php
          $path = [
            ['stage'=>'Stage 1','title'=>'Inspector Candidate'],
            ['stage'=>'Stage 2','title'=>'Inspector Apprentice'],
            ['stage'=>'Stage 3','title'=>'Certified Property Inspector'],
            ['stage'=>'Stage 4','title'=>'Senior Inspector'],
            ['stage'=>'Stage 5','title'=>'State Inspection Partner'],
            ['stage'=>'Stage 6','title'=>'ACHI Fellow / Trainer'],
          ];
          foreach ($path as $i => $step):
            $highlight = $i === 2; ?>
          <div style="display:flex;align-items:center;gap:.75rem;padding:.5rem 0;<?php echo $highlight ? 'background:rgba(101,179,46,.08);margin:0 -1rem;padding:.5rem 1rem;border-radius:.5rem;' : ''; ?>">
            <div style="width:28px;height:28px;border-radius:50%;<?php echo $highlight ? 'background:var(--hinl-primary);color:#fff;' : 'border:1px solid rgba(255,255,255,.15);color:var(--hinl-on-surface-variant);'; ?>display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;"><?php echo $i+1; ?></div>
            <div>
              <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--hinl-on-surface-variant);"><?php echo esc_html($step['stage']); ?></div>
              <div style="font-weight:600;font-size:.875rem;<?php echo $highlight ? 'color:var(--hinl-primary);' : ''; ?>"><?php echo esc_html($step['title']); ?></div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <!-- Who + What We Look For -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;">
      <div>
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Eligibility</span>
        <h2 class="hinl-h2" style="margin-bottom:1.5rem;">Who Should Apply?</h2>
        <p style="color:var(--hinl-on-surface-variant);margin-bottom:1.5rem;line-height:1.7;">We welcome applications from professionals with backgrounds in:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;">
          <?php
          $bgs = ['Civil Engineering','Building Technology','Architecture','Quantity Surveying','Estate Management','Facility Management','Construction Supervision','Project Management','Electrical Engineering','Mechanical Engineering'];
          foreach ($bgs as $bg): ?>
          <div style="background:var(--hinl-surface-container);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.75rem 1rem;font-size:.875rem;font-weight:500;text-align:center;color:var(--hinl-on-surface);"><?php echo esc_html($bg); ?></div>
          <?php endforeach; ?>
        </div>
        <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);margin-top:1rem;">Exceptional candidates from related fields may also be considered.</p>
      </div>
      <div>
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Selection Criteria</span>
        <h2 class="hinl-h2" style="margin-bottom:1.5rem;">What We Look For</h2>
        <div style="display:flex;flex-direction:column;gap:1rem;">
          <?php
          $qualities = ['Strong attention to detail','Professional integrity','Good report writing skills','Construction or property knowledge','Ability to work independently','Willingness to learn','Good communication skills'];
          foreach ($qualities as $q): ?>
          <div style="display:flex;align-items:center;gap:.75rem;">
            <div style="width:32px;height:32px;background:rgba(101,179,46,.1);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span class="material-symbols-outlined hinl-primary-text" style="font-size:16px;">check_circle</span>
            </div>
            <span style="font-weight:500;"><?php echo esc_html($q); ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <!-- Application Form -->
  <div id="apply" style="background:var(--hinl-surface-container-low);padding:5rem 2rem;">
    <div style="max-width:760px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;">Join the Next Intake</span>
        <h2 class="hinl-h2" style="margin-bottom:.75rem;">Submit Your Application</h2>
        <p style="color:var(--hinl-on-surface-variant);">Complete the form below and we&rsquo;ll be in touch to guide you through the next steps.</p>
      </div>

      <form id="hinl-careers-form" action="https://formsubmit.co/careers@homeinspectors.ng" method="POST" enctype="multipart/form-data" style="background:var(--hinl-surface-container);border:1px solid rgba(255,255,255,.08);border-radius:1rem;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem;">
        <input type="hidden" name="_subject" value="New Inspector Application – HINL">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_next" value="<?php echo esc_url(home_url('/careers/?applied=1')); ?>">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-name">Full Name <span style="color:var(--hinl-error)">*</span></label>
            <input class="hinl-input" id="ca-name" name="name" type="text" required placeholder="Your full name">
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-email">Email Address <span style="color:var(--hinl-error)">*</span></label>
            <input class="hinl-input" id="ca-email" name="email" type="email" required placeholder="you@email.com">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-phone">Phone Number <span style="color:var(--hinl-error)">*</span></label>
            <input class="hinl-input" id="ca-phone" name="phone" type="tel" required placeholder="+234 800 000 0000">
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-state">State <span style="color:var(--hinl-error)">*</span></label>
            <select class="hinl-select" id="ca-state" name="state" required>
              <option value="">Select your state</option>
              <?php
              $states = ['Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT – Abuja','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara'];
              foreach ($states as $st): ?>
              <option value="<?php echo esc_attr($st); ?>"><?php echo esc_html($st); ?></option>
              <?php endforeach; ?>
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-profession">Profession <span style="color:var(--hinl-error)">*</span></label>
            <input class="hinl-input" id="ca-profession" name="profession" type="text" required placeholder="e.g. Civil Engineer">
          </div>
          <div class="hinl-form-group">
            <label class="hinl-form-label" for="ca-exp">Years of Experience <span style="color:var(--hinl-error)">*</span></label>
            <select class="hinl-select" id="ca-exp" name="years_of_experience" required>
              <option value="">Select range</option>
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>3–5 years</option>
              <option>5–10 years</option>
              <option>10+ years</option>
            </select>
          </div>
        </div>
        <div class="hinl-form-group">
          <label class="hinl-form-label" for="ca-cv">Upload CV <span style="color:var(--hinl-error)">*</span></label>
          <input class="hinl-input" id="ca-cv" name="cv" type="file" required accept=".pdf,.doc,.docx" style="padding:.75rem;">
          <span style="font-size:.75rem;color:var(--hinl-on-surface-variant);display:block;margin-top:.25rem;">PDF, DOC, DOCX (max 5MB)</span>
        </div>
        <div class="hinl-form-group">
          <label class="hinl-form-label" for="ca-why">Why do you want to become a property inspector? <span style="color:var(--hinl-error)">*</span></label>
          <textarea class="hinl-textarea" id="ca-why" name="motivation" rows="5" required placeholder="Tell us about your interest in property inspection and what you hope to achieve..."></textarea>
        </div>
        <button type="submit" class="hinl-btn hinl-btn-primary" style="display:flex;align-items:center;justify-content:center;gap:.5rem;font-size:1rem;padding:1.1rem;">
          Submit Application
          <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>
        </button>
        <p style="font-size:.75rem;color:var(--hinl-on-surface-variant);text-align:center;">
          Your application will be sent to careers@homeinspectors.ng. We typically respond within 5–7 business days.
        </p>
      </form>
    </div>
  </div>

</main>

<?php hinl_footer(); ?>
