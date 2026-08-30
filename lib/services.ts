export interface ServiceSection {
  title: string;
  intro?: string;
  items?: string[];
}

export interface ServiceAudience {
  type: string;
  desc: string;
}

export interface ServiceDeliverable {
  title: string;
  intro?: string;
  items?: string[];
}

export interface ServicePhase {
  name: string;
  price: string;
  features: string[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  badge?: string;
  description: string;
  features: string[];
  bestFor: string[];
  icon: string;
  phases?: ServicePhase[];
  summary?: string;
  overview?: string[];
  whyItMatters?: {
    intro?: string;
    issues?: string[];
    benefits?: string[];
    outro?: string;
  };
  whatsIncluded?: ServiceSection[];
  whoIsItFor?: ServiceAudience[];
  whatYouReceive?: ServiceDeliverable[];
  limitations?: { intro: string; items?: string[]; outro?: string };
  whyChooseHINL?: string[];
  cta?: { headline: string; tagline: string };
  monitoringFrequency?: string[];
}

export const services: Service[] = [
  /* ─── FOR BUYERS & HOMEOWNERS ─── */
  {
    slug: "standard-home-inspection",
    name: "HINL Standard Home Inspection",
    tagline: "Know the True Condition of a Property Before You Commit",
    price: "From ₦500,000",
    badge: "Recommended",
    description:
      "A comprehensive assessment of a property's visible condition, safety, functionality, and major building systems. Helps buyers, owners, investors, and lenders identify defects, reduce risk, and make informed decisions.",
    features: [
      "Structural, foundation & roofing assessment",
      "Electrical, plumbing & HVAC systems review",
      "Building envelope & interior areas inspection",
      "Fire & life safety observations",
      "Defect classification: Unsafe / Correction Required / Monitor / Acceptable",
      "Comprehensive digital inspection report with photographs",
      "Professional consultation with your HINL inspector",
    ],
    bestFor: [
      "Home buyers before purchase",
      "Property investors & lenders",
      "Diaspora clients unable to attend in person",
      "Property owners protecting their investment",
    ],
    icon: "home_search",
    summary:
      "A Standard Home Inspection is a comprehensive assessment of a property's visible condition, safety, functionality, and major building systems. It helps buyers, owners, investors, lenders, and occupants identify defects, reduce risk, and make informed decisions before purchase, occupancy, financing, or investment.",
    overview: [
      "A property may look impressive on the surface and still contain defects that affect safety, performance, comfort, or long-term value.",
      "Many property issues remain hidden during routine viewings and only become apparent after purchase or occupancy. Roof leaks, plumbing defects, electrical hazards, drainage problems, structural concerns, and workmanship deficiencies can result in significant repair costs and unnecessary stress.",
      "The HINL Standard Home Inspection (SHI) provides a professional, independent assessment of a property's visible condition at the time of inspection.",
      "Our inspectors evaluate the property's major systems and components, identify defects and deficiencies, and provide objective findings to help clients understand the true condition of the property.",
      "Whether you are buying, selling, financing, investing, renting, or maintaining a property, a Standard Home Inspection provides valuable insight that supports better decision-making.",
      "Because confidence comes from knowing—not assuming.",
    ],
    whyItMatters: {
      issues: [
        "Roof leaks",
        "Electrical safety hazards",
        "Plumbing defects",
        "Drainage problems",
        "Structural cracking",
        "Water intrusion",
        "Dampness and mold",
        "Poor workmanship",
        "Defective installations",
        "Deferred maintenance",
      ],
      benefits: [
        "Reduce uncertainty",
        "Identify visible defects and deficiencies",
        "Improve purchase decisions",
        "Support negotiations",
        "Reduce unexpected repair costs",
        "Improve maintenance planning",
        "Protect investments",
        "Improve safety and peace of mind",
      ],
      outro: "The objective is not to find fault—it is to provide clarity.",
    },
    whatsIncluded: [
      {
        title: "Site & External Areas",
        intro: "Inspection of:",
        items: ["Site grading", "Surface drainage", "Walkways and paving", "Boundary walls", "Retaining structures", "External features", "General site conditions"],
      },
      {
        title: "Structural Assessment",
        intro: "Inspection of visible:",
        items: ["Foundations (where accessible)", "Columns", "Beams", "Walls", "Slabs", "Structural cracking", "Settlement indicators", "Structural movement observations"],
      },
      {
        title: "Roofing System",
        intro: "Inspection of:",
        items: ["Roof coverings", "Flashings", "Gutters", "Downpipes", "Roof drainage systems", "Visible roof defects", "Water management provisions"],
      },
      {
        title: "Building Envelope",
        intro: "Assessment of:",
        items: ["External walls", "Doors", "Windows", "Glazing", "Balconies", "Terraces", "Weatherproofing observations"],
      },
      {
        title: "Interior Areas",
        intro: "Inspection of:",
        items: ["Floors", "Walls", "Ceilings", "Internal doors", "Internal windows", "Stairs and handrails", "Built-in components", "General finishes"],
      },
      {
        title: "Electrical Systems",
        intro: "Inspection of visible:",
        items: ["Distribution boards", "Circuit protection devices", "Switches", "Outlets", "Light fixtures", "Earthing observations", "Electrical safety concerns"],
      },
      {
        title: "Plumbing Systems",
        intro: "Assessment of:",
        items: ["Water supply systems", "Drainage systems", "Plumbing fixtures", "Water storage systems", "Visible leaks", "Plumbing-related concerns"],
      },
      {
        title: "HVAC & Ventilation",
        intro: "Inspection of:",
        items: ["Air-conditioning systems", "Ventilation provisions", "Condensate drainage", "General operational observations"],
      },
      {
        title: "Fire & Life Safety",
        intro: "Assessment of:",
        items: ["Safety hazards", "Guarding and handrails", "Escape route observations", "Fire safety provisions (where installed)", "General life safety concerns"],
      },
      {
        title: "General Maintenance Review",
        intro: "Identification of:",
        items: ["Deferred maintenance", "Aging components", "Property condition concerns", "Repair priorities", "Recommended corrective actions"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and documentation of:",
        items: ["Safety concerns", "Workmanship deficiencies", "Installation defects", "Maintenance issues", "Property condition concerns"],
      },
    ],
    whoIsItFor: [
      { type: "Home Buyers", desc: "Understand the true condition of a property before purchase." },
      { type: "Property Owners", desc: "Identify maintenance concerns and protect your investment." },
      { type: "Property Investors", desc: "Reduce risk and improve investment decisions." },
      { type: "Diaspora Clients", desc: "Receive independent insight when you cannot be physically present." },
      { type: "Mortgage Applicants", desc: "Gain additional confidence before financing or acquisition." },
      { type: "Property Managers", desc: "Establish a baseline understanding of property condition." },
      { type: "Corporate Clients", desc: "Assess staff accommodation and residential assets." },
    ],
    whatYouReceive: [
      {
        title: "Comprehensive Digital Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Detailed findings", "Defect descriptions", "Property condition observations", "Supporting photographs", "Safety observations", "Maintenance concerns", "Recommended actions"],
      },
      {
        title: "Defect Classification",
        intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable",
      },
      {
        title: "Property Condition Summary",
        intro: "A concise overview highlighting:",
        items: ["Major concerns", "Priority defects", "Safety issues", "Recommended next steps"],
      },
      {
        title: "Professional Consultation",
        intro: "Opportunity to discuss findings and recommendations with an HINL inspector.",
      },
    ],
    limitations: {
      intro:
        "The Standard Home Inspection is a non-invasive visual inspection of readily accessible systems and components at the time of inspection. The service does not include:",
      items: ["Destructive testing", "Engineering analysis", "Property valuation", "Legal verification", "Specialist investigations", "Concealed components", "Future performance guarantees"],
      outro: "Additional specialist evaluations may be recommended where necessary.",
    },
    whyChooseHINL: [
      "At HINL, we believe that every property decision should be supported by reliable information.",
      "Our Standard Home Inspection provides independent, objective, and professional insight into the condition of a property, helping clients understand risks, identify defects, and make informed decisions with confidence.",
      "Whether you are buying your first home, investing in property, relocating from abroad, or protecting an existing asset, our inspections help ensure that important decisions are based on facts rather than assumptions.",
      "Because the true condition of a property matters.",
    ],
    cta: {
      headline: "Know Before You Commit. Understand the Property Before It Becomes Your Responsibility.",
      tagline: "Inspect Before You Invest.",
    },
  },

  {
    slug: "move-in-certification",
    name: "HINL Move-In Certification",
    tagline: "Move Into Your Home With Confidence",
    price: "From ₦350,000",
    badge: "Starter",
    description:
      "A focused inspection and certification service designed to assess whether a completed property is suitable for occupancy. Identifies safety concerns, functional deficiencies, and outstanding issues before moving in.",
    features: [
      "Occupancy readiness assessment",
      "Electrical safety review",
      "Plumbing & water systems check",
      "Interior areas & finishes inspection",
      "Roofing & water management observations",
      "HVAC & ventilation assessment",
      "Official Move-In Certification issued",
    ],
    bestFor: [
      "Home buyers taking possession",
      "Tenants before moving into a rental",
      "Property owners after construction or renovation",
      "Diaspora clients before travelling or relocating",
    ],
    icon: "key",
    summary:
      "A Move-In Certification is a focused inspection and certification service designed to assess whether a completed property is suitable for occupancy. It helps buyers, tenants, and property owners identify safety concerns, functional deficiencies, and outstanding issues before moving into a new home.",
    overview: [
      "Moving into a new home is one of life's most significant milestones. Whether the property is newly constructed, recently renovated, rented, or purchased, understanding its condition before occupancy is essential.",
      "The HINL Move-In Certification (MIC) is designed to provide an independent assessment of a property's readiness for occupation. Unlike a traditional home inspection that focuses on documenting the property's overall condition, the Move-In Certification focuses specifically on identifying conditions that may affect comfort, functionality, safety, and immediate habitability.",
      "The objective is simple: to help occupants move in with confidence.",
      "Our inspectors assess the property's major accessible systems and components, identify deficiencies requiring attention, and determine whether the property is suitable for occupancy at the time of inspection.",
    ],
    whyItMatters: {
      issues: [
        "Electrical safety deficiencies",
        "Plumbing leaks",
        "Poor drainage",
        "Defective fixtures",
        "Incomplete installations",
        "Roof leaks",
        "Water penetration",
        "Safety hazards",
        "Poor workmanship",
        "Missing components",
      ],
      outro:
        "Identifying these issues before occupancy allows corrective action to be taken before they become costly, disruptive, or inconvenient. A Move-In Certification provides additional peace of mind by helping occupants understand the property's condition before they move in.",
    },
    whatsIncluded: [
      { title: "Occupancy Readiness Assessment", intro: "Evaluation of conditions that may affect immediate occupancy." },
      {
        title: "Electrical Safety Review",
        intro: "Assessment of visible electrical safety concerns including:",
        items: ["Distribution boards", "Circuit protection", "Switches and outlets", "Visible wiring deficiencies"],
      },
      {
        title: "Plumbing & Water Systems",
        intro: "Inspection of:",
        items: ["Water supply systems", "Fixtures", "Drainage performance", "Visible leaks"],
      },
      {
        title: "Interior Areas",
        intro: "Assessment of:",
        items: ["Floors", "Walls", "Ceilings", "Doors", "Windows", "Stairs", "General finishes"],
      },
      { title: "Roofing & Water Management", intro: "Inspection of visible roofing concerns and signs of water intrusion." },
      { title: "HVAC & Ventilation", intro: "Assessment of installed cooling and ventilation systems where applicable." },
      { title: "Safety Observations", intro: "Identification of visible conditions that may pose immediate safety concerns." },
    ],
    whoIsItFor: [
      { type: "Home Buyers", desc: "Verify the property's readiness before taking possession." },
      { type: "Tenants", desc: "Understand the condition of a rental property before moving in." },
      { type: "Property Owners", desc: "Confirm occupancy readiness following construction or renovation." },
      { type: "Diaspora Clients", desc: "Receive independent verification before travelling or relocating." },
      { type: "Corporate Housing Clients", desc: "Assess staff accommodation prior to occupancy." },
    ],
    whatYouReceive: [
      {
        title: "Move-In Certification Report",
        intro: "A digital report detailing:",
        items: ["Inspection findings", "Defect photographs", "Safety observations", "Recommended actions", "Occupancy assessment"],
      },
      {
        title: "Occupancy Classification",
        intro: "Properties are classified as: Suitable for Occupancy · Suitable – Corrections Recommended · Not Suitable – Corrections Required",
      },
      {
        title: "Professional Consultation",
        intro: "Opportunity to discuss findings and recommendations with the inspector.",
      },
    ],
    limitations: {
      intro:
        "The Move-In Certification is a non-invasive visual inspection of readily accessible components at the time of inspection. The service does not include engineering analysis, destructive testing, or specialist investigations unless specifically requested.",
    },
    whyChooseHINL: [
      "HINL's Move-In Certification provides independent verification of a property's readiness for occupancy. Our objective is to help clients move into homes that are safer, better understood, and free from avoidable surprises.",
      "Through professional inspections and objective reporting, we help build confidence in one of the most important decisions a person can make.",
    ],
    cta: { headline: "Move Into Your Home With Confidence.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "snag-inspection",
    name: "HINL Snag Inspection",
    tagline: "Identify Defects Before Handover",
    price: "From ₦700,000",
    badge: "New Builds",
    description:
      "A detailed assessment of a newly completed property designed to identify workmanship defects, incomplete items, finishing deficiencies, and quality concerns before final handover.",
    features: [
      "Room-by-room interior finishes inspection",
      "Doors, windows & glazing assessment",
      "Kitchen areas & bathroom wet zones",
      "Electrical & plumbing systems check",
      "Roofing & external areas review",
      "Comprehensive snag list with photographs",
      "Defect classification for developer remediation",
    ],
    bestFor: [
      "New home buyers before final acceptance",
      "Buyers of off-plan developments at handover",
      "Developers improving handover quality",
      "Diaspora buyers receiving independent verification",
    ],
    icon: "fact_check",
    summary:
      "A Snagging Inspection is a detailed assessment of a newly completed property designed to identify workmanship defects, incomplete items, finishing deficiencies, and quality concerns before final handover.",
    overview: [
      "A newly completed property does not always mean a defect-free property.",
      "Even well-constructed homes can contain workmanship deficiencies, incomplete installations, cosmetic defects, and quality concerns that may not be immediately apparent during a standard viewing.",
      "The HINL Snagging Inspection is designed specifically for newly completed properties approaching handover. Our inspectors conduct a systematic room-by-room assessment to identify defects, unfinished works, installation issues, and quality concerns that require attention before final acceptance.",
      "The objective is simple: to ensure that defects are identified while the contractor or developer remains responsible for correcting them.",
      "By addressing issues before handover, property owners can avoid unnecessary disputes, inconvenience, and repair costs after moving in.",
    ],
    whyItMatters: {
      issues: [
        "Poor workmanship",
        "Damaged finishes",
        "Defective fixtures",
        "Plumbing leaks",
        "Electrical deficiencies",
        "Poor drainage",
        "Incomplete installations",
        "Alignment issues",
        "Missing components",
        "Cosmetic defects",
      ],
      outro:
        "Identifying these concerns before handover provides an opportunity for corrective action while responsibility remains with the builder or developer. A professional snagging inspection helps ensure that the property delivered is the property expected.",
    },
    whatsIncluded: [
      {
        title: "Interior Finishes",
        intro: "Inspection of:",
        items: ["Walls", "Ceilings", "Floors", "Paint finishes", "Tiling", "Joinery", "Surface finishes"],
      },
      {
        title: "Doors & Windows",
        intro: "Assessment of:",
        items: ["Operation", "Alignment", "Locks and hardware", "Glazing", "Seals and gaskets", "Installation quality"],
      },
      {
        title: "Kitchen Areas",
        intro: "Inspection of:",
        items: ["Cabinets", "Countertops", "Fixtures", "Sinks", "Appliances (where installed)", "Workmanship quality"],
      },
      {
        title: "Bathrooms & Wet Areas",
        intro: "Inspection of:",
        items: ["Fixtures and fittings", "Drainage performance", "Waterproofing indicators", "Tiling quality", "Sealants", "Installation defects"],
      },
      {
        title: "Electrical Systems",
        intro: "Assessment of:",
        items: ["Switches", "Sockets", "Lighting fixtures", "Distribution boards", "Visible electrical defects", "Functional observations"],
      },
      {
        title: "Plumbing Systems",
        intro: "Inspection of:",
        items: ["Water fixtures", "Drainage fixtures", "Visible leaks", "Water flow observations", "Installation quality"],
      },
      {
        title: "Roofing & External Areas",
        intro: "Inspection of:",
        items: ["Roof-related observations", "Gutters and drainage", "External finishes", "Balconies and terraces", "General workmanship"],
      },
      {
        title: "Defect Documentation",
        intro: "Identification and documentation of:",
        items: ["Incomplete works", "Damaged components", "Installation defects", "Workmanship deficiencies", "Cosmetic concerns", "Functional deficiencies"],
      },
    ],
    whoIsItFor: [
      { type: "New Home Buyers", desc: "Verify the quality of a newly completed home before acceptance." },
      { type: "Property Owners", desc: "Ensure defects are identified before taking possession." },
      { type: "Developers", desc: "Improve handover quality and reduce post-handover complaints." },
      { type: "Diaspora Clients", desc: "Receive independent verification before final acceptance." },
      { type: "Investors", desc: "Protect investment quality before completion and occupancy." },
    ],
    whatYouReceive: [
      {
        title: "Comprehensive Snagging Report",
        intro: "A professionally prepared report containing:",
        items: ["Detailed snag list", "Defect descriptions", "Supporting photographs", "Room-by-room findings", "Recommended corrective actions"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Photographic Documentation", intro: "Clear photographic evidence supporting inspection findings." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommended actions with an HINL inspector." },
    ],
    limitations: {
      intro:
        "A Snagging Inspection focuses primarily on visible workmanship, finishing quality, installation deficiencies, and observable defects at the time of inspection. The service does not replace a full Standard Home Inspection and does not include destructive testing, concealed components, engineering analysis, or specialist investigations unless specifically requested.",
    },
    whyChooseHINL: [
      "HINL provides independent snagging inspections designed to help property owners take possession with confidence.",
      "Our systematic inspection process helps identify defects while corrective action remains practical, ensuring that buyers receive the quality they expect and developers deliver the quality they promise.",
      "Because handover should be the beginning of confidence—not the beginning of repairs.",
    ],
    cta: { headline: "Identify Defects Before They Become Your Responsibility.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "home-health-check",
    name: "HINL Home Health Check",
    tagline: "Assess the Health of Your Home Before Problems Become Expensive",
    price: "On Demand",
    description:
      "A condition-focused inspection designed for occupied homes, helping homeowners identify maintenance issues, safety concerns, aging components, and emerging defects before they become major repairs.",
    features: [
      "Roofing system & structural assessment",
      "Electrical & plumbing health check",
      "Dampness & moisture assessment",
      "Interior areas & finishes inspection",
      "HVAC & ventilation review",
      "General maintenance review with repair priorities",
      "Building health assessment report",
    ],
    bestFor: [
      "Homeowners wanting proactive maintenance",
      "Landlords protecting rental properties",
      "Diaspora property owners needing condition updates",
      "Long-term property owners monitoring aging buildings",
    ],
    icon: "health_and_safety",
    summary:
      "A Home Health Check is a condition-focused inspection designed for occupied homes, helping homeowners identify maintenance issues, safety concerns, aging components, and emerging defects before they become major repairs.",
    overview: [
      "Just like people benefit from regular health check-ups, homes benefit from periodic condition assessments.",
      "Over time, buildings naturally experience wear and tear. Small defects can develop into major problems if left undetected. Roof leaks, plumbing failures, electrical hazards, dampness, structural movement, and maintenance deficiencies often begin as minor issues before becoming costly repairs.",
      "The HINL Home Health Check (HHC) is designed to help homeowners proactively monitor the condition of their property.",
      "Rather than waiting for something to fail, this service helps identify concerns early, allowing homeowners to plan maintenance, prioritize repairs, improve safety, and protect the long-term value of their investment.",
      "The goal is prevention, not reaction.",
    ],
    whyItMatters: {
      intro: "Most building failures do not occur suddenly. They develop gradually through:",
      issues: [
        "Deferred maintenance",
        "Aging building components",
        "Water intrusion",
        "Electrical deterioration",
        "Plumbing defects",
        "Roof deterioration",
        "Structural movement",
        "Environmental exposure",
      ],
      benefits: [
        "Identify maintenance issues early",
        "Improve property safety",
        "Reduce repair costs",
        "Extend building lifespan",
        "Protect property value",
        "Improve occupant comfort",
        "Support proactive maintenance planning",
      ],
      outro: "By the time many homeowners notice a problem, significant damage may already have occurred.",
    },
    whatsIncluded: [
      {
        title: "Roofing System Assessment",
        intro: "Inspection of:",
        items: ["Roof coverings", "Flashings", "Gutters and downpipes", "Roof drainage systems", "Visible signs of deterioration", "Water intrusion indicators"],
      },
      {
        title: "Structural Assessment",
        intro: "Inspection of visible:",
        items: ["Cracks", "Settlement indicators", "Structural movement", "Foundation observations", "Walls, beams, and slabs"],
      },
      {
        title: "Electrical Health Check",
        intro: "Assessment of:",
        items: ["Distribution boards", "Circuit protection devices", "Visible wiring concerns", "Switches and outlets", "Earthing observations", "General electrical safety conditions"],
      },
      {
        title: "Plumbing Health Check",
        intro: "Inspection of:",
        items: ["Water supply systems", "Plumbing fixtures", "Drainage systems", "Water storage systems", "Visible leaks", "Water-related defects"],
      },
      {
        title: "Dampness & Moisture Assessment",
        intro: "Assessment of:",
        items: ["Damp walls", "Water penetration", "Moisture-related concerns", "Ceiling staining", "Mold indicators", "Condensation observations"],
      },
      {
        title: "Interior Areas",
        intro: "Inspection of:",
        items: ["Floors", "Walls", "Ceilings", "Doors and windows", "Internal finishes", "General condition observations"],
      },
      {
        title: "HVAC & Ventilation",
        intro: "Assessment of:",
        items: ["Air-conditioning systems", "Ventilation provisions", "Condensate drainage", "General performance observations"],
      },
      {
        title: "General Maintenance Review",
        intro: "Identification of:",
        items: ["Deferred maintenance items", "Aging components", "Repair priorities", "Property condition concerns"],
      },
    ],
    whoIsItFor: [
      { type: "Homeowners", desc: "Maintain your property and identify issues before they become costly." },
      { type: "Long-Term Property Owners", desc: "Monitor the condition of aging buildings and building systems." },
      { type: "Landlords", desc: "Protect rental properties and improve tenant satisfaction." },
      { type: "Facility Managers", desc: "Improve maintenance planning and budgeting." },
      { type: "Diaspora Property Owners", desc: "Receive independent condition updates on properties in Nigeria." },
      { type: "Property Investors", desc: "Protect long-term asset performance and value." },
    ],
    whatYouReceive: [
      {
        title: "Home Health Check Report",
        intro: "A professionally prepared report containing:",
        items: ["Property condition observations", "Maintenance recommendations", "Defect photographs", "Safety observations", "Priority repair items", "Building health assessment"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Maintenance Planning Guidance", intro: "Recommendations to help prioritize repairs and maintenance activities." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommended next steps with an HINL inspector." },
    ],
    limitations: {
      intro:
        "The Home Health Check is a non-invasive visual inspection of readily accessible components and systems at the time of inspection. The service does not include:",
      items: ["Destructive testing", "Engineering analysis", "Specialist investigations", "Laboratory testing", "Concealed components"],
      outro: "Additional specialist evaluations may be recommended where necessary.",
    },
    whyChooseHINL: [
      "Your home is one of your most valuable assets.",
      "HINL's Home Health Check helps you understand its condition, identify emerging issues, and make informed maintenance decisions before problems become expensive repairs.",
      "Through independent inspections and objective reporting, we help homeowners protect their properties, improve safety, and extend the life of their buildings.",
      "Because a healthier home is a safer home.",
    ],
    cta: { headline: "Don't Wait for a Problem to Become a Repair.", tagline: "Inspect Before You Invest." },
  },

  /* ─── FOR DEVELOPERS & BUILDERS ─── */
  {
    slug: "foundation-stage-inspection",
    name: "HINL Foundation Stage Inspection",
    tagline: "Get the Foundation Right From the Start",
    price: "From ₦350,000",
    badge: "Phase 1",
    description:
      "An independent inspection conducted before concrete placement and critical foundation works are completed. Verifies site preparation, excavation, reinforcement installation, dimensions, and foundation readiness.",
    features: [
      "Site preparation & excavation assessment",
      "Foundation layout verification",
      "Reinforcement inspection (placement, spacing, continuity)",
      "Concrete readiness assessment",
      "Structural observations & material verification",
      "Defect identification before concrete placement",
      "Foundation Stage Inspection Report with photographs",
    ],
    bestFor: [
      "Homeowners building new homes",
      "Property developers reducing construction risk",
      "Diaspora clients building remotely",
      "Investors & banks protecting capital",
    ],
    icon: "foundation",
    summary:
      "A Foundation Stage Inspection is an independent inspection conducted before concrete placement and critical foundation works are completed. The inspection helps verify site preparation, excavation, reinforcement installation, dimensions, and foundation readiness before permanent structural work proceeds.",
    overview: [
      "The foundation is one of the most important components of any building.",
      "Mistakes made at foundation level can be difficult, expensive, and sometimes impossible to correct after construction progresses. Unfortunately, many foundation defects become permanently hidden beneath concrete, making early verification essential.",
      "The HINL Foundation Stage Inspection (FSI) is designed to provide independent quality verification before concrete placement and critical foundation works are completed.",
      "Our inspectors assess visible aspects of foundation preparation, reinforcement installation, dimensions, workmanship, and construction readiness to help identify concerns before they become permanent structural issues.",
      "The objective is simple: identify defects while they can still be corrected.",
      "Because once concrete is placed, opportunities for correction become significantly more limited and costly.",
    ],
    whyItMatters: {
      issues: [
        "Inadequate excavation",
        "Improper reinforcement placement",
        "Poor foundation dimensions",
        "Insufficient concrete cover",
        "Poor workmanship",
        "Drainage concerns",
        "Foundation alignment issues",
        "Non-compliance with approved drawings",
        "Unsuitable site preparation",
      ],
      outro:
        "Identifying these issues before concrete placement helps reduce structural risks, improve construction quality, and prevent expensive remedial work later in the project. The earlier a defect is identified, the easier and less expensive it is to correct.",
    },
    whatsIncluded: [
      {
        title: "Site Preparation Assessment",
        intro: "Inspection of:",
        items: ["Site conditions", "Excavation quality", "Foundation trenches", "Foundation preparation works", "Drainage considerations"],
      },
      {
        title: "Foundation Layout Verification",
        intro: "Assessment of:",
        items: ["Foundation positioning", "General dimensions", "Alignment observations", "Layout consistency with available drawings"],
      },
      {
        title: "Reinforcement Inspection",
        intro: "Inspection of:",
        items: ["Reinforcement placement", "Reinforcement spacing", "Reinforcement support arrangements", "Reinforcement continuity", "General installation quality"],
      },
      {
        title: "Concrete Readiness Assessment",
        intro: "Evaluation of:",
        items: ["Foundation readiness prior to concrete placement", "Formwork observations", "Access and placement considerations", "General workmanship"],
      },
      { title: "Structural Observations", intro: "Inspection of visible foundation-related structural elements and construction practices." },
      {
        title: "Material Verification",
        intro: "Where applicable:",
        items: ["Reinforcement observations", "Material condition observations", "Construction material quality concerns"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and documentation of:",
        items: ["Installation deficiencies", "Workmanship concerns", "Structural observations", "Foundation preparation issues", "Corrective actions required before concrete placement"],
      },
    ],
    whoIsItFor: [
      { type: "Homeowners Building New Homes", desc: "Verify foundation quality before permanent construction proceeds." },
      { type: "Property Developers", desc: "Reduce construction risk and improve project quality." },
      { type: "Banks & Mortgage Institutions", desc: "Gain additional confidence regarding foundation construction quality." },
      { type: "Investors", desc: "Protect capital through independent construction verification." },
      { type: "Diaspora Clients", desc: "Receive independent oversight while building remotely." },
      { type: "Project Stakeholders", desc: "Improve transparency and accountability during early-stage construction." },
    ],
    whatYouReceive: [
      {
        title: "Foundation Stage Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Inspection findings", "Photographs", "Reinforcement observations", "Workmanship observations", "Construction concerns", "Recommended corrective actions"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Photographic Documentation", intro: "Photographs supporting all major observations and findings." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommended actions before concrete placement proceeds." },
    ],
    limitations: {
      intro: "The Foundation Stage Inspection is conducted based on site conditions visible and accessible at the time of inspection. The service does not include:",
      items: ["Structural engineering design review", "Geotechnical investigations", "Laboratory testing", "Destructive testing", "Statutory approvals"],
      outro: "Inspection findings are limited to conditions observed during the inspection visit.",
    },
    whyChooseHINL: [
      "HINL helps clients verify construction quality before critical structural elements become permanently concealed.",
      "Our Foundation Stage Inspection provides independent oversight at one of the most important stages of the building process, helping identify issues before they become embedded within the structure.",
      "Because every successful building starts with a solid foundation.",
    ],
    cta: { headline: "Verify Before You Pour.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "pre-cover-compliance",
    name: "HINL Pre-Cover Inspection",
    tagline: "Verify Before It Is Hidden",
    price: "From ₦400,000",
    badge: "Phase 2",
    description:
      "An independent inspection conducted before walls, ceilings, floors, and service installations are covered or concealed. Identifies workmanship deficiencies, installation defects, and quality concerns while corrective action remains practical.",
    features: [
      "Structural elements inspection (columns, beams, slabs)",
      "Electrical & plumbing rough-in verification",
      "Mechanical installations assessment",
      "Building envelope & waterproofing check",
      "Workmanship verification before concealment",
      "Defect identification & corrective action report",
      "Photographic documentation of all findings",
    ],
    bestFor: [
      "Homeowners building before walls are plastered",
      "Property developers reducing hidden defects",
      "Banks & investors protecting construction capital",
      "Diaspora clients monitoring remotely",
    ],
    icon: "layers",
    summary:
      "A Pre-Cover Inspection is an independent inspection conducted before walls, ceilings, floors, and service installations are covered or concealed. The inspection helps identify workmanship deficiencies, installation defects, and quality concerns while corrective action remains practical and cost-effective.",
    overview: [
      "Many of the most expensive building defects are hidden behind finishes.",
      "Once walls are plastered, ceilings installed, floors completed, and services concealed, identifying and correcting defects becomes significantly more difficult, disruptive, and costly.",
      "The HINL Pre-Cover Inspection (PCC) is designed to assess critical building elements before they become permanently hidden from view.",
      "Our inspectors evaluate visible construction works, service installations, structural elements, and workmanship quality to help ensure that defects are identified before construction progresses to the next stage.",
      "This inspection represents one of the most valuable opportunities to verify construction quality because hidden defects are often easier to correct before concealment.",
    ],
    whyItMatters: {
      issues: [
        "Demolition of finished works",
        "Costly rework",
        "Construction delays",
        "Water leaks",
        "Electrical failures",
        "Structural concerns",
        "Service installation defects",
        "Occupancy disruptions",
      ],
      benefits: [
        "Identify defects before concealment",
        "Verify workmanship quality",
        "Reduce future repair costs",
        "Improve construction quality",
        "Improve project accountability",
        "Support quality-focused construction practices",
        "Reduce post-completion defects",
      ],
      outro: "Correcting a defect before it is covered is often far easier and less expensive than correcting it after completion.",
    },
    whatsIncluded: [
      {
        title: "Structural Elements",
        intro: "Inspection of visible structural components including:",
        items: ["Columns", "Beams", "Suspended slabs", "Reinforcement observations", "Structural workmanship", "Structural openings and penetrations"],
      },
      {
        title: "Electrical Installations",
        intro: "Inspection of visible electrical rough-ins including:",
        items: ["Conduit installations", "Cable routing", "Electrical boxes", "Distribution provisions", "Service penetrations", "General installation quality"],
      },
      {
        title: "Plumbing Installations",
        intro: "Inspection of:",
        items: ["Water supply piping", "Drainage systems", "Waste piping", "Venting provisions", "Pipe routing", "Plumbing workmanship"],
      },
      {
        title: "Mechanical Installations",
        intro: "Assessment of visible mechanical and HVAC installations including:",
        items: ["Air-conditioning provisions", "Condensate routing", "Ventilation provisions", "Service penetrations", "Installation quality"],
      },
      {
        title: "Building Envelope",
        intro: "Inspection of:",
        items: ["External wall construction", "Waterproofing provisions", "Openings and penetrations", "Weather protection measures"],
      },
      {
        title: "Workmanship Verification",
        intro: "Assessment of:",
        items: ["Construction quality", "Installation standards", "Service coordination", "General workmanship observations"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and documentation of:",
        items: ["Installation deficiencies", "Poor workmanship", "Service conflicts", "Incomplete works", "Quality concerns", "Corrective actions required prior to concealment"],
      },
    ],
    whoIsItFor: [
      { type: "Homeowners Building New Homes", desc: "Verify construction quality before walls and ceilings are completed." },
      { type: "Property Developers", desc: "Improve project quality and reduce hidden defects." },
      { type: "Banks & Mortgage Institutions", desc: "Obtain additional confidence regarding project quality and construction progress." },
      { type: "Investors", desc: "Protect capital by verifying critical construction works before concealment." },
      { type: "Diaspora Clients", desc: "Maintain visibility and confidence while building remotely." },
      { type: "Project Stakeholders", desc: "Improve transparency and accountability during construction." },
    ],
    whatYouReceive: [
      {
        title: "Pre-Cover Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Inspection findings", "Defect photographs", "Installation observations", "Workmanship concerns", "Quality observations", "Recommended corrective actions"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Photographic Documentation", intro: "Clear photographic evidence of visible conditions before concealment." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommended corrective actions before works proceed." },
    ],
    limitations: {
      intro: "The Pre-Cover Inspection is limited to conditions visible and accessible at the time of inspection. The service does not include:",
      items: ["Engineering design review", "Laboratory testing", "Destructive testing", "Statutory approvals", "Contractor supervision"],
      outro: "Inspection findings are based solely on observable conditions at the time of inspection.",
    },
    whyChooseHINL: [
      "HINL helps property owners, developers, and investors identify hidden risks before they become hidden defects.",
      "Our Pre-Cover Inspection provides independent verification at one of the most critical stages of construction, helping ensure that workmanship, installations, and construction quality can be assessed before they disappear behind finished surfaces.",
      "Because once it is covered, verification becomes significantly more difficult.",
    ],
    cta: { headline: "Verify Before It Is Hidden.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "construction-control",
    name: "Construction Control Inspections",
    tagline: "Building Quality Verified at Every Stage",
    price: "From 1% of Project Cost",
    priceNote: "or from ₦500,000 / month",
    description:
      "An independent quality verification and material testing service designed to monitor workmanship, construction quality, materials, and critical building components throughout the construction process.",
    features: [
      "Scheduled stage inspections (foundation through finishing)",
      "Workmanship and quality verification at each stage",
      "Material testing — Schmidt Hammer, moisture, alignment",
      "Building envelope & MEP installations review",
      "Finishes & workmanship assessment",
      "Defect identification before concealment",
      "Construction Control Inspection Report after every visit",
    ],
    bestFor: [
      "Property developers improving project quality",
      "Homeowners building new homes",
      "Diaspora investors building remotely",
      "Banks & investors protecting construction capital",
    ],
    icon: "engineering",
    phases: [
      {
        name: "Core Control",
        price: "From 1% of project cost or ₦500,000/month",
        features: [
          "Best for individual home builders and medium-scale projects",
          "Scheduled stage inspections and compliance checks",
          "Photo and written reports",
        ],
      },
      {
        name: "Premium Control",
        price: "From 2% of project cost or ₦750,000/month",
        features: [
          "Best for diaspora investors and high-value builds",
          "Full end-to-end monitoring with frequent site visits",
          "Comprehensive material testing and real-time advisory",
        ],
      },
    ],
    summary:
      "A Construction Control Inspection is an independent quality verification and material testing service designed to monitor workmanship, construction quality, materials, and critical building components throughout the construction process.",
    overview: [
      "The quality of a building is determined long before it is occupied.",
      "Many of the most expensive and difficult-to-correct defects originate during construction and often become concealed behind finishes, ceilings, walls, and completed works. Once construction progresses, correcting these issues becomes significantly more expensive and disruptive.",
      "The HINL Construction Control Inspection (CCI) provides independent oversight throughout the construction process. Our inspectors conduct scheduled inspections at key project stages to verify workmanship, construction quality, material performance, and installation practices.",
      "Where applicable, field-based material testing may also be performed to provide additional insight into the quality and condition of construction materials and completed works.",
      "The objective is not to supervise construction or replace project consultants. Rather, it is to provide an independent layer of quality verification that helps ensure projects are built correctly from foundation to completion.",
    ],
    whyItMatters: {
      benefits: [
        "Improve construction quality",
        "Reduce rework costs",
        "Verify workmanship standards",
        "Assess material quality and performance",
        "Identify defects before concealment",
        "Improve project accountability",
        "Protect investments",
        "Support quality-focused developers",
        "Reduce post-completion defects and complaints",
      ],
      outro: "For many projects, the cost of correcting a defect during construction is only a fraction of the cost of correcting it after occupancy.",
    },
    whatsIncluded: [
      { title: "Construction Quality Verification", intro: "Assessment of workmanship quality across active construction works." },
      {
        title: "Structural Elements",
        intro: "Inspection of visible structural components including:",
        items: ["Foundations", "Columns", "Beams", "Suspended slabs", "Reinforcement installation", "Concrete placement observations", "Structural workmanship"],
      },
      {
        title: "Material Testing & Verification",
        intro: "Where applicable, field-based testing may include:",
        items: ["Schmidt Hammer concrete strength assessments", "Moisture testing", "Surface hardness evaluations", "Level and plumb verification", "Dimensional verification", "Alignment assessments", "Material quality observations"],
      },
      {
        title: "Building Envelope",
        intro: "Inspection of:",
        items: ["External walls", "Openings", "Waterproofing details", "Roof construction", "Drainage provisions", "Weather protection measures"],
      },
      {
        title: "Mechanical, Electrical & Plumbing Installations",
        intro: "Assessment of visible service installations including:",
        items: ["Electrical rough-ins", "Plumbing rough-ins", "Drainage systems", "Mechanical installations", "Service coordination"],
      },
      {
        title: "Finishes & Workmanship",
        intro: "Inspection of:",
        items: ["Plastering", "Screeding", "Tiling", "Ceiling installations", "Painting preparation", "Joinery installations", "General workmanship quality"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and documentation of:",
        items: ["Poor workmanship", "Construction deficiencies", "Material concerns", "Non-compliant installations", "Incomplete works", "Quality-related observations"],
      },
      { title: "Progress Verification", intro: "Documentation of project progress at the time of inspection." },
    ],
    whoIsItFor: [
      { type: "Property Developers", desc: "Improve project quality and reduce post-handover complaints." },
      { type: "Homeowners Building New Homes", desc: "Receive independent quality verification throughout construction." },
      { type: "Banks & Mortgage Institutions", desc: "Gain additional confidence regarding construction quality and project progress." },
      { type: "Investors", desc: "Protect capital by independently monitoring project quality and execution." },
      { type: "Diaspora Clients", desc: "Maintain visibility and confidence while building remotely." },
      { type: "Project Stakeholders", desc: "Improve transparency and accountability throughout project delivery." },
    ],
    whatYouReceive: [
      {
        title: "Construction Control Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Inspection findings", "Defect photographs", "Workmanship observations", "Material testing observations", "Quality concerns", "Recommended corrective actions", "Progress documentation"],
      },
      {
        title: "Material Testing Results (Where Applicable)",
        items: ["Schmidt Hammer test readings", "Moisture readings", "Alignment observations", "Level assessments", "Material quality observations"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Ongoing Project Records", intro: "Inspection reports create a documented quality history throughout the project lifecycle." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommendations with an HINL inspector." },
    ],
    limitations: {
      intro: "Construction Control Inspection is an independent quality verification service and does not replace:",
      items: ["Project management", "Site supervision", "Engineering design services", "Contractor quality control responsibilities", "Laboratory testing services", "Statutory approvals or certifications"],
      outro: "Inspections are based on conditions observed at the time of each site visit.",
    },
    whyChooseHINL: [
      "HINL helps property owners, developers, and investors build with greater confidence through independent construction quality verification and material testing.",
      "Our inspectors provide objective assessments that help identify issues before they become hidden, expensive, or difficult to correct. By combining workmanship evaluation, material verification, and professional reporting, we help improve accountability, reduce risk, and support better building outcomes.",
      "Because quality should not be assumed—it should be verified.",
    ],
    cta: { headline: "Build with Confidence. Verify Every Stage.", tagline: "Inspect Before You Invest." },
  },

  /* ─── FOR INVESTORS & PROPERTY MANAGERS ─── */
  {
    slug: "commercial-inspection",
    name: "HINL Commercial Inspection",
    tagline: "Protect Your Commercial Property Investment",
    price: "On Demand",
    description:
      "An independent assessment of the condition, safety, functionality, and maintenance needs of commercial properties. Helps owners, investors, lenders, facility managers, and tenants identify defects, operational risks, and capital expenditure concerns.",
    features: [
      "Full structural, roofing & envelope assessment",
      "Electrical, plumbing & HVAC systems review",
      "Fire & life safety inspection",
      "Interior areas & general maintenance assessment",
      "Site & external areas inspection",
      "Building condition report with defect classification",
      "Professional consultation with your HINL inspector",
    ],
    bestFor: [
      "Commercial property buyers before acquisition",
      "Investors & lenders performing due diligence",
      "Corporate tenants before signing a lease",
      "Facility managers improving maintenance planning",
    ],
    icon: "business",
    summary:
      "A Commercial Inspection is an independent assessment of the condition, safety, functionality, and maintenance needs of commercial properties. It helps property owners, investors, lenders, facility managers, and tenants identify defects, operational risks, and capital expenditure concerns before purchase, lease, financing, or occupancy.",
    overview: [
      "Commercial properties are significant investments that require informed decision-making and ongoing risk management.",
      "Whether acquiring an office building, warehouse, hotel, retail space, school, hospital, industrial facility, or mixed-use development, understanding the property's true condition is critical to protecting both operational continuity and financial performance.",
      "The HINL Commercial Inspection provides a comprehensive assessment of visible building systems, components, and conditions to help stakeholders identify defects, maintenance concerns, safety issues, and deferred maintenance obligations.",
      "Our inspections provide valuable insight into the condition of the property, allowing clients to make more informed decisions regarding acquisition, occupancy, financing, maintenance, and asset management.",
    ],
    whyItMatters: {
      issues: [
        "Unexpected repair costs",
        "Business interruptions",
        "Safety concerns",
        "Tenant dissatisfaction",
        "Increased maintenance expenses",
        "Reduced asset value",
        "Regulatory concerns",
        "Capital expenditure surprises",
      ],
      benefits: [
        "Identify defects and deficiencies",
        "Assess building condition",
        "Improve investment decisions",
        "Support due diligence activities",
        "Improve maintenance planning",
        "Reduce operational risks",
        "Protect property value",
        "Improve occupant safety",
      ],
      outro: "Understanding a property's condition before committing to a purchase, lease, or investment can significantly reduce future uncertainty.",
    },
    whatsIncluded: [
      {
        title: "Site & External Areas",
        intro: "Inspection of:",
        items: ["Site grading and drainage", "Parking areas", "Access roads", "Walkways", "External structures", "Perimeter conditions"],
      },
      {
        title: "Structure",
        intro: "Inspection of visible:",
        items: ["Foundations", "Columns", "Beams", "Slabs", "Walls", "Structural cracking", "Settlement indicators"],
      },
      {
        title: "Roofing Systems",
        intro: "Assessment of:",
        items: ["Roof coverings", "Drainage systems", "Flashings", "Roof penetrations", "Signs of deterioration", "Water intrusion concerns"],
      },
      {
        title: "Building Envelope",
        intro: "Inspection of:",
        items: ["External walls", "Doors and windows", "Glazing systems", "Waterproofing observations", "Weatherproofing conditions"],
      },
      {
        title: "Electrical Systems",
        intro: "Assessment of:",
        items: ["Distribution boards", "Switchgear", "Circuit protection devices", "Lighting systems", "Visible wiring installations", "Earthing observations", "Electrical safety concerns"],
      },
      {
        title: "Plumbing Systems",
        intro: "Inspection of:",
        items: ["Water supply systems", "Drainage systems", "Plumbing fixtures", "Water storage systems", "Visible leaks and deficiencies"],
      },
      {
        title: "HVAC & Mechanical Systems",
        intro: "Assessment of:",
        items: ["Air-conditioning systems", "Ventilation systems", "Mechanical equipment", "Condensate drainage", "General operational observations"],
      },
      {
        title: "Fire & Life Safety",
        intro: "Inspection of visible:",
        items: ["Fire extinguishers", "Emergency exits", "Escape routes", "Emergency lighting", "General life safety provisions"],
      },
      {
        title: "Interior Areas",
        intro: "Inspection of:",
        items: ["Floors", "Walls", "Ceilings", "Doors", "Finishes", "General building condition"],
      },
      {
        title: "General Maintenance Assessment",
        intro: "Identification of:",
        items: ["Deferred maintenance", "Building deficiencies", "Aging systems", "Repair priorities", "Capital improvement considerations"],
      },
    ],
    whoIsItFor: [
      { type: "Commercial Property Buyers", desc: "Understand the condition of a property before acquisition." },
      { type: "Investors", desc: "Protect capital and improve investment decisions." },
      { type: "Banks & Financial Institutions", desc: "Support property financing and risk assessment activities." },
      { type: "Facility Managers", desc: "Improve maintenance planning and operational efficiency." },
      { type: "Property Owners", desc: "Understand asset condition and maintenance requirements." },
      { type: "Commercial Tenants", desc: "Gain insight into the condition of leased premises before occupancy." },
      { type: "Hotels, Schools & Institutions", desc: "Assess building condition and operational risks." },
    ],
    whatYouReceive: [
      {
        title: "Commercial Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Detailed findings", "Defect descriptions", "Supporting photographs", "Building condition observations", "Safety concerns", "Maintenance recommendations"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Property Condition Summary", intro: "A high-level overview of major concerns and priority items requiring attention." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommendations with an HINL inspector." },
    ],
    limitations: {
      intro: "The Commercial Inspection is a non-invasive visual inspection of readily accessible systems and components at the time of inspection. The service does not include:",
      items: ["Engineering design review", "Destructive testing", "Laboratory testing", "Specialist equipment testing", "Environmental assessments", "Regulatory compliance certification"],
      outro: "Additional specialist evaluations may be recommended where necessary.",
    },
    whyChooseHINL: [
      "Commercial property decisions involve significant financial commitments and long-term responsibilities.",
      "HINL provides independent inspections and objective reporting that help stakeholders better understand building condition, identify risks, and make informed decisions regarding acquisition, occupancy, maintenance, and investment.",
      "Because commercial success begins with a clear understanding of the asset.",
    ],
    cta: { headline: "Understand the Asset Before You Commit.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "global-property-monitoring",
    name: "HINL Global Property Monitoring",
    tagline: "Independent Oversight When You Cannot Be There",
    price: "On Demand",
    description:
      "A property oversight, document verification, and reporting service designed for diaspora clients, investors, absentee property owners, and organizations with assets in Nigeria.",
    features: [
      "Periodic property condition assessments",
      "Construction progress monitoring",
      "Property maintenance checks",
      "Security & occupancy observations",
      "Document verification support",
      "Photographic documentation & defect identification",
      "Property Monitoring Report after every visit",
    ],
    bestFor: [
      "Diaspora homeowners with properties in Nigeria",
      "Diaspora buyers doing remote due diligence",
      "Investors managing Nigerian property portfolios",
      "Families managing shared property assets",
    ],
    icon: "public",
    summary:
      "Global Property Monitoring is a property oversight, document verification, and reporting service designed for diaspora clients, investors, absentee property owners, and organizations with assets in Nigeria.",
    overview: [
      "Owning, building, or investing in property in Nigeria while living abroad can be challenging.",
      "Many diaspora property owners face concerns about construction quality, project progress, property condition, maintenance, security, and the authenticity of documents associated with their investments.",
      "Without regular oversight and reliable information, minor concerns can become major financial, operational, or legal problems.",
      "The HINL Global Property Monitoring Service provides independent property oversight for clients who cannot be physically present to monitor their assets.",
      "Through scheduled site visits, condition assessments, construction progress reviews, document verification support, and professional reporting, we help clients maintain visibility, improve accountability, and protect their investments.",
      "Whether you own a home, apartment, commercial property, development project, or family estate, our objective is to serve as your independent eyes and ears on the ground.",
    ],
    whyItMatters: {
      intro: "Distance often creates uncertainty. Many property owners abroad struggle with questions such as:",
      issues: [
        "Is my property being properly maintained?",
        "Is construction progressing as planned?",
        "Are contractors delivering quality work?",
        "Are there signs of defects or deterioration?",
        "Are repairs being completed correctly?",
        "Are the documents provided genuine and consistent?",
        "Has anything changed since my last visit?",
      ],
      benefits: [
        "Protect property investments",
        "Improve transparency",
        "Reduce uncertainty",
        "Verify construction progress",
        "Monitor property condition",
        "Support document verification",
        "Identify maintenance concerns early",
        "Improve accountability among contractors and service providers",
        "Provide peace of mind",
      ],
      outro: "Confidence comes from independent verification.",
    },
    whatsIncluded: [
      {
        title: "Property Condition Assessments",
        intro: "Periodic inspections of:",
        items: ["Residential properties", "Apartments", "Estates", "Commercial properties", "Development projects"],
      },
      {
        title: "Construction Progress Monitoring",
        intro: "Verification of:",
        items: ["Construction activities", "Project progress", "Workmanship observations", "Quality concerns", "Construction milestones", "General site conditions"],
      },
      {
        title: "Property Maintenance Checks",
        intro: "Assessment of:",
        items: ["Building condition", "Maintenance concerns", "Water damage", "Roof condition", "Signs of deterioration", "General property performance"],
      },
      {
        title: "Security & Occupancy Observations",
        intro: "Inspection of:",
        items: ["Property access points", "Security conditions", "Occupancy status", "Site activity", "Visible security concerns"],
      },
      {
        title: "Document Verification Support",
        intro: "Review and verification support for property-related documentation including:",
        items: ["Title documents", "Survey plans", "Building approvals", "Allocation documents", "Deeds and conveyance documents", "Construction drawings", "Contractor documentation", "Project records"],
      },
      {
        title: "Photographic Documentation",
        intro: "Comprehensive photographic records of:",
        items: ["Property condition", "Construction progress", "Defects", "Maintenance concerns", "Significant observations"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and reporting of:",
        items: ["Safety concerns", "Construction defects", "Maintenance deficiencies", "Water intrusion", "Damage observations", "Emerging risks"],
      },
      { title: "Custom Monitoring Requests", intro: "Monitoring activities may be tailored to specific client objectives and project requirements." },
    ],
    whoIsItFor: [
      { type: "Diaspora Homeowners", desc: "Monitor and protect properties in Nigeria while living abroad." },
      { type: "Diaspora Property Buyers", desc: "Receive independent verification of property condition and supporting documentation before purchase." },
      { type: "Property Investors", desc: "Conduct additional due diligence before investing in Nigerian real estate." },
      { type: "Families Managing Shared Assets", desc: "Receive independent reporting on family-owned properties." },
      { type: "Construction Project Owners", desc: "Track project progress and construction quality remotely." },
      { type: "Commercial Property Owners", desc: "Monitor asset condition, maintenance activities, and operational concerns." },
      { type: "Corporate Clients", desc: "Maintain oversight of staff housing and property assets." },
    ],
    whatYouReceive: [
      {
        title: "Property Monitoring Report",
        intro: "A professionally prepared report containing:",
        items: ["Current property condition", "Progress updates", "Defect observations", "Maintenance concerns", "Supporting photographs", "Recommendations where applicable"],
      },
      {
        title: "Document Verification Summary",
        intro: "A summary outlining:",
        items: ["Documents reviewed", "Observations made", "Missing information identified", "Verification findings", "Recommended next steps"],
      },
      { title: "Photographic Updates", intro: "Visual documentation supporting inspection findings and project updates." },
      {
        title: "Property Status Summary",
        intro: "A concise overview highlighting:",
        items: ["Condition changes", "Key observations", "Areas requiring attention", "Recommended actions"],
      },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommendations with an HINL inspector." },
    ],
    monitoringFrequency: ["Monthly", "Quarterly", "Biannually", "Annually", "At key construction milestones", "On-demand as required"],
    limitations: {
      intro: "Global Property Monitoring is an observation, verification support, and reporting service based on conditions visible and accessible at the time of inspection. The service does not constitute:",
      items: [
        "Property management services",
        "Contractor supervision",
        "Security services",
        "Engineering design services",
        "Legal advice",
        "Legal due diligence",
        "Title certification",
        "Land ownership determination",
        "Government approval certification",
        "Property valuation services",
      ],
      outro: "Clients may be referred to qualified legal practitioners, registered surveyors, valuers, or other specialists where additional verification is required.",
    },
    whyChooseHINL: [
      "HINL provides independent, objective, and professional property oversight that helps clients stay informed regardless of where they live.",
      "By combining property inspections, construction progress monitoring, document verification support, and professional reporting, we help diaspora clients reduce uncertainty, improve accountability, and make informed property decisions with confidence.",
      "When you cannot be there, HINL helps ensure that someone trustworthy is.",
    ],
    cta: { headline: "Stay Connected to Your Property—From Anywhere in the World.", tagline: "Inspect Before You Invest." },
  },

  /* ─── ADDITIONAL SERVICES ─── */
  {
    slug: "no-utility-inspection",
    name: "HINL No-Utility Inspection",
    tagline: "Valuable Property Insight Even Before Utilities Are Connected",
    price: "From ₦400,000",
    badge: "No Utilities",
    description:
      "A specialised inspection designed for newly completed or vacant properties where electricity, water, gas, or other utility services are not yet available for full operational testing.",
    features: [
      "Structural, roofing & external areas assessment",
      "Interior finishes & workmanship inspection",
      "Visible electrical & plumbing installation check",
      "Safety & workmanship assessment",
      "Defect identification & documentation",
      "Inspection report with defect classification",
    ],
    bestFor: [
      "Off-plan buyers taking possession before utilities are connected",
      "Newly completed properties awaiting utility connection",
      "Buyers who cannot wait for utility connection stage",
      "Diaspora clients unable to delay inspection",
    ],
    icon: "power_off",
    summary:
      "A No-Utility Inspection is a specialised inspection designed for newly completed or vacant properties where electricity, water, gas, or other utility services are not yet available for full operational testing. The inspection focuses on construction quality, workmanship, visible defects, installation quality, safety observations, and occupancy readiness based on observable conditions at the time of inspection.",
    overview: [
      "Many newly completed properties in Nigeria are presented for handover before utility services become fully operational.",
      "Electricity may not yet be connected. Water systems may not be commissioned. Gas installations may not be active. In some cases, occupancy has not yet begun.",
      "These conditions make traditional operational testing difficult or impossible.",
      "The HINL No-Utility Inspection (NUI) is specifically designed for these situations.",
      "Rather than postponing the inspection, our inspectors evaluate the quality of completed works, visible installations, workmanship, safety concerns, and occupancy readiness based on what can be independently verified at the time of inspection.",
      "The objective is simple: to provide valuable insight into the condition of a property even when utilities are unavailable.",
      "This enables buyers, investors, developers, lenders, and diaspora clients to make informed decisions without unnecessary delays.",
    ],
    whyItMatters: {
      intro: "Many clients assume an inspection cannot be performed until electricity, water, and gas services become operational. In reality, a significant number of construction defects and workmanship concerns can be identified without active utility connections. Common findings may include:",
      issues: [
        "Poor workmanship",
        "Incomplete works",
        "Damaged finishes",
        "Roofing deficiencies",
        "Drainage concerns",
        "Installation defects",
        "Safety hazards",
        "Structural concerns",
        "Water management issues",
        "Visible plumbing deficiencies",
        "Visible electrical deficiencies",
        "Poor quality installations",
      ],
      outro: "Waiting for utilities to become available may delay defect identification and reduce opportunities for corrective action before handover. A No-Utility Inspection helps identify concerns while responsibility remains with the contractor, developer, or seller.",
    },
    whatsIncluded: [
      {
        title: "Structural Assessment",
        intro: "Inspection of visible:",
        items: ["Foundations (where accessible)", "Columns", "Beams", "Walls", "Slabs", "Structural cracking observations", "Construction quality indicators"],
      },
      {
        title: "Roofing Assessment",
        intro: "Inspection of:",
        items: ["Roof coverings", "Flashings", "Gutters", "Downpipes", "Roof drainage systems", "Visible roof defects", "Water management provisions"],
      },
      {
        title: "Site & External Areas",
        intro: "Assessment of:",
        items: ["Site grading", "Surface drainage", "External paving", "Boundary walls", "Retaining structures", "External finishes", "General site conditions"],
      },
      {
        title: "Interior Assessment",
        intro: "Inspection of:",
        items: ["Floors", "Walls", "Ceilings", "Doors", "Windows", "Joinery", "Finishes", "General workmanship quality"],
      },
      {
        title: "Visible Electrical Assessment",
        intro: "Inspection of:",
        items: ["Distribution boards", "Electrical fixtures", "Switches", "Outlets", "Conduit installations", "Earthing provisions", "Installation quality observations"],
      },
      {
        title: "Visible Plumbing Assessment",
        intro: "Inspection of:",
        items: ["Plumbing fixtures", "Pipe installations", "Drainage provisions", "Water storage systems", "Visible plumbing workmanship", "Installation observations"],
      },
      {
        title: "Safety Assessment",
        intro: "Identification of:",
        items: ["Occupancy hazards", "Incomplete works", "Unsafe conditions", "Fall hazards", "Life safety concerns"],
      },
      {
        title: "Workmanship Assessment",
        intro: "Evaluation of:",
        items: ["Finishing quality", "Installation quality", "Construction workmanship", "Defective work", "General construction standards"],
      },
      {
        title: "Defect Identification",
        intro: "Identification and documentation of:",
        items: ["Construction defects", "Installation deficiencies", "Incomplete works", "Quality concerns", "Safety observations", "Corrective actions required"],
      },
    ],
    whoIsItFor: [
      { type: "Off-Plan Buyers", desc: "Inspect a newly completed property before taking possession, even when utilities are not yet connected." },
      { type: "Home Buyers", desc: "Gain independent insight into property condition without waiting for utility activation." },
      { type: "Property Investors", desc: "Assess construction quality and identify defects before committing to acquisition." },
      { type: "Diaspora Clients", desc: "Receive independent verification of property condition without unnecessary delays." },
      { type: "Developers", desc: "Verify handover readiness and workmanship quality before client delivery." },
      { type: "Banks & Lenders", desc: "Obtain independent condition assessment for financing decisions." },
    ],
    whatYouReceive: [
      {
        title: "No-Utility Inspection Report",
        intro: "A professionally prepared report containing:",
        items: ["Inspection findings", "Defect photographs", "Workmanship observations", "Safety observations", "Occupancy readiness assessment", "Recommended corrective actions"],
      },
      { title: "Defect Classification", intro: "Findings are categorized as: Unsafe · Correction Required · Monitor · Acceptable" },
      { title: "Photographic Documentation", intro: "Clear photographic evidence supporting all major findings and observations." },
      { title: "Professional Consultation", intro: "Opportunity to discuss findings and recommendations with an HINL inspector." },
    ],
    limitations: {
      intro: "The No-Utility Inspection is a non-invasive visual inspection of readily accessible systems and components at the time of inspection. The following cannot be performed where utilities are unavailable:",
      items: ["Operational electrical testing (where power is unavailable)", "Water flow and drainage testing (where water supply is unavailable)", "Gas system testing", "HVAC operational testing", "Full plumbing system assessment"],
      outro: "A follow-up Standard Home Inspection is recommended once utilities are connected and fully operational.",
    },
    whyChooseHINL: [
      "HINL provides professional inspections that deliver valuable insight regardless of a property's utility status.",
      "Our No-Utility Inspection is designed to help buyers, investors, and developers make informed decisions without unnecessary delays — inspecting what can be verified independently and clearly identifying what requires follow-up once utilities are available.",
      "Because waiting is not always an option — and valuable information should never be delayed.",
    ],
    cta: { headline: "Don't Let Missing Utilities Delay Your Decision.", tagline: "Inspect Before You Invest." },
  },

  {
    slug: "new-construction-inspection",
    name: "HINL New Construction Inspection",
    tagline: "Catch Defects Before They Are Buried",
    price: "From ₦250,000",
    description:
      "Inspect your construction at the critical stages where defects are hidden by the next phase of work. Available as Phase 1 (foundation/pre-cast) or Phase 2 (pre-coverage).",
    features: [
      "Foundation Inspection (Phase 1 — Pre-Cast)",
      "Pre-Coverage Inspection (Phase 2)",
      "Material quality observations",
      "Written phase report with prioritised findings",
    ],
    phases: [
      {
        name: "Phase 1: Foundation (Per-Cast)",
        price: "From ₦350,000",
        features: [
          "Foundation level and alignment check",
          "Rebar layout and shuttering inspection",
          "Pre-pour concrete quality audit",
        ],
      },
      {
        name: "Phase 2: Pre-Coverage",
        price: "From ₦400,000",
        features: [
          "Pre-coverage structural verification",
          "Plumbing and electrical rough-in inspection",
          "Wall and slab quality check before plastering",
        ],
      },
    ],
    bestFor: [
      "Self-build project owners",
      "Diaspora Nigerians building remotely",
      "Anyone who wants quality verified before concrete covers it",
    ],
    icon: "foundation",
  },

  {
    slug: "thermal-inspection",
    name: "HINL Thermal Inspection",
    tagline: "See What the Human Eye Cannot",
    price: "From ₦150,000",
    priceNote: "Available as a standalone add-on to any HINL inspection",
    description:
      "Using professional-grade thermal cameras, we detect hidden moisture intrusion, heat anomalies, electrical hot spots, and insulation failures invisible to the naked eye.",
    features: [
      "Full-building thermal imaging scan",
      "Detection of hidden moisture and water ingress",
      "Electrical panel and wiring hot spot identification",
      "Insulation failure and thermal bridge mapping",
      "Annotated thermal image report",
    ],
    bestFor: [
      "Properties with suspected water ingress or damp",
      "Older buildings with potential electrical issues",
      "Any property requiring a deeper-than-visual audit",
    ],
    icon: "thermostat",
  },

  {
    slug: "zip-level-inspection",
    name: "HINL Zip Level Inspection",
    tagline: "Millimetre-Precision Foundation Measurement",
    price: "Included in Standard",
    priceNote: "Available as standalone on request",
    description:
      "Using the Zip Level Pro 2000, we measure differential settlement across your slab to detect hidden foundation movement with sub-millimetre accuracy.",
    features: [
      "Foundation differential settlement mapping",
      "Sub-millimetre precision measurements",
      "Slab tilt and elevation profile generation",
      "Industry tolerance threshold comparison",
      "Detailed elevation map and settlement report",
    ],
    bestFor: [
      "Older properties with suspected foundation settlement",
      "Properties showing door and window alignment issues",
      "Post-purchase audits for complete peace of mind",
    ],
    icon: "straighten",
  },

  {
    slug: "virtual-reality-inspection",
    name: "HINL Virtual Reality Inspection",
    tagline: "Walk Your Property From Anywhere in the World",
    price: "On Demand",
    badge: "PropTech",
    description:
      "Our VR inspection service creates a fully immersive 3D walkthrough of your property, perfect for diaspora buyers evaluating and inspecting remotely.",
    features: [
      "Full-property 3D scanning and VR capture",
      "Immersive VR walkthrough accessible on any device",
      "Defect annotations embedded within the VR environment",
      "Integration with full HINL inspection report",
      "Accessible to your solicitor, architect, or advisor",
    ],
    bestFor: [
      "Diaspora Nigerians buying property remotely",
      "Investors managing multiple properties",
      "Any buyer who cannot attend the inspection in person",
    ],
    icon: "vrpano",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
