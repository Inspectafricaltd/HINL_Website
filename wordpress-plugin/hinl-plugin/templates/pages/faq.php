<?php
/**
 * Template Name: HINL: Useful Information
 */
hinl_header('useful-information');

$downloads = [
  [
    'icon'      => 'description',
    'title'     => 'Sample Inspection Report',
    'desc'      => 'See exactly what a full HINL inspection report looks like — findings, severity ratings, photos, and recommendations from a real Lekki property inspection.',
    'href'      => plugin_dir_url(dirname(dirname(__FILE__))) . 'assets/sample-inspection-report.pdf',
    'cta'       => 'Download Sample Report',
    'highlight' => true,
  ],
  [
    'icon'      => 'checklist',
    'title'     => 'Home Inspection Checklist',
    'desc'      => 'A practical checklist of what to look for before and during your property inspection. Useful for buyers doing their own preliminary walkthrough.',
    'href'      => plugin_dir_url(dirname(dirname(__FILE__))) . 'assets/home-inspection-checklist.pdf',
    'cta'       => 'Download Checklist',
    'highlight' => false,
  ],
  [
    'icon'      => 'business_center',
    'title'     => 'HINL Company Profile 2026',
    'desc'      => 'Our full company profile — services, team credentials, methodology, and track record. Share with your solicitor, bank, or partners.',
    'href'      => plugin_dir_url(dirname(dirname(__FILE__))) . 'assets/hinl-company-profile.pdf',
    'cta'       => 'Download Profile',
    'highlight' => false,
  ],
];

$articles = [
  ['title' => 'Why Home Inspections Are Essential Before Buying A House',        'slug' => 'why-home-inspections-are-essential-before-buying-a-house',  'date' => '2025-03-08'],
  ['title' => 'How To Choose A Professional Home Inspector In Nigeria',           'slug' => 'how-to-choose-a-professional-home-inspector-in-nigeria',    'date' => '2025-04-11'],
  ['title' => 'Common Issues Found During Home Inspections',                      'slug' => 'common-issues-found-during-home-inspections',              'date' => '2025-03-19'],
  ['title' => 'Benefits Of Regular Home Inspections For Property Managers',       'slug' => 'benefits-of-regular-home-inspections-for-property-managers','date' => '2025-04-11'],
];

$faq = [
  [
    'category' => 'About Inspections',
    'icon'     => 'home_search',
    'items'    => [
      ['q' => 'What does a standard inspection cover?', 'a' => 'Structural frame and foundation, roof and envelope, electrical systems, plumbing and drainage, mechanical systems, finishes, and a full thermal scan. Everything visible and accessible is documented with photos, video, and severity ratings.'],
      ['q' => 'How long does an inspection take?',       'a' => 'A standard home inspection takes 3–5 hours depending on the property size and condition. Commercial and complex properties may take longer.'],
      ['q' => 'Can I attend the inspection?',            'a' => 'Yes — and we encourage it. Being present lets our engineer walk you through findings in real time. Diaspora buyers can attend via live video call.'],
      ['q' => 'What equipment do you use?',              'a' => 'We use the Zip Level Pro 2000 for foundation measurement, Schmidt Hammer for concrete hardness, professional thermal cameras, moisture meters, and electrical testers.'],
    ],
  ],
  [
    'category' => 'Reports & Pricing',
    'icon'     => 'description',
    'items'    => [
      ['q' => 'When do I receive my report?',       'a' => 'Written reports are delivered within 24–48 hours of the inspection. Urgent reports can be expedited on request.'],
      ['q' => 'What does the report include?',      'a' => 'Findings with severity ratings (critical, major, minor, informational), photographic and video evidence, and specific remediation recommendations.'],
      ['q' => 'Are there hidden fees?',             'a' => 'No. Our pricing is fully transparent. The quoted price covers the inspection and written report. Add-ons are priced separately and disclosed upfront.'],
      ['q' => 'How do I book an inspection?',       'a' => 'Book through the booking form on our Services page, call us, or send a WhatsApp message. We confirm all slots within 2 business hours.'],
    ],
  ],
];
?>

