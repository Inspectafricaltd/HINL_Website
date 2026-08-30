const fs = require('fs');

const page = {
  title: "Services",
  status: "publish",
  page_settings: {
    background_background: "classic",
    background_color: "#121415",
    custom_css: "body { background-color: #121415; color: #e2e2e3; }"
  },
  structure: [
    {
      type: "container",
      settings: {
        content_width: "full",
        min_height: { size: 520, unit: "px" },
        background_background: "classic",
        background_image: { id: 1657, url: "https://www.homeinspectors.ng/wp-content/uploads/2024/12/DSC06085-scaled.jpg" },
        background_overlay_background: "gradient",
        background_overlay_color: "rgba(18, 20, 21, 0.8)",
        background_overlay_color_b: "#121415",
        background_overlay_gradient_angle: { size: 180, unit: "deg" },
        justify_content: "center",
        align_items: "center",
        padding: { unit: "px", top: "140", right: "50", bottom: "100", left: "50", isLinked: false }
      },
      children: [
        {
          type: "widget",
          widget_type: "heading",
          settings: {
            title: "INVESTMENT SECURITY",
            typography_typography: "custom",
            typography_font_family: "Inter",
            typography_font_weight: "700",
            typography_font_size: { size: 12, unit: "px" },
            typography_letter_spacing: { size: 2, unit: "px" },
            title_color: "#65B32E",
            align: "center"
          }
        },
        {
          type: "widget",
          widget_type: "heading",
          settings: {
            title: "Transparent Pricing, Precise Audits.",
            typography_typography: "custom",
            typography_font_family: "Manrope",
            typography_font_weight: "800",
            typography_font_size: { size: 60, unit: "px" },
            title_color: "#ffffff",
            align: "center"
          }
        },
        {
          type: "widget",
          widget_type: "text-editor",
          settings: {
            editor: "<div style='text-align:center;'>Protect your real estate investment with Nigeria's most detailed technical audits. No hidden fees, just uncompromising precision for your peace of mind.</div>",
            typography_typography: "custom",
            typography_font_family: "Inter",
            typography_font_size: { size: 20, unit: "px" },
            text_color: "#c2c8bb"
          }
        }
      ]
    },
    {
      type: "container",
      settings: {
        background_color: "#121415",
        padding: { unit: "px", top: "80", right: "50", bottom: "80", left: "50", isLinked: false }
      },
      children: [
        {
          type: "widget",
          widget_type: "html",
          settings: {
            html: "<h2 style='font-family:Manrope,sans-serif;font-weight:700;font-size:36px;color:#fff;text-align:center;margin-bottom:60px;'>Core Inspection Packages</h2>"
          }
        },
        {
          type: "container",
          settings: { flex_direction: "row", gap: { size: 24, unit: "px" }, flex_wrap: "wrap", justify_content: "center" },
          children: [
            { type: "widget", widget_type: "html", settings: { html: "<div style='background:#1e2021;border:1px solid #42493d;border-radius:12px;padding:32px;width:280px;position:relative;'><div style='position:absolute;top:0;right:0;background:#42493d;color:#c2c8bb;padding:4px 12px;font-size:10px;font-weight:bold;text-transform:uppercase;'>Starter</div><h3 style='color:#fff;font-family:Manrope;font-size:24px;margin-bottom:8px;'>Move-In Certification</h3><div style='color:#65B32E;font-size:32px;font-weight:bold;margin-bottom:24px;'>₦150,000</div><ul style='list-style:none;padding:0;margin:0 0 32px;color:#c2c8bb;'><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Walk-through Inspection</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Move-In Certificate</li><li style='display:flex;align-items:center;gap:8px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Summary of Major Defects</li></ul><a href='#booking' style='display:block;text-align:center;padding:16px;background:#282a2b;color:#fff;border:1px solid #42493d;border-radius:8px;text-decoration:none;font-weight:bold;'>Select Plan</a></div>" } },
            { type: "widget", widget_type: "html", settings: { html: "<div style='background:#1e2021;border:2px solid #65B32E;border-radius:12px;padding:32px;width:280px;position:relative;transform:scale(1.05);z-index:1;'><div style='position:absolute;top:0;right:0;background:#65B32E;color:#fff;padding:4px 12px;font-size:10px;font-weight:bold;text-transform:uppercase;'>Recommended</div><h3 style='color:#fff;font-family:Manrope;font-size:24px;margin-bottom:8px;'>Home Inspection (Standard)</h3><div style='color:#65B32E;font-size:32px;font-weight:bold;margin-bottom:24px;'>₦350,000</div><ul style='list-style:none;padding:0;margin:0 0 32px;color:#e2e2e3;'><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Full HINL Home Inspection</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Foundation (Zip & Schmidt)</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Thermal Scan</li><li style='display:flex;align-items:center;gap:8px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Pictures & Videos & Report</li></ul><a href='#booking' style='display:block;text-align:center;padding:16px;background:#65B32E;color:#fff;border-radius:8px;text-decoration:none;font-weight:bold;'>Select Plan</a></div>" } },
            { type: "widget", widget_type: "html", settings: { html: "<div style='background:#1e2021;border:1px solid #42493d;border-radius:12px;padding:32px;width:280px;position:relative;'><div style='position:absolute;top:0;right:0;background:#42493d;color:#c2c8bb;padding:4px 12px;font-size:10px;font-weight:bold;text-transform:uppercase;'>No Utilities</div><h3 style='color:#fff;font-family:Manrope;font-size:24px;margin-bottom:8px;'>No Utility Inspection</h3><div style='color:#65B32E;font-size:32px;font-weight:bold;margin-bottom:24px;'>₦300,000</div><ul style='list-style:none;padding:0;margin:0 0 32px;color:#c2c8bb;'><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Home Inspection (No Utilities)</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Foundation (Zip & Schmidt)</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Thermal Scan</li><li style='display:flex;align-items:center;gap:8px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Pictures & Videos & Report</li></ul><a href='#booking' style='display:block;text-align:center;padding:16px;background:#282a2b;color:#fff;border:1px solid #42493d;border-radius:8px;text-decoration:none;font-weight:bold;'>Select Plan</a></div>" } },
            { type: "widget", widget_type: "html", settings: { html: "<div style='background:#1e2021;border:1px solid #42493d;border-radius:12px;padding:32px;width:280px;position:relative;'><div style='position:absolute;top:0;right:0;background:#42493d;color:#c2c8bb;padding:4px 12px;font-size:10px;font-weight:bold;text-transform:uppercase;'>In-depth</div><h3 style='color:#fff;font-family:Manrope;font-size:24px;margin-bottom:8px;'>Snag Inspection</h3><div style='color:#65B32E;font-size:32px;font-weight:bold;margin-bottom:24px;'>₦500,000</div><ul style='list-style:none;padding:0;margin:0 0 32px;color:#c2c8bb;'><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>HINL Snag Inspection</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Foundation (Zip & Schmidt)</li><li style='display:flex;align-items:center;gap:8px;margin-bottom:12px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Pictures & Videos</li><li style='display:flex;align-items:center;gap:8px;'><span class='material-symbols-outlined' style='color:#65B32E;'>check_circle</span>Detailed Report</li></ul><a href='#booking' style='display:block;text-align:center;padding:16px;background:#282a2b;color:#fff;border:1px solid #42493d;border-radius:8px;text-decoration:none;font-weight:bold;'>Select Plan</a></div>" } }
          ]
        }
      ]
    },
    {
      type: "container",
      settings: {
        background_color: "#1a1c1d",
        padding: { unit: "px", top: "80", right: "50", bottom: "80", left: "50", isLinked: false },
        html_tag: "section"
      },
      children: [
        {
          type: "widget",
          widget_type: "html",
          settings: {
            html: "<div style='display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;'><div><h2 style='font-family:Manrope;font-size:36px;font-weight:bold;color:#fff;margin-bottom:8px;'>Precision Add-Ons</h2><p style='color:#c2c8bb;'>Enhance your audit with specialized technical modules.</p></div></div><div style='display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px;'><div style='background:#1e2021;border:1px solid #42493d;padding:24px;border-radius:8px;'><div style='font-size:12px;color:#c2c8bb;font-weight:bold;text-transform:uppercase;margin-bottom:12px;'>Technical</div><h4 style='color:#fff;font-size:18px;font-weight:bold;margin-bottom:4px;'>Repair & Cost Estimate</h4><div style='color:#65B32E;font-weight:bold;'>₦130,000</div></div><div style='background:#1e2021;border:1px solid #42493d;padding:24px;border-radius:8px;'><div style='font-size:12px;color:#c2c8bb;font-weight:bold;text-transform:uppercase;margin-bottom:12px;'>Visualization</div><h4 style='color:#fff;font-size:18px;font-weight:bold;margin-bottom:4px;'>Video Walkthrough</h4><div style='color:#65B32E;font-weight:bold;'>₦80,000</div></div><div style='background:#1e2021;border:1px solid #42493d;padding:24px;border-radius:8px;'><div style='font-size:12px;color:#c2c8bb;font-weight:bold;text-transform:uppercase;margin-bottom:12px;'>Aerospace</div><h4 style='color:#fff;font-size:18px;font-weight:bold;margin-bottom:4px;'>Drone Roof Scan</h4><div style='color:#65B32E;font-weight:bold;'>₦60,000</div></div><div style='background:#1e2021;border:1px solid #42493d;padding:24px;border-radius:8px;'><div style='font-size:12px;color:#c2c8bb;font-weight:bold;text-transform:uppercase;margin-bottom:12px;'>Thermal</div><h4 style='color:#fff;font-size:18px;font-weight:bold;margin-bottom:4px;'>Full Thermal Scan</h4><div style='color:#65B32E;font-weight:bold;'>₦50,000</div></div></div>"
          }
        }
      ]
    },
    {
      type: "container",
      settings: {
        background_color: "#121415",
        padding: { unit: "px", top: "100", right: "50", bottom: "100", left: "50", isLinked: false },
        flex_direction: "row",
        gap: { size: 64, unit: "px" }
      },
      children: [
        {
          type: "container",
          settings: { width: "40%" },
          children: [
            {
              type: "widget",
              widget_type: "heading",
              settings: {
                title: "Secure Your Inspection Date",
                typography_typography: "custom",
                typography_font_family: "Manrope",
                typography_font_weight: "800",
                typography_font_size: { size: 40, unit: "px" },
                title_color: "#ffffff"
              }
            },
            {
              type: "widget",
              widget_type: "text-editor",
              settings: {
                editor: "Fill out the form to initiate your technical audit. Our team will verify the details and confirm your slot within 2 business hours.",
                text_color: "#c2c8bb",
                typography_typography: "custom",
                typography_font_size: { size: 18, unit: "px" }
              }
            },
            {
              type: "widget",
              widget_type: "html",
              settings: {
                html: "<div style='margin-top:32px;display:flex;flex-direction:column;gap:24px;'><div style='display:flex;gap:24px;align-items:center;'><div style='width:48px;height:48px;border-radius:50%;background:#1e2021;border:1px solid #42493d;display:flex;align-items:center;justify-content:center;color:#65B32E;'><span class='material-symbols-outlined'>timer</span></div><div><div style='font-weight:bold;color:#fff;'>Rapid Response</div><div style='font-size:14px;color:#c2c8bb;'>Confirmed bookings scheduled within 48 hours.</div></div></div><div style='display:flex;gap:24px;align-items:center;'><div style='width:48px;height:48px;border-radius:50%;background:#1e2021;border:1px solid #42493d;display:flex;align-items:center;justify-content:center;color:#65B32E;'><span class='material-symbols-outlined'>verified</span></div><div><div style='font-weight:bold;color:#fff;'>Certified Auditors</div><div style='font-size:14px;color:#c2c8bb;'>Every inspection led by a registered professional engineer.</div></div></div></div>"
              }
            }
          ]
        },
        {
          type: "container",
          settings: { width: "60%" },
          children: [
            {
              type: "widget",
              widget_type: "shortcode",
              settings: {
                shortcode: "[hinl_booking_form]"
              }
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync('build_services.json', JSON.stringify(page, null, 2));
console.log('JSON written');
