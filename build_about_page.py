#!/usr/bin/env python3
"""Build the HINL About page (ID 4180) via Elementor MCP server."""

import json
import requests
import sys

MCP_URL = "https://www.homeinspectors.ng/wp-json/mcp/elementor-mcp-server"
AUTH = "Basic YWRtbG5seDpjemVnIGVqRlAgcjlJUiBTbEMwIGNHbDMgMXIxWg=="
POST_ID = 4180

# Colors
PRIMARY = "#65B32E"
ON_PRIMARY = "#ffffff"
SURFACE = "#121415"
SURFACE_LOW = "#1a1c1d"
SURFACE_CONTAINER = "#1e2021"
SURFACE_HIGH = "#282a2b"
SURFACE_HIGHEST = "#333536"
ON_SURFACE = "#e2e2e3"
ON_SURFACE_VARIANT = "#c2c8bb"
OUTLINE = "#8a9480"
OUTLINE_VARIANT = "#42493d"

session_id = None
call_id = 1

def init_session():
    global session_id
    r = requests.post(MCP_URL, headers={
        "Authorization": AUTH,
        "Content-Type": "application/json"
    }, json={
        "jsonrpc": "2.0", "id": 1,
        "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "antigravity", "version": "1.0.0"}
        }
    })
    session_id = r.headers.get("Mcp-Session-Id")
    print(f"Session: {session_id}")
    return session_id

def mcp_call(tool_name, arguments):
    global call_id
    call_id += 1
    r = requests.post(MCP_URL, headers={
        "Authorization": AUTH,
        "Content-Type": "application/json",
        "Mcp-Session-Id": session_id
    }, json={
        "jsonrpc": "2.0", "id": call_id,
        "method": "tools/call",
        "params": {"name": tool_name, "arguments": arguments}
    })
    result = r.json()
    if result.get("result", {}).get("isError"):
        print(f"ERROR in {tool_name}: {json.dumps(result['result'], indent=2)}")
        return None
    # Extract element_id from structured content
    sc = result.get("result", {}).get("structuredContent", {})
    text = ""
    for c in result.get("result", {}).get("content", []):
        if c.get("type") == "text":
            text = c["text"]
    if sc and sc.get("element_id"):
        print(f"OK {tool_name} -> {sc['element_id']}")
        return sc["element_id"]
    # Try parsing text
    try:
        parsed = json.loads(text)
        if parsed.get("element_id"):
            print(f"OK {tool_name} -> {parsed['element_id']}")
            return parsed["element_id"]
        print(f"OK {tool_name} -> {text[:200]}")
        return parsed
    except:
        print(f"OK {tool_name} -> {text[:200]}")
        return text

def add_container(parent_id="", direction="column", justify="flex-start", align="stretch",
                  gap=0, bg_color=None, min_height=None, padding=None, tag="section",
                  css_id=None, wrap=None, position=-1, **extra):
    args = {"post_id": POST_ID, "parent_id": parent_id, "position": position, "tag": tag, "direction": direction}
    if justify: args["justify"] = justify
    if align: args["align"] = align
    if gap: args["gap"] = gap
    if bg_color: args["background_color"] = bg_color
    if min_height: args["min_height"] = min_height
    if padding is not None: args["padding"] = padding
    if css_id: args["css_id"] = css_id
    if wrap: args["wrap"] = wrap
    return mcp_call("elementor-mcp-add-container", args)

def add_flexbox(parent_id="", direction="column", justify="flex-start", align="stretch",
                gap=0, bg_color=None, min_height=None, padding=None, tag="div",
                css_id=None, wrap=None, position=-1):
    args = {"post_id": POST_ID, "parent_id": parent_id, "position": position, "tag": tag, "direction": direction}
    if justify: args["justify"] = justify
    if align: args["align"] = align
    if gap: args["gap"] = gap
    if bg_color: args["background_color"] = bg_color
    if min_height: args["min_height"] = min_height
    if padding is not None: args["padding"] = padding
    if css_id: args["css_id"] = css_id
    if wrap: args["wrap"] = wrap
    return mcp_call("elementor-mcp-add-flexbox", args)

