#!/usr/bin/env python3
"""Build the Diaspora page (WP ID 2393) via Elementor MCP server."""

import json
import requests
import sys
import time

MCP_URL = "https://www.homeinspectors.ng/wp-json/mcp/elementor-mcp-server"
AUTH_HEADER = "Basic YWRtbG5seDpjemVnIGVqRlAgcjlJUiBTbEMwIGNHbDMgMXIxWg=="
POST_ID = 2393
call_id = 0

def init_session():
    resp = requests.post(MCP_URL, headers={
        "Authorization": AUTH_HEADER,
        "Content-Type": "application/json"
    }, json={
        "jsonrpc": "2.0", "id": 1, "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "antigravity", "version": "1.0.0"}
        }
    })
    session_id = resp.headers.get("Mcp-Session-Id") or resp.headers.get("mcp-session-id")
    if not session_id:
        print("ERROR: No session ID in headers")
        print("Headers:", dict(resp.headers))
        sys.exit(1)
    print(f"Session: {session_id}")
    return session_id

def call_tool(session_id, tool_name, arguments, label=""):
    global call_id
    call_id += 1
    if label:
        print(f"\n--- [{call_id}] {label} ---")
    else:
        print(f"\n--- [{call_id}] {tool_name} ---")
    
    resp = requests.post(MCP_URL, headers={
        "Authorization": AUTH_HEADER,
        "Content-Type": "application/json",
        "Mcp-Session-Id": session_id
    }, json={
        "jsonrpc": "2.0", "id": call_id, "method": "tools/call",
        "params": {"name": tool_name, "arguments": arguments}
    })
    
    data = resp.json()
    result = data.get("result", {})
    structured = result.get("structuredContent", {})
    
    if result.get("isError"):
        print(f"  ERROR: {json.dumps(structured, indent=2)}")
        # Also print text content for more detail
        for c in result.get("content", []):
            if c.get("type") == "text":
                print(f"  TEXT: {c['text'][:500]}")
        return None
    
    element_id = structured.get("element_id", "")
    if element_id:
        print(f"  OK -> element_id: {element_id}")
    else:
        print(f"  OK -> {json.dumps(structured)[:200]}")
    
    return structured

def add_container(session_id, parent_id="", position=-1, direction="column", 
                  justify=None, align=None, gap=None, wrap=None,
                  bg_color=None, min_height=None, css_id=None, tag="div",
                  padding=None, extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "position": position}
    if direction: args["flex_direction"] = direction
    if justify: args["justify_content"] = justify
    if align: args["align_items"] = align
    if gap is not None: args["gap"] = gap
    if wrap: args["flex_wrap"] = wrap
    if bg_color: args["background_color"] = bg_color
    if min_height is not None: args["min_height"] = min_height
    if css_id: args["css_id"] = css_id
    if tag != "div": args["tag"] = tag
    if padding is not None: args["padding"] = padding
    if extra_settings:
        args["settings"] = extra_settings
    
    result = call_tool(session_id, "elementor-mcp-add-container", args, label)
    return result.get("element_id", "") if result else ""

def add_heading(session_id, parent_id, title, tag="h2", align=None,
                color=None, font_family=None, font_size=None, font_weight=None,
                extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "title": title, "tag": tag}
    if align: args["align"] = align
    if color: args["title_color"] = color
    if font_family: args["font_family"] = font_family
    if font_size: args["font_size"] = font_size
    if font_weight: args["font_weight"] = font_weight
    if extra_settings:
        args["settings"] = extra_settings
    
    result = call_tool(session_id, "elementor-mcp-add-heading", args, label)
    return result.get("element_id", "") if result else ""

def add_text(session_id, parent_id, content, align=None, color=None,
             font_family=None, font_size=None, extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "editor": content}
    if align: args["align"] = align
    if color: args["text_color"] = color
    if font_family: args["font_family"] = font_family
    if font_size: args["font_size"] = font_size
    if extra_settings:
        args["settings"] = extra_settings
    
    result = call_tool(session_id, "elementor-mcp-add-text-editor", args, label)
    return result.get("element_id", "") if result else ""

def add_button(session_id, parent_id, text, link="", btn_type="default",
               bg_color=None, text_color=None, border_color=None,
               extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "text": text}
    if link: args["link"] = link
    if btn_type: args["button_type"] = btn_type
    if extra_settings:
        args["settings"] = extra_settings
    
    result = call_tool(session_id, "elementor-mcp-add-button", args, label)
    return result.get("element_id", "") if result else ""

