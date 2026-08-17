import { type FloodZoneResult } from "./types";
import { HIGH_RISK_ZONES, MODERATE_RISK_ZONES } from "./constants";

export function classifyZone(rawZone: string): Omit<FloodZoneResult, "dfirmId" | "panelNumber" | "staticBfe"> {
  const normalized = rawZone?.trim().toUpperCase() || "";

  if (HIGH_RISK_ZONES.includes(normalized) || normalized.startsWith("A")) {
    return {
      zone: normalized || "A",
      sfha: true,
      label: "High-Risk Flood Zone",
      description:
        "This property is in a Special Flood Hazard Area (SFHA). FEMA flood maps show this area has at least a 1% annual chance of flooding — commonly called the 100-year floodplain. Federal law requires flood insurance for properties with federally-backed mortgages in this zone.",
      insuranceRequired: true,
      rawZone: rawZone,
    };
  }

  if (normalized.startsWith("V") || normalized === "VE") {
    return {
      zone: normalized || "V",
      sfha: true,
      label: "High-Risk Coastal Flood Zone",
      description:
        "This property is in a coastal high-risk area subject to wave action and storm surge. Flood insurance is federally required for all federally-backed mortgages. Coastal zones carry the highest flood risk and insurance premiums.",
      insuranceRequired: true,
      rawZone: rawZone,
    };
  }

  if (MODERATE_RISK_ZONES.includes(normalized) || normalized.includes("X") && normalized.includes("SHAD")) {
    return {
      zone: normalized || "X (shaded)",
      sfha: false,
      label: "Moderate-Risk Flood Zone",
      description:
        "This property is in a moderate-risk area with a 0.2% annual chance of flooding (the 500-year floodplain). Flood insurance is not federally mandated but is strongly recommended — about 25% of all flood claims come from moderate- and low-risk zones.",
      insuranceRequired: false,
      rawZone: rawZone,
    };
  }

  if (normalized === "C" || normalized === "X" || normalized.startsWith("D")) {
    return {
      zone: normalized || "X",
      sfha: false,
      label: "Minimal-Risk Flood Zone",
      description:
        "This property is in a minimal-risk flood area with less than a 0.2% annual chance of flooding. Flood insurance is not federally required, but FEMA still recommends coverage — roughly 25% of flood claims come from outside high-risk zones.",
      insuranceRequired: false,
      rawZone: rawZone,
    };
  }

  return {
    zone: rawZone || "Unknown",
    sfha: false,
    label: "Flood Zone Data Unavailable",
    description:
      "FEMA does not have a standard flood zone designation for this area in the digital National Flood Hazard Layer. This may mean the area has not been studied, or the property falls outside the mapped floodplain. Confirm risk with your local floodplain administrator.",
    insuranceRequired: false,
    rawZone: rawZone,
  };
}

export function getZoneColor(zone: string): { bg: string; text: string; border: string } {
  const normalized = zone?.toUpperCase() || "";
  if (normalized.startsWith("A") || normalized.startsWith("V")) {
    return { bg: "bg-zone-high-bg", text: "text-zone-high", border: "border-zone-high" };
  }
  if (normalized.includes("X") && normalized.includes("SHAD")) {
    return { bg: "bg-zone-moderate-bg", text: "text-zone-moderate", border: "border-zone-moderate" };
  }
  return { bg: "bg-zone-low-bg", text: "text-zone-low", border: "border-zone-low" };
}