def add_heading(parent_id, title, tag="h2", align="center", color=None, size=None):
    args = {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "title": title,
        "header_size": tag,
        "align": align,
    }
    if color: args["title_color"] = color
    if size: args["typography_font_size"] = {"size": size, "unit": "px"}
    args["typography_typography"] = "custom"
    args["typography_font_weight"] = "700"
    args["typography_font_family"] = "Inter"
    return mcp_call("elementor-mcp-add-heading", args)

def add_text(parent_id, content, align="left", color=None, size=None):
    args = {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "editor": content,
        "text_align": align,
    }
    if color: args["text_color"] = color
    args["typography_typography"] = "custom"
    args["typography_font_family"] = "Inter"
    if size: args["typography_font_size"] = {"size": size, "unit": "px"}
    return mcp_call("elementor-mcp-add-text-editor", args)

def add_html(parent_id, html_content):
    return mcp_call("elementor-mcp-add-html", {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "html": html_content
    })

def add_image(parent_id, image_id, image_url="", align="center"):
    args = {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "image": {"id": image_id, "url": image_url},
        "align": align
    }
    return mcp_call("elementor-mcp-add-image", args)

def add_spacer(parent_id, space=30):
    return mcp_call("elementor-mcp-add-spacer", {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "space": {"size": space, "unit": "px"}
    })

def add_divider(parent_id, color=PRIMARY, weight=2):
    return mcp_call("elementor-mcp-add-divider", {
        "post_id": POST_ID,
        "parent_id": parent_id,
        "color": color,
        "weight": {"size": weight, "unit": "px"}
    })

def update_container(element_id, settings):
    settings["post_id"] = POST_ID
    settings["element_id"] = element_id
    return mcp_call("elementor-mcp-update-container", settings)

def update_element(element_id, settings):
    return mcp_call("elementor-mcp-update-element", {
        "post_id": POST_ID,
        "element_id": element_id,
        "settings": settings
    })


# ── PAGE SETTINGS ──
def set_page_settings():
    print("\n=== PAGE SETTINGS ===")
    mcp_call("elementor-mcp-update-page-settings", {
        "post_id": POST_ID,
        "settings": {
            "background_background": "classic",
            "background_color": SURFACE,
            "padding": {"top": "0", "right": "0", "bottom": "0", "left": "0", "unit": "px", "isLinked": True},
            "hide_title": "yes",
            "template": "elementor_canvas"
        }
    })

# ── SECTION 1: HERO ──
def build_hero():
    print("\n=== BUILDING HERO ===")
    # Outer hero container with bg image
    hero = add_container(direction="column", justify="flex-end", align="center",
                         min_height=600, bg_color=SURFACE, css_id="hero-about", tag="section")
    if not hero:
        return None

    # Set background image and overlay
    update_element(hero, {
        "background_background": "classic",
        "background_image": {"id": 1664, "url": ""},
        "background_size": "cover",
        "background_position": "center center",
        "background_overlay_background": "classic",
        "background_overlay_color": "rgba(18,20,21,0.55)",
        "background_overlay_opacity": {"size": 1, "unit": "px"},
        "min_height": {"size": 80, "unit": "vh"},
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False}
    })

    # Inner content container
    inner = add_container(parent_id=hero, direction="column", justify="center", align="center",
                          gap=16, tag="div")
    update_element(inner, {
        "content_width": "boxed",
        "boxed_width": {"size": 900, "unit": "px"}
    })

    # Label
    add_html(inner, '<p style="color:#65B32E; text-transform:uppercase; font-size:14px; font-weight:600; letter-spacing:3px; font-family:Inter,sans-serif; text-align:center;">⬡ Established Verification</p>')

    # Main heading
    add_html(inner, '<h1 style="color:#e2e2e3; font-size:52px; font-weight:800; font-family:Inter,sans-serif; text-align:center; line-height:1.1;">Building Quality. <span style="color:#65B32E;">Verified.</span></h1>')

    # Subtitle
    add_text(inner,
        '<p style="text-align:center; max-width:700px; margin:0 auto;">Home Inspectors Nigeria Limited (HINL) is a licensed professional firm specializing in independent property verification, building inspection, and construction quality assurance across Nigeria.</p>',
        align="center", color=ON_SURFACE_VARIANT, size=17)

    return hero