def add_image(session_id, parent_id, image_id=None, image_url=None,
              extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id}
    if image_id:
        args["image"] = {"id": image_id, "url": ""}
    if image_url:
        args["image"] = {"url": image_url, "id": ""}
    if extra_settings:
        args["settings"] = extra_settings
    
    result = call_tool(session_id, "elementor-mcp-add-image", args, label)
    return result.get("element_id", "") if result else ""

def add_html(session_id, parent_id, html_content, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "html": html_content}
    result = call_tool(session_id, "elementor-mcp-add-html", args, label)
    return result.get("element_id", "") if result else ""

def add_spacer(session_id, parent_id, space=50, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id, "space": space}
    result = call_tool(session_id, "elementor-mcp-add-spacer", args, label)
    return result.get("element_id", "") if result else ""

def add_divider(session_id, parent_id, extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id}
    if extra_settings:
        args["settings"] = extra_settings
    result = call_tool(session_id, "elementor-mcp-add-divider", args, label)
    return result.get("element_id", "") if result else ""

def add_icon_box(session_id, parent_id, extra_settings=None, label=""):
    args = {"post_id": POST_ID, "parent_id": parent_id}
    if extra_settings:
        args.update(extra_settings)
    result = call_tool(session_id, "elementor-mcp-add-icon-box", args, label)
    return result.get("element_id", "") if result else ""

def update_element(session_id, element_id, settings, label=""):
    args = {"post_id": POST_ID, "element_id": element_id, "settings": settings}
    result = call_tool(session_id, "elementor-mcp-update-element", args, label)
    return result

def update_container(session_id, element_id, settings, label=""):
    args = {"post_id": POST_ID, "element_id": element_id, "settings": settings}
    result = call_tool(session_id, "elementor-mcp-update-container", args, label)
    return result

def add_custom_css_via_html(session_id, parent_id, css, label=""):
    html = f"<style>{css}</style>"
    return add_html(session_id, parent_id, html, label)


