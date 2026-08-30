---
name: Safety & Precision Design System
colors:
  surface: '#121415'
  surface-dim: '#121415'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0e0f'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333536'
  on-surface: '#e2e2e3'
  on-surface-variant: '#c0cab4'
  inverse-surface: '#e2e2e3'
  inverse-on-surface: '#2f3132'
  outline: '#8a9480'
  outline-variant: '#414939'
  surface-tint: '#8adb52'
  primary: '#8adb52'
  on-primary: '#163800'
  primary-container: '#65b32e'
  on-primary-container: '#1a3f00'
  inverse-primary: '#316b00'
  secondary: '#c6c6c9'
  on-secondary: '#2f3133'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c8c6c9'
  on-tertiary: '#303033'
  tertiary-container: '#a19fa3'
  on-tertiary-container: '#37363a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a5f86b'
  primary-fixed-dim: '#8adb52'
  on-primary-fixed: '#0a2000'
  on-primary-fixed-variant: '#235100'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e4e1e5'
  tertiary-fixed-dim: '#c8c6c9'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#121415'
  on-background: '#e2e2e3'
  surface-variant: '#333536'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system is engineered to project authority, reliability, and technical excellence. Designed for the property auditing sector, the aesthetic focuses on "Safety & Precision," utilizing a high-contrast dark theme that minimizes visual noise while highlighting critical data points.

The style is **Corporate Modern**, characterized by structured layouts and a clinical attention to detail. It avoids unnecessary decorative elements, favoring a functional minimalism that builds trust with high-net-worth individuals and corporate property developers. The emotional response should be one of absolute confidence—reassuring the user that their investment is being scrutinized by professionals using state-of-the-art tools.

## Colors

The palette is anchored by a deep, technical black and vibrant "HINL Green." This specific shade of green (#65B32E) acts as the primary signal for safety, verification, and successful auditing.

- **Primary (Green):** Reserved for primary actions (CTAs), verification badges, and positive data trends.
- **Backgrounds:** A tiered system of dark neutrals is used to create structural depth without losing the premium "dark mode" feel.
- **Accents:** High-purity white is used for primary typography to ensure maximum legibility against the dark canvas, while muted grays are used for secondary information and borders.

## Typography

This design system utilizes **Manrope**, a geometric sans-serif that balances modern tech aesthetics with high readability. The typography hierarchy is strictly enforced to guide the user through complex inspection reports and service listings.

Headlines use tight letter-spacing and heavy weights to appear impactful and architectural. Body copy is given ample line height to ensure clarity during long-form reading. Labels and metadata should utilize the "label-caps" style to provide a technical, "data-stamped" appearance appropriate for auditing documentation.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop, ensuring that information is centered and contained within a 1280px master container. This creates a focused, high-end editorial feel rather than a sprawling, generic SaaS dashboard.

A strict 8px base grid governs all spatial relationships. 
- **Margins:** 24px standard for mobile, 48px+ for desktop.
- **Rhythm:** Vertical spacing between sections should be generous (80px+) to allow the "Safety & Precision" aesthetic to breathe, reinforcing a sense of premium quality and unhurried professionalism.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional drop shadows. By using slightly lighter shades of gray for elements that are "closer" to the user, we maintain a crisp, flat aesthetic that feels modern and architectural.

- **Level 0 (Background):** #09090B (The foundation).
- **Level 1 (Cards/Sections):** #18181B (Subtle separation).
- **Level 2 (Popovers/Modals):** #27272A (Highest contrast).

Low-contrast outlines (1px solid #3F3F46) are used to define component boundaries. This "ghost border" technique provides structure without the visual clutter of heavy shadows, keeping the UI sharp and precise.

## Shapes

The shape language is conservative and disciplined. A subtle **8px (0.5rem)** corner radius is applied to buttons, input fields, and cards. This provides a hint of approachability while maintaining the structural integrity of a professional auditing firm.

Interactive elements like "Book Now" buttons may occasionally use slightly more rounding to differentiate them from static content containers, but overall, the system avoids fluid or organic shapes in favor of geometric stability.

## Components

### Buttons
- **Primary:** Solid #65B32E background with Black text. Bold weight. Minimal 8px rounding.
- **Secondary:** Transparent background with 1px white or green border.
- **States:** Hover states should utilize a slight brightness increase (+10%) rather than a color shift to maintain brand consistency.

### Input Fields
Dark-themed inputs with a #18181B background and #3F3F46 border. Focus states must clearly use the #65B32E green for the border to signal active precision.

### Cards & Property Modules
Inspection reports and property cards use Level 1 surface coloring (#18181B). Information is grouped using the "label-caps" typography for keys (e.g., DATE, STATUS, LOCATION) and white body-md for values.

### Status Indicators
Safety status should be communicated via small, circular "Precision Dots." 
- Green (#65B32E) for "Inspected/Safe."
- Amber for "Attention Required."
- Red for "Critical Failure."
These dots must always be accompanied by text to ensure accessibility.