# ── SECTION 2: WHO WE ARE ──
def build_who_we_are():
    print("\n=== BUILDING WHO WE ARE ===")
    section = add_container(direction="column", justify="flex-start", align="center",
                            bg_color=SURFACE, tag="section", css_id="who-we-are")
    update_element(section, {
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Heading
    add_html(section, '<h2 style="color:#e2e2e3; font-size:40px; font-weight:800; font-family:Inter,sans-serif; text-align:center; margin-bottom:16px;">WHO WE <span style="background-color:#65B32E; color:#ffffff; padding:2px 12px; border-radius:4px;">ARE</span></h2>')

    # Description
    add_text(section,
        '<p style="text-align:center; max-width:700px; margin:0 auto 48px auto;">We offer four core inspection phases to cover every stage of property ownership — from construction through to purchase.</p>',
        align="center", color=ON_SURFACE_VARIANT, size=16)

    # Phase cards row
    phases_row = add_container(parent_id=section, direction="row", justify="space-between",
                                align="flex-start", gap=24, tag="div", wrap="wrap")
    update_element(phases_row, {
        "content_width": "full"
    })

    phases = [
        {"num": "01", "icon": "architecture", "title": "Construction Phase",
         "desc": "Real-time inspection of new builds from foundation to finish. We verify structural integrity, materials, and compliance at every milestone."},
        {"num": "02", "icon": "biotech", "title": "Material Phase",
         "desc": "Laboratory and on-site testing of construction materials — concrete, steel, blocks, and more — to ensure they meet Nigerian and international standards."},
        {"num": "03", "icon": "fact_check", "title": "Completion Phase",
         "desc": "Comprehensive final inspection before handover. We verify that the completed building meets specifications, codes, and contractual obligations."},
        {"num": "04", "icon": "search", "title": "Pre-Purchase",
         "desc": "Independent property assessment for buyers and investors. Our detailed reports reveal the true condition of any property before you commit."}
    ]

    for i, phase in enumerate(phases):
        card = add_container(parent_id=phases_row, direction="column", justify="flex-start",
                             align="center", gap=12, tag="div")
        update_element(card, {
            "border_border": "solid",
            "border_width": {"top": "1", "right": "1", "bottom": "1", "left": "1", "unit": "px", "isLinked": True},
            "border_color": OUTLINE_VARIANT,
            "border_radius": {"top": "16", "right": "16", "bottom": "16", "left": "16", "unit": "px", "isLinked": True},
            "padding": {"top": "32", "right": "24", "bottom": "32", "left": "24", "unit": "px", "isLinked": False},
            "background_background": "classic",
            "background_color": SURFACE_HIGH,
            "margin": {"top": str(24 if i % 2 == 1 else 0), "right": "0", "bottom": "0", "left": "0", "unit": "px", "isLinked": False}
        })

        # Icon circle
        add_html(card, f'<div style="width:56px; height:56px; border-radius:50%; background:{PRIMARY}; display:flex; align-items:center; justify-content:center; margin:0 auto;"><span class="material-symbols-outlined" style="color:#fff; font-size:28px;">{phase["icon"]}</span></div>')

        # Phase number
        add_html(card, f'<p style="color:{OUTLINE}; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:2px; text-align:center; font-family:Inter,sans-serif;">Phase {phase["num"]}</p>')

        # Title
        add_html(card, f'<h3 style="color:{ON_SURFACE}; font-size:18px; font-weight:700; text-align:center; font-family:Inter,sans-serif;">{phase["title"]}</h3>')

        # Description
        add_text(card, f'<p style="text-align:center;">{phase["desc"]}</p>', align="center", color=ON_SURFACE_VARIANT, size=14)

    return section

# ── SECTION 3: VISION & MISSION ──
def build_vision_mission():
    print("\n=== BUILDING VISION & MISSION ===")
    section = add_container(direction="column", justify="flex-start", align="center",
                            bg_color="#0d0f10", tag="section", css_id="vision-mission")
    update_element(section, {
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Two-column row
    row = add_container(parent_id=section, direction="row", justify="space-between",
                         align="stretch", gap=32, tag="div")
    update_element(row, {"content_width": "full"})

    # Left column - vision and mission boxes
    left = add_container(parent_id=row, direction="column", justify="flex-start",
                          align="stretch", gap=24, tag="div")

    # Vision box (green bg)
    vision_box = add_container(parent_id=left, direction="column", justify="flex-start",
                                align="flex-start", gap=12, tag="div", bg_color=PRIMARY)
    update_element(vision_box, {
        "padding": {"top": "32", "right": "32", "bottom": "32", "left": "32", "unit": "px", "isLinked": True},
        "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True}
    })

    add_html(vision_box, '<h3 style="color:#ffffff; font-size:24px; font-weight:700; font-family:Inter,sans-serif;">Our Vision</h3>')
    add_text(vision_box, '<p>To become Africa\'s most trusted name in property verification — setting the benchmark for building quality assurance through innovation, integrity, and independent expertise.</p>', color=ON_PRIMARY, size=15)

    # Mission box (bordered)
    mission_box = add_container(parent_id=left, direction="column", justify="flex-start",
                                 align="flex-start", gap=12, tag="div")
    update_element(mission_box, {
        "padding": {"top": "32", "right": "32", "bottom": "32", "left": "32", "unit": "px", "isLinked": True},
        "border_border": "solid",
        "border_width": {"top": "1", "right": "1", "bottom": "1", "left": "1", "unit": "px", "isLinked": True},
        "border_color": OUTLINE_VARIANT,
        "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True},
        "background_background": "classic",
        "background_color": SURFACE_HIGH
    })

    add_html(mission_box, f'<h3 style="color:{ON_SURFACE}; font-size:24px; font-weight:700; font-family:Inter,sans-serif;">Our Mission</h3>')
    add_text(mission_box, '<p>To protect property investments and elevate construction standards by delivering accurate, technology-driven inspection and verification services — empowering homeowners, investors, and developers with the confidence to build and buy better.</p>', color=ON_SURFACE_VARIANT, size=15)

    # Right column - image
    right = add_container(parent_id=row, direction="column", justify="center",
                           align="center", tag="div")
    update_element(right, {
        "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True},
        "overflow": "hidden"
    })
    add_image(right, 3750)

    return section

# ── SECTION 4: VALUE PILLARS ──
def build_value_pillars():
    print("\n=== BUILDING VALUE PILLARS ===")
    section = add_container(direction="column", justify="flex-start", align="center",
                            bg_color=SURFACE, tag="section", css_id="value-pillars")
    update_element(section, {
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Heading
    add_html(section, '<h2 style="color:#e2e2e3; font-size:40px; font-weight:800; font-family:Inter,sans-serif; text-align:center; margin-bottom:48px;">VALUE <span style="background-color:#65B32E; color:#ffffff; padding:2px 12px; border-radius:4px;">PILLARS</span></h2>')

    # 5-column grid
    grid = add_container(parent_id=section, direction="row", justify="space-between",
                          align="stretch", gap=20, tag="div", wrap="wrap")
    update_element(grid, {"content_width": "full"})

    pillars = [
        {"icon": "verified_user", "title": "Integrity", "desc": "Independent verification free from conflicts of interest"},
        {"icon": "insights", "title": "Innovation", "desc": "Technology and data-driven inspection methodologies"},
        {"icon": "precision_manufacturing", "title": "Accuracy", "desc": "Fact-based systems ensuring reliable assessments"},
        {"icon": "public", "title": "Impact", "desc": "Contributing to better, safer buildings across Nigeria"},
        {"icon": "description", "title": "Clarity", "desc": "Actionable reporting that informs confident decisions"}
    ]

    for pillar in pillars:
        card = add_container(parent_id=grid, direction="column", justify="flex-start",
                              align="center", gap=12, tag="div")
        update_element(card, {
            "padding": {"top": "28", "right": "20", "bottom": "28", "left": "20", "unit": "px", "isLinked": False},
            "border_border": "solid",
            "border_width": {"top": "1", "right": "1", "bottom": "1", "left": "1", "unit": "px", "isLinked": True},
            "border_color": OUTLINE_VARIANT,
            "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True},
            "background_background": "classic",
            "background_color": SURFACE_HIGH
        })

        add_html(card, f'<div style="width:48px; height:48px; border-radius:50%; background:{PRIMARY}; display:flex; align-items:center; justify-content:center; margin:0 auto;"><span class="material-symbols-outlined" style="color:#fff; font-size:24px;">{pillar["icon"]}</span></div>')
        add_html(card, f'<h4 style="color:{ON_SURFACE}; font-size:16px; font-weight:700; text-align:center; font-family:Inter,sans-serif;">{pillar["title"]}</h4>')
        add_text(card, f'<p style="text-align:center;">{pillar["desc"]}</p>', align="center", color=ON_SURFACE_VARIANT, size=13)

    return section

# ── SECTION 5: LEADERSHIP ──
def build_leadership():
    print("\n=== BUILDING LEADERSHIP ===")
    section = add_container(direction="column", justify="flex-start", align="center",
                            bg_color=SURFACE_LOW, tag="section", css_id="leadership")
    update_element(section, {
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Two-column row
    row = add_container(parent_id=section, direction="row", justify="space-between",
                         align="stretch", gap=40, tag="div")
    update_element(row, {"content_width": "full"})

    # Left column - photo
    left = add_container(parent_id=row, direction="column", justify="flex-end",
                          align="stretch", tag="div")
    update_element(left, {
        "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True},
        "overflow": "hidden",
        "background_background": "classic",
        "background_image": {"id": 3505, "url": ""},
        "background_size": "cover",
        "background_position": "center center",
        "min_height": {"size": 500, "unit": "px"}
    })

    # Name overlay bar
    name_bar = add_container(parent_id=left, direction="column", justify="center",
                              align="flex-start", gap=4, tag="div", bg_color=PRIMARY)
    update_element(name_bar, {
        "padding": {"top": "16", "right": "24", "bottom": "16", "left": "24", "unit": "px", "isLinked": False}
    })
    add_html(name_bar, '<p style="color:#ffffff; font-size:13px; font-weight:500; text-transform:uppercase; letter-spacing:2px; font-family:Inter,sans-serif; margin:0;">President</p>')
    add_html(name_bar, '<p style="color:#ffffff; font-size:20px; font-weight:700; font-family:Inter,sans-serif; margin:0;">Casper Chidubem</p>')

    # Right column - bio
    right = add_container(parent_id=row, direction="column", justify="center",
                           align="flex-start", gap=20, tag="div")

    # Bio heading
    add_html(right, '<h2 style="color:#e2e2e3; font-size:36px; font-weight:800; font-family:Inter,sans-serif;">ABOUT THE <span style="background-color:#65B32E; color:#ffffff; padding:2px 12px; border-radius:4px;">PRESIDENT</span></h2>')

    # Bio text
    add_text(right,
        '<p>Casper Chidubem is the founder and president of Home Inspectors Nigeria Limited. A qualified building professional with over a decade of experience in construction quality assurance, property inspection, and real estate advisory, Casper established HINL to address the critical gap in independent property verification across Nigeria.</p>',
        color=ON_SURFACE_VARIANT, size=15)

    add_text(right,
        '<p>Under his leadership, HINL has grown to become a trusted name in the Nigerian property sector — serving homeowners, diaspora investors, corporate developers, and financial institutions with rigorous, technology-driven inspection services. Casper is committed to raising construction standards and protecting property investments through transparency, innovation, and professional integrity.</p>',
        color=ON_SURFACE_VARIANT, size=15)

    # Social links
    add_html(right, f'''<div style="display:flex; gap:12px; margin-top:8px;">
        <a href="#" style="width:40px; height:40px; border-radius:50%; background:{SURFACE_HIGH}; border:1px solid {OUTLINE_VARIANT}; display:flex; align-items:center; justify-content:center; text-decoration:none;">
            <span class="material-symbols-outlined" style="color:{ON_SURFACE}; font-size:20px;">share</span>
        </a>
        <a href="#" style="width:40px; height:40px; border-radius:50%; background:{SURFACE_HIGH}; border:1px solid {OUTLINE_VARIANT}; display:flex; align-items:center; justify-content:center; text-decoration:none;">
            <span class="material-symbols-outlined" style="color:{ON_SURFACE}; font-size:20px;">contact_page</span>
        </a>
    </div>''')

    return section

# ── SECTION 6: TESTIMONIALS ──
def build_testimonials():
    print("\n=== BUILDING TESTIMONIALS ===")
    section = add_container(direction="column", justify="flex-start", align="center",
                            bg_color=SURFACE, tag="section", css_id="testimonials")
    update_element(section, {
        "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Heading
    add_html(section, '<h2 style="color:#e2e2e3; font-size:40px; font-weight:800; font-family:Inter,sans-serif; text-align:center; margin-bottom:48px;">WHAT OUR <span style="background-color:#65B32E; color:#ffffff; padding:2px 12px; border-radius:4px;">CLIENTS SAY</span></h2>')

    # Two testimonial cards row
    row = add_container(parent_id=section, direction="row", justify="center",
                         align="stretch", gap=24, tag="div")
    update_element(row, {"content_width": "full"})

    testimonials = [
        {
            "name": "George Martins",
            "title": "Canadian-Based Investor",
            "quote": "As a diaspora investor, I was very nervous about buying property in Nigeria without being there physically. HINL gave me complete peace of mind. Their inspection report was incredibly detailed — they found issues the seller never disclosed. I saved millions in potential repairs. I now use them for every property transaction."
        },
        {
            "name": "DeeGlobal Realties",
            "title": "Property Manager",
            "quote": "Working with HINL has elevated our property management standards significantly. Their systematic approach to building inspection helps us maintain quality across our portfolio. The detailed reports and professional assessments have become an essential part of our due diligence process."
        }
    ]

    for t in testimonials:
        card = add_container(parent_id=row, direction="column", justify="flex-start",
                              align="flex-start", gap=16, tag="div")
        update_element(card, {
            "padding": {"top": "32", "right": "32", "bottom": "32", "left": "32", "unit": "px", "isLinked": True},
            "border_border": "solid",
            "border_width": {"top": "1", "right": "1", "bottom": "1", "left": "1", "unit": "px", "isLinked": True},
            "border_color": OUTLINE_VARIANT,
            "border_radius": {"top": "12", "right": "12", "bottom": "12", "left": "12", "unit": "px", "isLinked": True},
            "background_background": "classic",
            "background_color": SURFACE_HIGH
        })

        # Quote icon
        add_html(card, f'<span class="material-symbols-outlined" style="color:{PRIMARY}; font-size:32px;">format_quote</span>')

        # Quote text
        add_text(card, f'<p style="font-style:italic;">{t["quote"]}</p>', color=ON_SURFACE_VARIANT, size=15)

        # Author row
        author_row = add_container(parent_id=card, direction="row", justify="flex-start",
                                    align="center", gap=12, tag="div")

        # Avatar circle
        add_html(author_row, f'<div style="width:44px; height:44px; border-radius:50%; background:{PRIMARY}; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><span class="material-symbols-outlined" style="color:#fff; font-size:22px;">person</span></div>')

        # Name + title
        author_text = add_container(parent_id=author_row, direction="column", justify="center",
                                     align="flex-start", gap=2, tag="div")
        add_html(author_text, f'<p style="color:{PRIMARY}; font-size:15px; font-weight:700; font-family:Inter,sans-serif; margin:0;">{t["name"]}</p>')
        add_html(author_text, f'<p style="color:{ON_SURFACE_VARIANT}; font-size:13px; font-family:Inter,sans-serif; margin:0;">{t["title"]}</p>')

    return section

# ── SECTION 7: FOOTER ──
def build_footer():
    print("\n=== BUILDING FOOTER ===")
    footer = add_container(direction="column", justify="flex-start", align="center",
                           bg_color="#0d0f10", tag="footer", css_id="footer")
    update_element(footer, {
        "padding": {"top": "60", "right": "40", "bottom": "20", "left": "40", "unit": "px", "isLinked": False},
        "content_width": "boxed",
        "boxed_width": {"size": 1200, "unit": "px"}
    })

    # Footer columns row
    row = add_container(parent_id=footer, direction="row", justify="space-between",
                         align="flex-start", gap=40, tag="div", wrap="wrap")
    update_element(row, {"content_width": "full"})

    # Col 1-2: Brand
    brand = add_container(parent_id=row, direction="column", justify="flex-start",
                           align="flex-start", gap=16, tag="div")
    add_html(brand, f'<h3 style="color:{ON_SURFACE}; font-size:22px; font-weight:800; font-family:Inter,sans-serif;">HINL <span style="color:{PRIMARY};">●</span></h3>')
    add_text(brand, '<p>Home Inspectors Nigeria Limited — Protecting property investments through independent, technology-driven building inspection and verification services.</p>', color=ON_SURFACE_VARIANT, size=14)
    add_html(brand, f'<div style="display:flex; gap:4px; margin-top:8px;"><span style="color:{PRIMARY};">●</span><span style="color:{PRIMARY};">●</span><span style="color:{PRIMARY};">●</span></div>')

    # Col 3: Contact
    contact = add_container(parent_id=row, direction="column", justify="flex-start",
                             align="flex-start", gap=12, tag="div")
    add_html(contact, f'<h4 style="color:{ON_SURFACE}; font-size:16px; font-weight:700; font-family:Inter,sans-serif; margin-bottom:8px;">Contact</h4>')
    add_html(contact, f'<p style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; display:flex; align-items:center; gap:8px;"><span class="material-symbols-outlined" style="font-size:18px; color:{PRIMARY};">phone</span> +234 803 000 0000</p>')
    add_html(contact, f'<p style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; display:flex; align-items:center; gap:8px;"><span class="material-symbols-outlined" style="font-size:18px; color:{PRIMARY};">email</span> info@homeinspectors.ng</p>')
    add_html(contact, f'<p style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; display:flex; align-items:center; gap:8px;"><span class="material-symbols-outlined" style="font-size:18px; color:{PRIMARY};">location_on</span> Lagos, Nigeria</p>')

    # Col 4: Legal
    legal = add_container(parent_id=row, direction="column", justify="flex-start",
                           align="flex-start", gap=12, tag="div")
    add_html(legal, f'<h4 style="color:{ON_SURFACE}; font-size:16px; font-weight:700; font-family:Inter,sans-serif; margin-bottom:8px;">Legal</h4>')
    add_html(legal, f'<a href="/privacy-policy" style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; text-decoration:none;">Privacy Policy</a>')
    add_html(legal, f'<a href="/terms" style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; text-decoration:none;">Terms of Service</a>')
    add_html(legal, f'<a href="/disclaimer" style="color:{ON_SURFACE_VARIANT}; font-size:14px; font-family:Inter,sans-serif; text-decoration:none;">Disclaimer</a>')

    # Divider
    add_divider(footer, color=OUTLINE_VARIANT, weight=1)

    # Copyright
    add_html(footer, f'<p style="color:{OUTLINE}; font-size:13px; font-family:Inter,sans-serif; text-align:center; width:100%; padding:12px 0;">© 2024 Home Inspectors Nigeria Limited. All rights reserved.</p>')

    return footer


# ── ADD MATERIAL SYMBOLS FONT ──
def add_material_font():
    print("\n=== ADDING MATERIAL SYMBOLS FONT ===")
    mcp_call("elementor-mcp-update-page-settings", {
        "post_id": POST_ID,
        "settings": {
            "custom_css": """
/* Material Symbols */
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
/* Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Global resets for this page */
selector { font-family: 'Inter', sans-serif; }
"""
        }
    })


# ── MAIN ──
if __name__ == "__main__":
    print("=== BUILDING ABOUT PAGE (ID 4180) ===\n")
    init_session()

    set_page_settings()
    add_material_font()

    hero = build_hero()
    who = build_who_we_are()
    vision = build_vision_mission()
    pillars = build_value_pillars()
    leadership = build_leadership()
    testimonials = build_testimonials()
    footer = build_footer()

    print("\n=== BUILD COMPLETE ===")
    print(f"Page 4180 built with all 7 sections.")
    print(f"Preview: https://www.homeinspectors.ng/?page_id=4180")
