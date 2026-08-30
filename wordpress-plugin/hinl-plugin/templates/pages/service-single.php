<?php
/**
 * Template Name: HINL: Individual Service
 * Used for all individual service sub-pages. Content is looked up by page slug.
 */
hinl_header('services');

$slug = get_post_field('post_name', get_the_ID());

$services = [
  'hinl-standard-home-inspection' => [
    'name'      => 'HINL Standard Home Inspection',
    'tagline'   => 'Nigeria\'s Most Comprehensive Property Audit',
    'price'     => '₦350,000',
    'badge'     => 'Recommended',
    'desc'      => 'Our flagship inspection covers every visible and accessible system in your property. Foundation to roof, structure to utilities — documented with precision by our registered engineers.',
    'features'  => ['Full HINL Home Inspection (structural, electrical, plumbing, mechanical)','Foundation assessment via Zip Level Pro 2000 & Schmidt Hammer','Full thermal scan for hidden moisture and heat anomalies','High-resolution pictures & video documentation','Detailed technical report with severity ratings'],
    'best_for'  => ['Property buyers before purchase','Investors evaluating real estate assets','Anyone who wants total peace of mind'],
    'icon'      => 'home_search',
  ],
  'hinl-snag-inspection' => [
    'name'      => 'HINL Snag Inspection',
    'tagline'   => 'Don\'t Pay the Final Tranche Until We Check It',
    'price'     => '₦500,000',
    'badge'     => 'In-Depth',
    'desc'      => 'Buying new construction? Don\'t sign off until we find every defect the developer is hoping you won\'t notice. Our snag inspection is your last line of defence before final payment.',
    'features'  => ['Comprehensive HINL Snag Inspection across all systems','Foundation assessment via Zip Level Pro 2000 & Schmidt Hammer','High-resolution pictures & video documentation of all defects','Prioritised defect schedule for developer remediation','Detailed technical report with photographic evidence'],
    'best_for'  => ['Buyers of newly completed developments','Off-plan buyers at handover stage','Anyone negotiating a final payment on new construction'],
    'icon'      => 'fact_check',
  ],
  'hinl-no-utility-inspection' => [
    'name'      => 'HINL No Utility Inspection',
    'tagline'   => 'Full Structural Audit Without Active Utilities',
    'price'     => '₦300,000',
    'badge'     => 'No Utilities',
    'desc'      => 'Designed for properties where water or electricity is not yet connected. You get a full structural, envelope, and thermal audit — everything except live system testing.',
    'features'  => ['Full HINL Home Inspection (structural, envelope, finishes)','Foundation assessment via Zip Level Pro 2000 & Schmidt Hammer','Thermal scan for structural and moisture anomalies','High-resolution pictures & video documentation','Detailed technical report'],
    'best_for'  => ['Off-plan buyers taking possession before utilities are connected','Newly built properties awaiting connection','Buyers who cannot wait for the utility connection stage'],
    'icon'      => 'power_off',
  ],
  'hinl-new-construction-inspection' => [
    'name'      => 'HINL New Construction Inspection',
    'tagline'   => 'Catch Defects Before They Are Buried',
    'price'     => 'From ₦250,000',
    'badge'     => null,
    'desc'      => 'Inspect your construction at critical stages where defects are hidden by the next phase of work. Phase 1 (foundation) and Phase 2 (pre-coverage) available.',
    'features'  => ['Foundation Inspection (Phase 1 — Per-Cast) ₦250,000','Pre-Coverage Inspection (Phase 2) ₦300,000','Material quality observations and recommendations','Written phase report with prioritised findings'],
    'best_for'  => ['Self-build project owners','Diaspora Nigerians building remotely','Anyone who wants quality verified before concrete covers it'],
    'icon'      => 'foundation',
  ],
  'hinl-commercial-building-inspection-consultancy' => [
    'name'      => 'HINL Commercial Inspection & Consultancy',
    'tagline'   => 'Technical Due Diligence for Commercial Assets',
    'price'     => 'On Demand',
    'badge'     => null,
    'desc'      => 'Purpose-built for commercial real estate. Office buildings, warehouses, retail centres, and mixed-use developments.',
    'features'  => ['Full HINL Commercial Building Inspection','Full thermal scan of envelope and MEP systems','Roof and building envelope review','MEP Visual Review','Common areas, accessibility & safety review','High-resolution pictures & video','Detailed technical report'],
    'best_for'  => ['Commercial real estate investors','Corporate tenants before signing a lease','Banks performing asset due diligence'],
    'icon'      => 'business',
  ],
  'move-in-certification' => [
    'name'      => 'HINL Move-In Certification',
    'tagline'   => 'A Certified Baseline Before You Move In',
    'price'     => '₦150,000',
    'badge'     => 'Starter',
    'desc'      => 'A structured walk-through inspection that documents the state of a property at move-in. Official certification for tenants and buyers.',
    'features'  => ['HINL walk-through inspection of all accessible areas','Official Move-In Certificate issued','Summary of all major visible defects'],
    'best_for'  => ['Tenants before moving into a rented property','Buyers on a budget who need a certified baseline','Property managers needing inventory certification'],
    'icon'      => 'key',
  ],
  'hinl-thermal-inspection' => [
    'name'      => 'HINL Thermal Inspection',
    'tagline'   => 'See What the Human Eye Cannot',
    'price'     => '₦50,000',
    'price_note'=> 'Available as standalone add-on',
    'badge'     => null,
    'desc'      => 'Using professional thermal cameras, we detect hidden moisture, heat anomalies, electrical hot spots, and insulation failures invisible to the naked eye.',
    'features'  => ['Full-building thermal imaging scan','Detection of hidden moisture and water ingress','Electrical panel and wiring hot spot identification','Insulation failure mapping','Annotated thermal image report'],
    'best_for'  => ['Properties with suspected water ingress','Older buildings with potential electrical issues','Any property requiring a deeper audit'],
    'icon'      => 'thermostat',
  ],
  'hinl-zip-level-inspection' => [
    'name'      => 'HINL Zip Level Inspection',
    'tagline'   => 'Millimetre-Precision Foundation Measurement',
    'price'     => 'Included in Standard',
    'price_note'=> 'Available as standalone on request',
    'badge'     => null,
    'desc'      => 'Using the Zip Level Pro 2000, we measure differential settlement across your slab to sub-millimetre accuracy — detecting hidden foundation movement.',
    'features'  => ['Foundation differential settlement mapping','Sub-millimetre precision measurements','Slab tilt and elevation profile','Industry tolerance threshold comparison','Detailed elevation map report'],
    'best_for'  => ['Older properties with suspected settlement','Properties showing door/window alignment issues','Post-purchase audits for peace of mind'],
    'icon'      => 'straighten',
  ],
  'vr-home-inspection' => [
    'name'      => 'HINL Virtual Reality Inspection',
    'tagline'   => 'Walk Your Property From Anywhere in the World',
    'price'     => 'On Demand',
    'badge'     => 'PropTech',
    'desc'      => 'Our VR inspection creates an immersive 3D walkthrough of your property — perfect for diaspora buyers evaluating property remotely.',
    'features'  => ['Full-property 3D scanning and VR capture','Immersive VR walkthrough on any device','Defect annotations in the VR environment','Integration with HINL inspection report','Accessible to solicitors and advisors'],
    'best_for'  => ['Diaspora Nigerians buying remotely','Investors managing multiple properties','Buyers who cannot attend in person'],
    'icon'      => 'vrpano',
  ],
  'construction-control' => [
    'name'      => 'Construction Control Inspections',
    'tagline'   => 'Independent Oversight from Foundation to Finishing',
    'price'     => '2% – 3.5% of Project Cost',
    'price_note'=> 'or from ₦500,000 / month',
    'badge'     => null,
    'desc'      => 'We become your independent eyes on site. Regular stage inspections, contractor compliance checks, and real-time reporting — so you always know exactly what is happening.',
    'features'  => ['Scheduled stage inspections (foundation through finishing)','Workmanship and quality verification','Electrical and plumbing inspections','Contractor compliance checks','Photo and written reports after every visit','Material testing — concrete, rebar (Premium)','Real-time advisory access (Premium)'],
    'best_for'  => ['Diaspora Nigerians building remotely','Self-build project owners','Anyone who has been defrauded by a contractor'],
    'icon'      => 'engineering',
  ],
];

