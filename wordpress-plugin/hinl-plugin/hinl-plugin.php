<?php
/**
 * Plugin Name: HINL Theme
 * Description: Custom front-end theme for Home Inspection Nigeria Limited. Registers page templates, enqueues design system assets, and creates all site pages on activation.
 * Version: 1.0.0
 * Author: HINL
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'HINL_PATH', plugin_dir_path( __FILE__ ) );
define( 'HINL_URL',  plugin_dir_url( __FILE__ ) );

// ── Page templates this plugin provides ──────────────────────────────────────

const HINL_PAGE_TEMPLATES = [
    'templates/pages/home.php'              => 'HINL: Home',
    'templates/pages/services.php'          => 'HINL: Services & Pricing',
    'templates/pages/service-single.php'    => 'HINL: Individual Service',
    'templates/pages/about.php'             => 'HINL: About',
    'templates/pages/diaspora.php'          => 'HINL: Diaspora Services',
    'templates/pages/contact.php'           => 'HINL: Contact Us',
    'templates/pages/faq.php'              => 'HINL: FAQ',
    'templates/pages/privacy-policy.php'    => 'HINL: Privacy Policy',
    'templates/pages/terms-of-service.php'  => 'HINL: Terms of Service',
];

// Register templates in the WordPress template picker
add_filter( 'theme_page_templates', function( $templates ) {
    return array_merge( $templates, HINL_PAGE_TEMPLATES );
} );

// Serve the correct template file when a page uses an HINL template
add_filter( 'template_include', function( $template ) {
    global $post;
    if ( ! $post ) return $template;

    // Front page override
    if ( is_front_page() ) {
        $f = HINL_PATH . 'templates/pages/home.php';
        if ( file_exists( $f ) ) return $f;
    }

    $tpl = get_post_meta( $post->ID, '_wp_page_template', true );
    if ( $tpl && isset( HINL_PAGE_TEMPLATES[ $tpl ] ) ) {
        $file = HINL_PATH . $tpl;
        if ( file_exists( $file ) ) return $file;
    }

    return $template;
}, 20 );

// ── Asset enqueuing ──────────────────────────────────────────────────────────

add_action( 'wp_enqueue_scripts', function() {
    global $post;

    $is_hinl = is_front_page() || is_home();
    if ( $post ) {
        $tpl = get_post_meta( $post->ID, '_wp_page_template', true );
        if ( $tpl && isset( HINL_PAGE_TEMPLATES[ $tpl ] ) ) $is_hinl = true;
    }

    if ( ! $is_hinl ) return;

    // Google Fonts (Manrope + Inter + Material Symbols)
    wp_enqueue_style(
        'hinl-google-fonts',
        'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap',
        [],
        null
    );
    wp_enqueue_style(
        'hinl-material-symbols',
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        [],
        null
    );

    // HINL design system CSS
    wp_enqueue_style(
        'hinl-theme',
        HINL_URL . 'assets/hinl.css',
        [ 'hinl-google-fonts', 'hinl-material-symbols' ],
        '1.0.0'
    );

    // HINL JS (navbar toggle, FAQ accordion, etc.)
    wp_enqueue_script(
        'hinl-theme',
        HINL_URL . 'assets/hinl.js',
        [],
        '1.0.0',
        true
    );

    // Pass WordPress data to JS
    wp_localize_script( 'hinl-theme', 'HINLConfig', [
        'homeUrl'    => home_url( '/' ),
        'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
        'nonce'      => wp_create_nonce( 'hinl_nonce' ),
        'bookingUrl' => home_url( '/services/#booking' ),
        'pages'      => [
            'services'     => home_url( '/services/' ),
            'about'        => home_url( '/about/' ),
            'diaspora'     => home_url( '/diaspora-services/' ),
            'contact'      => home_url( '/contact-us/' ),
            'faq'          => home_url( '/faqs/' ),
        ],
    ] );
} );

// ── Booking form AJAX handler ─────────────────────────────────────────────────

add_action( 'wp_ajax_hinl_booking',        'hinl_handle_booking' );
add_action( 'wp_ajax_nopriv_hinl_booking', 'hinl_handle_booking' );

function hinl_handle_booking() {
    check_ajax_referer( 'hinl_nonce', 'nonce' );

    $name    = sanitize_text_field( $_POST['name']    ?? '' );
    $email   = sanitize_email(      $_POST['email']   ?? '' );
    $phone   = sanitize_text_field( $_POST['phone']   ?? '' );
    $service = sanitize_text_field( $_POST['service'] ?? '' );
    $address = sanitize_text_field( $_POST['address'] ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );

    if ( ! $name || ! $email || ! $service ) {
        wp_send_json_error( [ 'message' => 'Please fill in all required fields.' ] );
    }

    // Send notification email to HINL
    $to      = get_option( 'admin_email' );
    $subject = "New HINL Booking Request: {$service}";
    $body    = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\nProperty: {$address}\nMessage: {$message}";
    $headers = [ 'Content-Type: text/plain; charset=UTF-8', "Reply-To: {$email}" ];
    wp_mail( $to, $subject, $body, $headers );

    // Send confirmation to client
    wp_mail(
        $email,
        'Your HINL Inspection Request Has Been Received',
        "Dear {$name},\n\nThank you for your booking request for a {$service}.\n\nOur team will confirm your slot within 2 business hours.\n\nHome Inspection Nigeria Limited\nwww.homeinspectors.ng",
        [ 'Content-Type: text/plain; charset=UTF-8' ]
    );

    wp_send_json_success( [ 'message' => 'Your request has been received. We will confirm your slot within 2 business hours.' ] );
}

// ── Create all site pages on plugin activation ────────────────────────────────

register_activation_hook( __FILE__, 'hinl_create_pages' );

function hinl_create_pages() {
    $pages = [
        [
            'title'    => 'Home',
            'slug'     => '',
            'template' => 'templates/pages/home.php',
            'front'    => true,
        ],
        [
            'title'    => 'Services & Pricing',
            'slug'     => 'services',
            'template' => 'templates/pages/services.php',
        ],
        [
            'title'    => 'About Us',
            'slug'     => 'about',
            'template' => 'templates/pages/about.php',
        ],
        [
            'title'    => 'Diaspora Services',
            'slug'     => 'diaspora-services',
            'template' => 'templates/pages/diaspora.php',
        ],
        [
            'title'    => 'Contact Us',
            'slug'     => 'contact-us',
            'template' => 'templates/pages/contact.php',
        ],
        [
            'title'    => 'FAQs',
            'slug'     => 'faqs',
            'template' => 'templates/pages/faq.php',
        ],
        [
            'title'    => 'Privacy Policy',
            'slug'     => 'privacy-policy',
            'template' => 'templates/pages/privacy-policy.php',
        ],
        [
            'title'    => 'Terms of Service',
            'slug'     => 'terms-of-service',
            'template' => 'templates/pages/terms-of-service.php',
        ],
        [
            'title'    => 'Careers',
            'slug'     => 'careers',
            'template' => 'templates/pages/careers.php',
        ],
    ];

    // Individual service pages (children of Services)
    $service_pages = [
        [ 'title' => 'HINL Standard Home Inspection',             'slug' => 'hinl-standard-home-inspection' ],
        [ 'title' => 'HINL Snag Inspection',                      'slug' => 'hinl-snag-inspection' ],
        [ 'title' => 'HINL No Utility Inspection',                'slug' => 'hinl-no-utility-inspection' ],
        [ 'title' => 'HINL New Construction Inspection',          'slug' => 'hinl-new-construction-inspection' ],
        [ 'title' => 'HINL Commercial Inspection & Consultancy',  'slug' => 'hinl-commercial-building-inspection-consultancy' ],
        [ 'title' => 'HINL Move-In Certification',                'slug' => 'move-in-certification' ],
        [ 'title' => 'HINL Thermal Inspection',                   'slug' => 'hinl-thermal-inspection' ],
        [ 'title' => 'HINL Zip Level Inspection',                 'slug' => 'hinl-zip-level-inspection' ],
        [ 'title' => 'HINL Virtual Reality Inspection',           'slug' => 'vr-home-inspection' ],
        [ 'title' => 'Construction Control Inspections',          'slug' => 'construction-control' ],
    ];

    $services_page_id = null;

    foreach ( $pages as $page_data ) {
        $existing = get_page_by_path( $page_data['slug'] );
        if ( $existing ) {
            if ( isset( $page_data['front'] ) ) $services_page_id = $existing->ID;
            continue;
        }

        $page_id = wp_insert_post( [
            'post_title'   => $page_data['title'],
            'post_name'    => $page_data['slug'],
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '',
        ] );

        if ( ! is_wp_error( $page_id ) ) {
            update_post_meta( $page_id, '_wp_page_template', $page_data['template'] );
            if ( $page_data['slug'] === 'services' ) $services_page_id = $page_id;
        }
    }

    // Set front page
    $front = get_page_by_path( 'home' );
    if ( $front ) {
        update_option( 'page_on_front', $front->ID );
        update_option( 'show_on_front', 'page' );
    }

    // Create individual service sub-pages under Services
    foreach ( $service_pages as $sp ) {
        $existing = get_page_by_path( $sp['slug'] );
        if ( $existing ) continue;

        $page_id = wp_insert_post( [
            'post_title'   => $sp['title'],
            'post_name'    => $sp['slug'],
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '',
            'post_parent'  => $services_page_id ?? 0,
        ] );

        if ( ! is_wp_error( $page_id ) ) {
            update_post_meta( $page_id, '_wp_page_template', 'templates/pages/service-single.php' );
        }
    }
}

// ── Helper functions used by templates ───────────────────────────────────────

function hinl_header( string $active_page = '' ): void {
    include HINL_PATH . 'templates/includes/header.php';
}

function hinl_footer(): void {
    include HINL_PATH . 'templates/includes/footer.php';
}

function hinl_asset( string $path ): string {
    return HINL_URL . ltrim( $path, '/' );
}

function hinl_img( string $filename ): string {
    return get_template_directory_uri() . '/images/' . $filename;
}

function hinl_booking_form( string $pre_select = '' ): void {
    $selected = sanitize_text_field( $pre_select );
    include HINL_PATH . 'templates/partials/booking-form.php';
}