# ============================================================
# MAIN BUILD
# ============================================================
def main():
    session_id = init_session()
    
    # First, set page settings
    print("\n========== PAGE SETTINGS ==========")
    call_tool(session_id, "elementor-mcp-update-page-settings", {
        "post_id": POST_ID,
        "settings": {
            "background_background": "classic",
            "background_color": "#121415",
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
            "custom_css": """
/* Diaspora Page Global Styles */
body { background: #121415; }
.material-symbols-outlined { font-size: 28px; }
.e-con { max-width: 100%; }
"""
        }
    }, "Page settings")

    # ============================================================
    # SECTION 1: HERO
    # ============================================================
    print("\n\n========== SECTION 1: HERO ==========")
    
    hero = add_container(session_id, direction="column", justify="center", align="flex-start",
        min_height=921, tag="section", css_id="diaspora-hero",
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_image": {"url": "", "id": 1668},
            "background_size": "cover",
            "background_position": "center center",
            "background_overlay_background": "classic",
            "background_overlay_color": "#121415",
            "background_overlay_opacity": {"size": 0.65, "unit": "px"},
            "padding": {"unit": "px", "top": "120", "right": "60", "bottom": "120", "left": "60"},
        },
        label="Hero section")
    
    if not hero:
        print("FATAL: Could not create hero section")
        sys.exit(1)
    
    # Hero content wrapper (constrain width to ~66%)
    hero_content = add_container(session_id, parent_id=hero, direction="column", 
        gap=24, align="flex-start",
        extra_settings={
            "content_width": "full",
            "_flex_size": "",
            "width": {"size": 66, "unit": "%"},
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
        },
        label="Hero content wrapper")
    
    # H1
    add_heading(session_id, hero_content,
        title='Peace of Mind for Your <span style="color:#65B32E">Investments</span> in Nigeria.',
        tag="h1", color="#e2e2e3", font_family="Manrope", font_size=56, font_weight="800",
        extra_settings={
            "typography_typography": "custom",
            "typography_line_height": {"size": 1.1, "unit": "em"},
        },
        label="Hero H1")
    
    # Subtitle
    add_text(session_id, hero_content,
        content='<p style="font-size:18px;color:#b0b0b1;line-height:1.7;max-width:560px;">Wherever you are in the world, HINL acts as your eyes and ears on the ground. Professional auditing for the global Nigerian.</p>',
        color="#b0b0b1", font_family="Inter", font_size=18,
        label="Hero subtitle")
    
    # Button row
    hero_btns = add_container(session_id, parent_id=hero_content, direction="row", gap=16,
        align="center",
        extra_settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "16", "right": "0", "bottom": "0", "left": "0"},
        },
        label="Hero buttons row")
    
    # CTA 1 - Green solid
    add_button(session_id, hero_btns, text="Secure Your Investment Today",
        link="https://www.homeinspectors.ng/booking/",
        extra_settings={
            "settings": {
                "button_type": "default",
                "background_color": "#65B32E",
                "button_text_color": "#ffffff",
                "typography_typography": "custom",
                "typography_font_family": "Inter",
                "typography_font_weight": "600",
                "typography_font_size": {"size": 15, "unit": "px"},
                "border_radius": {"unit": "px", "top": "6", "right": "6", "bottom": "6", "left": "6"},
                "text_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32"},
            }
        },
        label="CTA Green")
    
    # CTA 2 - Glass/transparent
    add_button(session_id, hero_btns, text="View Case Studies",
        link="#case-studies",
        extra_settings={
            "settings": {
                "button_type": "default",
                "background_color": "transparent",
                "button_text_color": "#e2e2e3",
                "border_border": "solid",
                "border_width": {"unit": "px", "top": "1", "right": "1", "bottom": "1", "left": "1"},
                "border_color": "rgba(255,255,255,0.2)",
                "typography_typography": "custom",
                "typography_font_family": "Inter",
                "typography_font_weight": "500",
                "typography_font_size": {"size": 15, "unit": "px"},
                "border_radius": {"unit": "px", "top": "6", "right": "6", "bottom": "6", "left": "6"},
                "text_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32"},
            }
        },
        label="CTA Glass")

    # ============================================================
    # SECTION 2: CORE PROTECTIONS (4-card grid)
    # ============================================================
    print("\n\n========== SECTION 2: CORE PROTECTIONS ==========")
    
    core_section = add_container(session_id, direction="column", align="center",
        tag="section", css_id="core-protections",
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_color": "#1a1c1d",
            "padding": {"unit": "px", "top": "100", "right": "60", "bottom": "100", "left": "60"},
        },
        label="Core Protections section")
    
    # Section heading
    add_heading(session_id, core_section,
        title="Core Diaspora Protections",
        tag="h2", color="#e2e2e3", font_family="Manrope", font_size=40, font_weight="800",
        extra_settings={
            "align": "center",
            "typography_typography": "custom",
        },
        label="Core heading")
    
    # Green underline bar
    add_divider(session_id, core_section, extra_settings={
        "settings": {
            "color": "#65B32E",
            "weight": {"size": 4, "unit": "px"},
            "width": {"size": 60, "unit": "px"},
            "align": "center",
            "gap": {"size": 24, "unit": "px"},
        }
    }, label="Green underline")
    
    # 4-column card grid
    cards_row = add_container(session_id, parent_id=core_section, direction="row",
        gap=24, wrap="wrap",
        extra_settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "40", "right": "0", "bottom": "0", "left": "0"},
        },
        label="Cards row")
    
    # Card data
    cards = [
        ("visibility", "Remote Monitoring", "Real-time photo & video updates from your property site. Track construction milestones and maintenance from abroad."),
        ("gavel", "Legal Verification", "Independent title & document verification. Ensure your property transactions comply with Nigerian law."),
        ("architecture", "Construction Audits", "Stage-by-stage building inspections with detailed engineering reports. Catch defects before they become expensive."),
        ("home_repair_service", "Property Maintenance", "Ongoing property condition monitoring. Regular check-ups ensure your investment maintains its value."),
    ]
    
    for icon_name, title, desc in cards:
        card = add_container(session_id, parent_id=cards_row, direction="column",
            gap=16, padding=32,
            extra_settings={
                "content_width": "full",
                "width": {"size": 23.5, "unit": "%"},
                "min_width": {"size": 250, "unit": "px"},
                "background_background": "classic",
                "background_color": "#1e2021",
                "border_radius": {"unit": "px", "top": "12", "right": "12", "bottom": "12", "left": "12"},
                "border_border": "solid",
                "border_width": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "3"},
                "border_color": "transparent",
            },
            label=f"Card: {title}")
        
        # Icon via HTML
        add_html(session_id, card,
            f'<span class="material-symbols-outlined" style="font-size:36px;color:#65B32E;">{icon_name}</span>',
            label=f"Icon: {icon_name}")
        
        add_heading(session_id, card, title=title, tag="h4",
            color="#e2e2e3", font_family="Manrope", font_size=20, font_weight="700",
            extra_settings={"typography_typography": "custom"},
            label=f"Card title: {title}")
        
        add_text(session_id, card,
            f'<p style="color:#9e9e9f;font-size:14px;line-height:1.7;">{desc}</p>',
            color="#9e9e9f", font_family="Inter", font_size=14,
            label=f"Card desc: {title}")

    # ============================================================
    # SECTION 3: DIASPORA FEATURES (asymmetric 2-col)
    # ============================================================
    print("\n\n========== SECTION 3: DIASPORA FEATURES ==========")
    
    features_section = add_container(session_id, direction="row",
        tag="section", css_id="diaspora-features", gap=60, align="center",
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_color": "#121415",
            "padding": {"unit": "px", "top": "100", "right": "60", "bottom": "100", "left": "60"},
        },
        label="Features section")
    
    # Left column - image
    feat_left = add_container(session_id, parent_id=features_section, direction="column",
        extra_settings={
            "content_width": "full",
            "width": {"size": 50, "unit": "%"},
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
        },
        label="Features left col")
    
    add_image(session_id, feat_left, image_id=2836,
        extra_settings={
            "settings": {
                "image_size": "large",
                "width": {"size": 100, "unit": "%"},
                "border_radius": {"unit": "px", "top": "16", "right": "16", "bottom": "16", "left": "16"},
            }
        },
        label="Features image")
    
    # PropTech badge overlay  
    add_html(session_id, feat_left,
        '<div style="background:#65B32E;padding:16px 20px;border-radius:12px;display:inline-flex;align-items:center;gap:10px;margin-top:-60px;margin-left:auto;position:relative;z-index:2;"><span class="material-symbols-outlined" style="color:#fff;font-size:24px;">view_in_ar</span><span style="color:#fff;font-weight:700;font-size:14px;font-family:Inter;">PropTech First</span></div>',
        label="PropTech badge")
    
    # Right column - text & features
    feat_right = add_container(session_id, parent_id=features_section, direction="column",
        gap=32, justify="center",
        extra_settings={
            "content_width": "full",
            "width": {"size": 50, "unit": "%"},
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "20"},
        },
        label="Features right col")
    
    add_heading(session_id, feat_right,
        title='Designed for the <em style="color:#65B32E;">Global Citizen</em>',
        tag="h2", color="#e2e2e3", font_family="Manrope", font_size=40, font_weight="800",
        extra_settings={"typography_typography": "custom"},
        label="Features heading")
    
    add_text(session_id, feat_right,
        '<p style="color:#9e9e9f;font-size:16px;line-height:1.7;">Our platform is purpose-built for Nigerians living abroad. Every tool, every report, every interaction is designed for remote property management.</p>',
        label="Features subtitle")
    
    # 3 feature items
    feature_items = [
        ("360", "Virtual 360 Walkthroughs", "Immersive property tours you can view from anywhere in the world."),
        ("live_tv", "Live Video Inspections", "Join inspections in real-time via video call with our field engineers."),
        ("cloud_done", "Secure Digital Vault", "All reports, documents, and media stored securely in your client portal."),
    ]
    
    for icon_name, title, desc in feature_items:
        feat_item = add_container(session_id, parent_id=feat_right, direction="row",
            gap=16, align="flex-start",
            extra_settings={
                "content_width": "full",
                "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
            },
            label=f"Feature: {title}")
        
        # Icon container
        add_html(session_id, feat_item,
            f'<div style="width:48px;height:48px;background:#1e2021;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span class="material-symbols-outlined" style="font-size:24px;color:#65B32E;">{icon_name}</span></div>',
            label=f"Feature icon: {icon_name}")
        
        feat_text_wrap = add_container(session_id, parent_id=feat_item, direction="column",
            gap=4,
            extra_settings={
                "content_width": "full",
                "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
            },
            label=f"Feature text: {title}")
        
        add_heading(session_id, feat_text_wrap, title=title, tag="h4",
            color="#e2e2e3", font_family="Manrope", font_size=18, font_weight="700",
            extra_settings={"typography_typography": "custom"},
            label=f"Feature title: {title}")
        
        add_text(session_id, feat_text_wrap,
            f'<p style="color:#9e9e9f;font-size:14px;line-height:1.6;">{desc}</p>',
            label=f"Feature desc: {title}")

    # ============================================================
    # SECTION 4: TRUST & STATS
    # ============================================================
    print("\n\n========== SECTION 4: TRUST & STATS ==========")
    
    trust_section = add_container(session_id, direction="column", align="center",
        tag="section", css_id="trust-stats", gap=40,
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_color": "#0d0f10",
            "padding": {"unit": "px", "top": "100", "right": "60", "bottom": "100", "left": "60"},
        },
        label="Trust section")
    
    # Label
    add_heading(session_id, trust_section,
        title="THE STANDARD OF EXCELLENCE",
        tag="div", color="#65B32E", font_family="Inter", font_size=13, font_weight="600",
        extra_settings={
            "align": "center",
            "typography_typography": "custom",
            "typography_letter_spacing": {"size": 4, "unit": "px"},
            "typography_text_transform": "uppercase",
        },
        label="Trust label")
    
    add_heading(session_id, trust_section,
        title="Verified Authority",
        tag="h2", color="#e2e2e3", font_family="Manrope", font_size=44, font_weight="800",
        extra_settings={
            "align": "center",
            "typography_typography": "custom",
        },
        label="Trust heading")
    
    # Stats row
    stats_row = add_container(session_id, parent_id=trust_section, direction="row",
        gap=0, justify="space-around", align="center",
        extra_settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "40", "right": "0", "bottom": "40", "left": "0"},
        },
        label="Stats row")
    
    stats = [
        ("5,000+", "Properties Verified"),
        ("ISO", "9001 Certified"),
        ("24h", "Report Delivery"),
        ("100%", "Diaspora Focused"),
    ]
    
    for stat_value, stat_label in stats:
        stat_col = add_container(session_id, parent_id=stats_row, direction="column",
            gap=8, align="center",
            extra_settings={
                "content_width": "full",
                "width": {"size": 25, "unit": "%"},
                "padding": {"unit": "px", "top": "20", "right": "10", "bottom": "20", "left": "10"},
            },
            label=f"Stat: {stat_value}")
        
        add_heading(session_id, stat_col, title=stat_value, tag="div",
            color="#65B32E", font_family="Manrope", font_size=48, font_weight="800",
            extra_settings={
                "align": "center",
                "typography_typography": "custom",
            },
            label=f"Stat value: {stat_value}")
        
        add_heading(session_id, stat_col, title=stat_label, tag="div",
            color="#9e9e9f", font_family="Inter", font_size=14, font_weight="500",
            extra_settings={
                "align": "center",
                "typography_typography": "custom",
                "typography_text_transform": "uppercase",
                "typography_letter_spacing": {"size": 1, "unit": "px"},
            },
            label=f"Stat label: {stat_label}")
    
    # Partner logo placeholders
    logos_row = add_container(session_id, parent_id=trust_section, direction="row",
        gap=24, justify="center", align="center",
        extra_settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "40", "right": "0", "bottom": "0", "left": "0"},
        },
        label="Partner logos row")
    
    for i in range(4):
        add_html(session_id, logos_row,
            f'<div style="width:160px;height:40px;background:#333536;border-radius:8px;opacity:0.5;"></div>',
            label=f"Logo placeholder {i+1}")

    # ============================================================
    # SECTION 5: CTA SECTION
    # ============================================================
    print("\n\n========== SECTION 5: CTA ==========")
    
    cta_section = add_container(session_id, direction="column", align="center",
        justify="center", tag="section", css_id="diaspora-cta", min_height=500,
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_image": {"url": "", "id": 1667},
            "background_size": "cover",
            "background_position": "center center",
            "background_overlay_background": "classic",
            "background_overlay_color": "#121415",
            "background_overlay_opacity": {"size": 0.90, "unit": "px"},
            "padding": {"unit": "px", "top": "100", "right": "60", "bottom": "100", "left": "60"},
        },
        label="CTA section")
    
    # CTA content
    cta_content = add_container(session_id, parent_id=cta_section, direction="column",
        gap=24, align="center",
        extra_settings={
            "content_width": "full",
            "width": {"size": 700, "unit": "px"},
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0"},
        },
        label="CTA content")
    
    add_heading(session_id, cta_content,
        title='Your Nigerian Estate, Protected from <em style="color:#65B32E;">Anywhere.</em>',
        tag="h2", color="#e2e2e3", font_family="Manrope", font_size=40, font_weight="800",
        extra_settings={
            "align": "center",
            "typography_typography": "custom",
            "typography_line_height": {"size": 1.2, "unit": "em"},
        },
        label="CTA heading")
    
    add_text(session_id, cta_content,
        '<p style="color:#9e9e9f;font-size:16px;line-height:1.7;text-align:center;">Join thousands of Nigerians abroad who trust HINL to protect their most valuable assets. Start with a free consultation today.</p>',
        extra_settings={"align": "center"},
        label="CTA subtitle")
    
    # CTA buttons
    cta_btns = add_container(session_id, parent_id=cta_content, direction="row",
        gap=16, justify="center", align="center",
        extra_settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "16", "right": "0", "bottom": "0", "left": "0"},
        },
        label="CTA buttons row")
    
    add_button(session_id, cta_btns, text="Secure Your Investment Today",
        link="https://www.homeinspectors.ng/booking/",
        extra_settings={
            "settings": {
                "background_color": "#65B32E",
                "button_text_color": "#ffffff",
                "typography_typography": "custom",
                "typography_font_family": "Inter",
                "typography_font_weight": "600",
                "typography_font_size": {"size": 15, "unit": "px"},
                "border_radius": {"unit": "px", "top": "6", "right": "6", "bottom": "6", "left": "6"},
                "text_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32"},
            }
        },
        label="CTA Green button")
    
    add_button(session_id, cta_btns, text="View Case Studies",
        link="#case-studies",
        extra_settings={
            "settings": {
                "background_color": "transparent",
                "button_text_color": "#e2e2e3",
                "border_border": "solid",
                "border_width": {"unit": "px", "top": "1", "right": "1", "bottom": "1", "left": "1"},
                "border_color": "rgba(255,255,255,0.2)",
                "typography_typography": "custom",
                "typography_font_family": "Inter",
                "typography_font_weight": "500",
                "typography_font_size": {"size": 15, "unit": "px"},
                "border_radius": {"unit": "px", "top": "6", "right": "6", "bottom": "6", "left": "6"},
                "text_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32"},
            }
        },
        label="CTA Glass button")

    # ============================================================
    # SECTION 6: FOOTER
    # ============================================================
    print("\n\n========== SECTION 6: FOOTER ==========")
    
    footer_section = add_container(session_id, direction="column", align="center",
        tag="footer", css_id="diaspora-footer", gap=24,
        extra_settings={
            "content_width": "boxed",
            "boxed_width": {"size": 1280, "unit": "px"},
            "background_background": "classic",
            "background_color": "#0d0f10",
            "padding": {"unit": "px", "top": "60", "right": "60", "bottom": "60", "left": "60"},
        },
        label="Footer section")
    
    # Footer links
    add_html(session_id, footer_section,
        '<div style="display:flex;gap:32px;justify-content:center;flex-wrap:wrap;">'
        '<a href="/privacy-policy" style="color:#9e9e9f;text-decoration:none;font-family:Inter;font-size:14px;font-weight:500;">Privacy Policy</a>'
        '<a href="/terms" style="color:#9e9e9f;text-decoration:none;font-family:Inter;font-size:14px;font-weight:500;">Terms of Service</a>'
        '<a href="/contact" style="color:#65B32E;text-decoration:none;font-family:Inter;font-size:14px;font-weight:600;">Contact Expert</a>'
        '</div>',
        label="Footer links")
    
    # Copyright
    add_text(session_id, footer_section,
        '<p style="color:#666;font-size:12px;text-align:center;font-family:Inter;">&copy; 2024 Home Inspectors Nigeria Limited. All rights reserved.</p>',
        extra_settings={"align": "center"},
        label="Copyright")
    
    # Precision Level bar
    add_html(session_id, footer_section,
        '<div style="width:100%;max-width:400px;margin:0 auto;">'
        '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">'
        '<span style="color:#9e9e9f;font-family:Inter;font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:2px;">Precision Level</span>'
        '<span style="color:#e2e2e3;font-family:Inter;font-size:12px;font-weight:600;">99.9%</span>'
        '</div>'
        '<div style="width:100%;height:4px;background:#333536;border-radius:2px;overflow:hidden;">'
        '<div style="width:99.9%;height:100%;background:linear-gradient(90deg,#ffb4ab,#65B32E);border-radius:2px;"></div>'
        '</div>'
        '</div>',
        label="Precision bar")

    print("\n\n========== BUILD COMPLETE ==========")
    print(f"Page 2393 built successfully!")
    print(f"Preview: https://www.homeinspectors.ng/?page_id=2393")
    print(f"Edit: https://www.homeinspectors.ng/wp-admin/post.php?post=2393&action=elementor")


if __name__ == "__main__":
    main()