$service = $services[$slug] ?? null;

if (!$service):
  ?>
  <div class="hinl-container" style="padding-top:calc(var(--hinl-navbar-height) + 4rem);min-height:60vh;">
    <h1 class="hinl-h1">Service Not Found</h1>
    <p style="margin-top:1rem;color:var(--hinl-on-surface-variant);">
      <a href="<?php echo esc_url(home_url('/services/')); ?>" style="color:var(--hinl-primary);">View all services &rarr;</a>
    </p>
  </div>
  <?php
  hinl_footer();
  return;
endif;
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">

  <!-- Hero -->
  <div class="hinl-container" style="padding-bottom:4rem;">

    <!-- Breadcrumb -->
    <nav style="display:flex;align-items:center;gap:8px;font-size:.75rem;color:var(--hinl-on-surface-variant);margin-bottom:2rem;">
      <a href="<?php echo esc_url(home_url('/')); ?>" style="transition:color .2s;" onmouseover="this.style.color='var(--hinl-primary)'" onmouseout="this.style.color='var(--hinl-on-surface-variant)'">Home</a>
      <span class="material-symbols-outlined" style="font-size:16px;">chevron_right</span>
      <a href="<?php echo esc_url(home_url('/services/')); ?>" style="transition:color .2s;" onmouseover="this.style.color='var(--hinl-primary)'" onmouseout="this.style.color='var(--hinl-on-surface-variant)'">Services</a>
      <span class="material-symbols-outlined" style="font-size:16px;">chevron_right</span>
      <span style="color:var(--hinl-on-surface);"><?php echo esc_html($service['name']); ?></span>
    </nav>

    <?php if ($service['badge']): ?>
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;letter-spacing:.15em;"><?php echo esc_html($service['badge']); ?></span>
    <?php endif; ?>

    <h1 class="hinl-h1" style="margin-bottom:.75rem;"><?php echo esc_html($service['name']); ?></h1>
    <p style="font-size:1.1rem;color:var(--hinl-primary);font-family:var(--hinl-font-headline);font-weight:600;margin-bottom:1rem;"><?php echo esc_html($service['tagline']); ?></p>
    <p style="color:var(--hinl-on-surface-variant);max-width:700px;line-height:1.8;margin-bottom:2.5rem;"><?php echo esc_html($service['desc']); ?></p>

    <div style="display:flex;flex-wrap:wrap;gap:1rem;">
      <a href="#booking" class="hinl-btn hinl-btn-primary">Book This Inspection</a>
      <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hinl-btn hinl-btn-outline">View All Pricing</a>
    </div>
  </div>

  <!-- Content grid -->
  <section class="hinl-section">
    <div class="hinl-container">
      <div style="display:grid;grid-template-columns:1fr 380px;gap:4rem;align-items:start;">

        <!-- Features -->
        <div>
          <h2 class="hinl-h2" style="margin-bottom:2rem;">What&rsquo;s Included</h2>
          <ul class="hinl-checklist" style="background:var(--hinl-surface-container);border:1px solid var(--hinl-outline-variant);border-radius:var(--hinl-radius);padding:1rem 1.5rem;">
            <?php foreach ($service['features'] as $f): ?>
            <li>
              <span class="material-symbols-outlined">check_circle</span>
              <?php echo esc_html($f); ?>
            </li>
            <?php endforeach; ?>
          </ul>

          <!-- Trust stats -->
          <div style="margin-top:3rem;display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;">
            <?php
            $stats = [
              ['icon'=>'star',          'label'=>'5-Star Google Rating'],
              ['icon'=>'engineering',   'label'=>'100+ Years Experience'],
              ['icon'=>'verified_user', 'label'=>'Independent Experts'],
              ['icon'=>'savings',       'label'=>'₦200M+ Saved for Clients'],
            ];
            foreach ($stats as $st): ?>
            <div style="display:flex;align-items:center;gap:12px;background:var(--hinl-surface-container);border:1px solid var(--hinl-outline-variant);border-radius:10px;padding:1rem 1.25rem;">
              <span class="material-symbols-outlined fill" style="color:var(--hinl-primary);font-size:28px;"><?php echo esc_html($st['icon']); ?></span>
              <span style="font-size:.875rem;font-weight:600;"><?php echo esc_html($st['label']); ?></span>
            </div>
            <?php endforeach; ?>
          </div>
        </div>

        <!-- Sidebar -->
        <aside>
          <!-- Price card -->
          <div class="hinl-card hinl-card--featured" style="margin-bottom:1.5rem;">
            <div class="hinl-label" style="color:var(--hinl-on-surface-variant);margin-bottom:.5rem;">Starting from</div>
            <div class="hinl-price" style="margin-bottom:.25rem;"><?php echo esc_html($service['price']); ?></div>
            <?php if (!empty($service['price_note'])): ?>
            <div style="font-size:.8rem;color:var(--hinl-on-surface-variant);margin-bottom:1.5rem;"><?php echo esc_html($service['price_note']); ?></div>
            <?php else: ?>
            <div style="margin-bottom:1.5rem;"></div>
            <?php endif; ?>
            <a href="#booking" class="hinl-btn hinl-btn-primary" style="display:block;width:100%;margin-bottom:.75rem;">Book Now</a>
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="hinl-btn hinl-btn-ghost" style="display:block;width:100%;">Ask a Question</a>
            <div style="margin-top:2rem;display:flex;flex-direction:column;gap:.75rem;">
              <div style="display:flex;align-items:center;gap:10px;font-size:.875rem;color:var(--hinl-on-surface-variant);">
                <span class="material-symbols-outlined" style="color:var(--hinl-primary);font-size:20px;">verified</span>
                Registered professional engineers
              </div>
              <div style="display:flex;align-items:center;gap:10px;font-size:.875rem;color:var(--hinl-on-surface-variant);">
                <span class="material-symbols-outlined" style="color:var(--hinl-primary);font-size:20px;">timer</span>
                Confirmed within 48 hours
              </div>
              <div style="display:flex;align-items:center;gap:10px;font-size:.875rem;color:var(--hinl-on-surface-variant);">
                <span class="material-symbols-outlined" style="color:var(--hinl-primary);font-size:20px;">description</span>
                Detailed written report
              </div>
            </div>
          </div>

          <!-- Best for -->
          <div class="hinl-card">
            <div class="hinl-label" style="color:var(--hinl-on-surface-variant);margin-bottom:1rem;">Best For</div>
            <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem;">
              <?php foreach ($service['best_for'] as $b): ?>
              <li style="display:flex;align-items:flex-start;gap:10px;font-size:.875rem;color:var(--hinl-on-surface-variant);">
                <span class="material-symbols-outlined" style="color:var(--hinl-primary);font-size:18px;flex-shrink:0;margin-top:1px;">person_check</span>
                <?php echo esc_html($b); ?>
              </li>
              <?php endforeach; ?>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <!-- Booking section -->
  <section class="hinl-section" id="booking" style="background:var(--hinl-surface-container-low);scroll-margin-top:80px;">
    <div class="hinl-container">
      <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:5rem;align-items:start;">
        <div>
          <h2 class="hinl-h2" style="margin-bottom:1.5rem;">Book Your Inspection</h2>
          <p style="color:var(--hinl-on-surface-variant);line-height:1.7;margin-bottom:2rem;">
            Ready to proceed? Fill in the form and our team will confirm your <?php echo esc_html($service['name']); ?> within 2 business hours.
          </p>
        </div>
        <div class="hinl-card">
          <?php hinl_booking_form($service['name'] . ' (' . $service['price'] . ')'); ?>
        </div>
      </div>
    </div>
  </section>

</main>

<?php hinl_footer(); ?>
