// Digits only, in international format, e.g. 2347082980999.
// Inlined at build time, so changing it needs a redeploy.
export const CONTACT_NUMBER =
  process.env.NEXT_PUBLIC_CONTACT_NUMBER || "2347082980999";

const [, country, a, b, c] =
  CONTACT_NUMBER.match(/^(\d{3})(\d{3})(\d{3})(\d{4})$/) ?? [];

export const CONTACT_NUMBER_DISPLAY = `+${country} ${a} ${b} ${c}`;
export const CONTACT_NUMBER_DISPLAY_LONG = `+${country} (0) ${a} ${b} ${c}`;
