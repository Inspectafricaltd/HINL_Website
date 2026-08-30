const fs = require('fs');

const page = {
  title: "Dashboard",
  status: "publish",
  page_settings: {
    background_background: "classic",
    background_color: "#121415",
    custom_css: "body { background-color: #121415; color: #e2e2e3; font-family: Inter, sans-serif; }"
  },
  structure: [
    {
      type: "container",
      settings: {
        flex_direction: "row",
        align_items: "stretch",
        content_width: "full",
        background_color: "#121415"
      },
      children: [
        {
          type: "container",
          settings: {
            width: "20%",
            background_color: "#1a1c1d",
            padding: { unit: "px", top: "40", right: "24", bottom: "40", left: "24", isLinked: false },
            border_border: "solid",
            border_width: { unit: "px", top: "0", right: "1", bottom: "0", left: "0", isLinked: false },
            border_color: "#333536"
          },
          children: [
            {
              type: "widget",
              widget_type: "image",
              settings: {
                image: { id: 620, url: "https://www.homeinspectors.ng/wp-content/uploads/2021/06/logo-2.png" },
                image_size: "medium",
                width: { size: 40, unit: "px" }
              }
            },
            {
              type: "widget",
              widget_type: "html",
              settings: {
                html: "<nav style='margin-top:40px;display:flex;flex-direction:column;gap:8px;'><a href='#' style='display:flex;align-items:center;gap:12px;padding:12px 16px;background:#282a2b;color:#65B32E;border-left:4px solid #65B32E;border-radius:4px;text-decoration:none;font-weight:600;'><span class='material-symbols-outlined'>dashboard</span> Overview</a><a href='#' style='display:flex;align-items:center;gap:12px;padding:12px 16px;color:#8a9480;text-decoration:none;font-weight:600;'><span class='material-symbols-outlined'>analytics</span> My Inspections</a><a href='#' style='display:flex;align-items:center;gap:12px;padding:12px 16px;color:#8a9480;text-decoration:none;font-weight:600;'><span class='material-symbols-outlined'>folder_open</span> Report Archive</a><a href='#' style='display:flex;align-items:center;gap:12px;padding:12px 16px;color:#8a9480;text-decoration:none;font-weight:600;'><span class='material-symbols-outlined'>support_agent</span> Support</a></nav>"
              }
            }
          ]
        },
        {
          type: "container",
          settings: {
            width: "80%",
            padding: { unit: "px", top: "60", right: "60", bottom: "60", left: "60", isLinked: true }
          },
          children: [
            {
              type: "widget",
              widget_type: "html",
              settings: {
                html: "<header style='display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;'><div><p style='color:#65B32E;font-size:12px;text-transform:uppercase;letter-spacing:3px;font-weight:bold;margin-bottom:8px;'>Precision Oversight</p><h1 style='font-family:Manrope;font-size:48px;font-weight:800;color:#fff;margin:0;'>Property <span style='color:rgba(101,179,46,0.8);'>Monitoring</span> Dashboard</h1></div><div style='text-align:right;'><p style='color:#8a9480;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;'>Last Updated</p><p style='color:#fff;font-family:monospace;margin:0;'>OCT 24, 2023 · 14:30 WAT</p></div></header>"
              }
            },
            {
              type: "container",
              settings: { flex_direction: "row", gap: { size: 24, unit: "px" } },
              children: [
                {
                  type: "widget",
                  widget_type: "html",
                  settings: {
                    html: "<div style='background:#1a1c1d;border-radius:12px;padding:32px;flex:1;'><p style='color:#8a9480;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;'>Active Inspections</p><p style='font-size:48px;font-weight:900;color:#fff;margin:0;'>04</p><div style='display:flex;align-items:center;gap:8px;color:#65B32E;font-size:12px;margin-top:24px;'><span class='material-symbols-outlined'>trending_up</span> 2 projects added this week</div></div>"
                  }
                },
                {
                  type: "widget",
                  widget_type: "html",
                  settings: {
                    html: "<div style='background:#1a1c1d;border-radius:12px;padding:32px;flex:1;'><p style='color:#8a9480;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;'>Reports Completed</p><p style='font-size:48px;font-weight:900;color:#fff;margin:0;'>12</p><div style='display:flex;align-items:center;gap:8px;color:#8a9480;font-size:12px;margin-top:24px;'><span class='material-symbols-outlined'>verified</span> View Archive for full history</div></div>"
                  }
                },
                {
                  type: "widget",
                  widget_type: "html",
                  settings: {
                    html: "<div style='background:#65B32E;border-radius:12px;padding:32px;flex:1;'><p style='color:rgba(255,255,255,0.6);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;'>Next Inspection</p><p style='font-size:32px;font-weight:900;color:#fff;margin:0;line-height:1.2;'>OCT 28<br><span style='font-size:20px;'>Lekki Phase 1</span></p><button style='margin-top:24px;background:transparent;border:1px solid rgba(255,255,255,0.3);color:#fff;padding:8px 16px;border-radius:4px;font-weight:bold;text-transform:uppercase;font-size:12px;'>Add to Calendar</button></div>"
                  }
                }
              ]
            },
            {
              type: "container",
              settings: { flex_direction: "row", gap: { size: 32, unit: "px" }, margin: { unit: "px", top: "48", right: "0", bottom: "0", left: "0", isLinked: false } },
              children: [
                {
                  type: "container",
                  settings: { width: "60%", background_color: "#1e2021", border_radius: { unit: "px", top: "16", right: "16", bottom: "16", left: "16", isLinked: true }, overflow: "hidden" },
                  children: [
                    {
                      type: "widget",
                      widget_type: "html",
                      settings: {
                        html: "<div style='position:relative;height:250px;'><img src='https://www.homeinspectors.ng/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-27-at-8.42.14-PM-e1770911886573.jpeg' style='width:100%;height:100%;object-fit:cover;opacity:0.8;'><div style='position:absolute;top:24px;left:24px;background:#65B32E;color:#fff;padding:4px 12px;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-radius:4px;'>In Progress</div></div><div style='padding:32px;'><div style='display:flex;justify-content:space-between;margin-bottom:24px;'><div><h2 style='font-size:24px;font-weight:bold;color:#fff;margin:0 0 4px;'>The Pantheon Residence</h2><p style='color:#8a9480;margin:0;font-size:14px;'>Plot 42A, Victoria Island, Lagos</p></div><div style='text-align:right;'><p style='font-size:12px;color:#8a9480;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;'>Audit Score</p><p style='font-size:32px;font-weight:900;color:#65B32E;margin:0;'>84%</p></div></div><div style='margin-bottom:40px;'><div style='display:flex;justify-content:space-between;margin-bottom:12px;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;'><span style='color:#fff;'>Structural Integrity Audit</span><span style='color:#65B32E;'>Phase 3 of 4</span></div><div style='height:8px;background:#333536;border-radius:4px;'><div style='height:100%;width:75%;background:#65B32E;border-radius:4px;'></div></div></div><div style='background:#121415;padding:24px;border-radius:8px;border-left:2px solid rgba(101,179,46,0.2);'><h4 style='font-size:12px;color:#8a9480;text-transform:uppercase;letter-spacing:2px;margin:0 0 16px;'>Latest Inspector Note</h4><p style='color:#fff;font-style:italic;font-size:14px;line-height:1.6;margin:0 0 24px;'>\"The reinforced concrete columns in the basement show optimal curing density. Proceeding to non-destructive testing of the mezzanine support structure tomorrow.\"</p><div style='display:flex;align-items:center;gap:12px;'><div style='width:32px;height:32px;background:#333536;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#65B32E;'><span class='material-symbols-outlined'>account_circle</span></div><p style='font-size:12px;font-weight:bold;color:#fff;text-transform:uppercase;letter-spacing:1px;margin:0;'>Engr. Chinedu Okafor <span style='font-weight:normal;color:#8a9480;margin-left:8px;'>Lead Auditor</span></p></div></div></div>"
                      }
                    }
                  ]
                },
                {
                  type: "container",
                  settings: { width: "40%" },
                  children: [
                    {
                      type: "widget",
                      widget_type: "html",
                      settings: {
                        html: "<h3 style='font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#8a9480;font-weight:bold;margin-bottom:24px;'>Property Monitoring Queue</h3><div style='background:#1a1c1d;padding:24px;border-radius:8px;margin-bottom:16px;'><div style='display:flex;justify-content:space-between;margin-bottom:16px;'><span style='background:#333536;color:#8a9480;font-size:9px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:4px 8px;border-radius:4px;'>Scheduled</span><span class='material-symbols-outlined' style='color:#8a9480;'>more_vert</span></div><h4 style='font-size:18px;font-weight:bold;color:#fff;margin:0 0 4px;'>Maitama Heights Annex</h4><p style='color:#8a9480;font-size:12px;margin:0 0 24px;'>Abuja, FCT · 5 Bedroom Detached</p><div style='border-top:1px solid rgba(138,148,128,0.1);padding-top:16px;display:flex;justify-content:space-between;align-items:center;'><div style='display:flex;align-items:center;gap:8px;color:#65B32E;'><span class='material-symbols-outlined' style='font-size:14px;'>calendar_month</span><span style='font-size:12px;color:#fff;'>Nov 02, 2023</span></div><span style='font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#65B32E;'>View Logistics</span></div></div><div style='background:#1a1c1d;padding:24px;border-radius:8px;margin-bottom:16px;border-left:2px solid #65B32E;'><div style='display:flex;justify-content:space-between;margin-bottom:16px;'><span style='background:rgba(101,179,46,0.2);color:#65B32E;font-size:9px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:4px 8px;border-radius:4px;'>Report Ready</span><span class='material-symbols-outlined' style='color:#8a9480;'>download</span></div><h4 style='font-size:18px;font-weight:bold;color:#fff;margin:0 0 4px;'>Eko Atlantic Luxury Suite</h4><p style='color:#8a9480;font-size:12px;margin:0 0 24px;'>Victoria Island · Tower C, Level 15</p><div style='border-top:1px solid rgba(138,148,128,0.1);padding-top:16px;display:flex;justify-content:space-between;align-items:center;'><div style='display:flex;align-items:center;gap:8px;color:#65B32E;'><span class='material-symbols-outlined' style='font-size:14px;'>verified</span><span style='font-size:12px;color:#fff;'>Completed Oct 20</span></div><span style='font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#fff;background:#333536;padding:4px 12px;border-radius:4px;'>Open PDF</span></div></div>"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync('build_dashboard.json', JSON.stringify(page, null, 2));
console.log('JSON written');