<main style="padding-top:calc(var(--hinl-navbar-height) + 5rem);">

  <!-- Hero -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <span class="hinl-label hinl-primary-text" style="display:block;margin-bottom:1rem;letter-spacing:.2em;">Resources</span>
    <h1 class="hinl-h1" style="margin-bottom:1.5rem;">Useful Information</h1>
    <p style="color:var(--hinl-on-surface-variant);font-size:1.15rem;max-width:640px;line-height:1.7;">
      Downloads, guides, and answers to help you make informed decisions about your property.
    </p>
  </div>

  <!-- Downloads -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;margin-bottom:5rem;">
    <div class="hinl-container">
      <h2 class="hinl-h2" style="margin-bottom:.5rem;">Downloads</h2>
      <p style="color:var(--hinl-on-surface-variant);margin-bottom:2.5rem;">Free resources from HINL — no sign-up required.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;">
        <?php foreach ($downloads as $d):
          $border = $d['highlight'] ? 'border:1px solid var(--hinl-primary);' : 'border:1px solid rgba(255,255,255,.08);';
        ?>
        <div class="hinl-card" style="<?php echo $border; ?>display:flex;flex-direction:column;gap:1rem;">
          <?php if ($d['highlight']): ?>
          <span style="align-self:flex-start;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;background:var(--hinl-primary);color:#fff;padding:2px 8px;border-radius:4px;line-height:1.6;">Featured</span>
          <?php endif; ?>
          <div style="width:48px;height:48px;background:rgba(101,179,46,.1);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <span class="material-symbols-outlined hinl-primary-text" style="font-size:24px;"><?php echo esc_html($d['icon']); ?></span>
          </div>
          <div>
            <h3 style="font-family:var(--hinl-font-headline);font-weight:700;font-size:1.05rem;margin-bottom:.5rem;"><?php echo esc_html($d['title']); ?></h3>
            <p style="font-size:.875rem;color:var(--hinl-on-surface-variant);line-height:1.6;"><?php echo esc_html($d['desc']); ?></p>
          </div>
          <a href="<?php echo esc_url($d['href']); ?>" target="_blank" rel="noopener noreferrer"
             class="<?php echo $d['highlight'] ? 'hinl-btn hinl-btn-primary' : 'hinl-btn hinl-btn-outline'; ?>"
             style="margin-top:auto;display:flex;align-items:center;justify-content:center;gap:.5rem;">
            <span class="material-symbols-outlined" style="font-size:16px;">download</span>
            <?php echo esc_html($d['cta']); ?>
          </a>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <!-- Articles -->
  <div class="hinl-container" style="margin-bottom:5rem;">
    <h2 class="hinl-h2" style="margin-bottom:.5rem;">Articles &amp; Guides</h2>
    <p style="color:var(--hinl-on-surface-variant);margin-bottom:2.5rem;">Expert articles on property inspection and home buying in Nigeria.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem;">
      <?php foreach ($articles as $a):
        $post = get_page_by_path($a['slug'], OBJECT, 'post');
        $url  = $post ? get_permalink($post) : home_url('/blog/');
        $date = date('F j, Y', strtotime($a['date']));
      ?>
      <a href="<?php echo esc_url($url); ?>" class="hinl-card" style="display:block;text-decoration:none;transition:border-color .2s,transform .2s;"
         onmouseover="this.style.borderColor='var(--hinl-primary)';this.style.transform='translateY(-2px)'"
         onmouseout="this.style.borderColor='';this.style.transform=''">
        <div style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--hinl-primary);margin-bottom:.5rem;"><?php echo esc_html($date); ?></div>
        <h3 style="font-family:var(--hinl-font-headline);font-weight:700;font-size:.95rem;line-height:1.4;"><?php echo esc_html($a['title']); ?></h3>
      </a>
      <?php endforeach; ?>
    </div>
    <div style="margin-top:1.5rem;">
      <a href="<?php echo esc_url(home_url('/blog/')); ?>" style="display:inline-flex;align-items:center;gap:.5rem;color:var(--hinl-primary);font-weight:700;font-size:.875rem;text-decoration:none;">
        View all articles
        <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
      </a>
    </div>
  </div>

  <!-- FAQ -->
  <div style="background:var(--hinl-surface-container-low);padding:5rem 2rem;">
    <div class="hinl-container" style="max-width:820px;">
      <h2 class="hinl-h2" style="margin-bottom:.5rem;">Frequently Asked Questions</h2>
      <p style="color:var(--hinl-on-surface-variant);margin-bottom:2.5rem;">
        Can&rsquo;t find your answer? <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" style="color:var(--hinl-primary);">Contact our team.</a>
      </p>

      <?php foreach ($faq as $section): ?>
      <div style="margin-bottom:3rem;">
        <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.25rem;">
          <span class="material-symbols-outlined hinl-primary-text" style="font-size:24px;"><?php echo esc_html($section['icon']); ?></span>
          <h3 class="hinl-h3"><?php echo esc_html($section['category']); ?></h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:.75rem;">
          <?php foreach ($section['items'] as $i => $item):
            $key = sanitize_title($section['category'] . '-' . $i);
          ?>
          <div class="hinl-faq-item" id="faq-<?php echo esc_attr($key); ?>">
            <button class="hinl-faq-trigger" aria-expanded="false">
              <?php echo esc_html($item['q']); ?>
              <span class="material-symbols-outlined" style="font-size:22px;flex-shrink:0;">add</span>
            </button>
            <div class="hinl-faq-body">
              <?php echo esc_html($item['a']); ?>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endforeach; ?>

      <div class="hinl-card" style="text-align:center;padding:3rem;">
        <h3 class="hinl-h3" style="margin-bottom:.75rem;">Still have questions?</h3>
        <p style="color:var(--hinl-on-surface-variant);margin-bottom:2rem;">Our team is available to answer questions about your specific property or situation.</p>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;">
          <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="hinl-btn hinl-btn-primary">Contact Us</a>
          <a href="<?php echo esc_url(home_url('/services/#booking')); ?>" class="hinl-btn hinl-btn-outline">Book an Inspection</a>
        </div>
      </div>

    </div>
  </div>

</main>

<?php hinl_footer(); ?>
