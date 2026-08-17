import { type FloodZoneResult } from "./types";
import { classifyZone } from "./zone-utils";

const NFHL_URL = "https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28/query";

export async function lookupFloodZone(lat: number, lng: number): Promise<FloodZoneResult> {
  const geometry = JSON.stringify({ x: lng, y: lat, spatialReference: { wkid: 4326 } });

  const params = new URLSearchParams({
    geometry,
    geometryType: "esriGeometryPoint",
    spatialRel: "esriSpatialRelIntersects",
    outFields: "FLD_ZONE,ZONE_SUBTY,SFHA_TF,STATIC_BFE,DFIRM_ID,DFIRM_AR_ID",
    returnGeometry: "false",
    f: "json",
  });

  const response = await fetch(`${NFHL_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`FEMA NFHL request failed: ${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`FEMA API error: ${data.error.message || "Unknown error"}`);
  }

  const features = data.features;

  if (!features || features.length === 0) {
    return {
      zone: "Not Mapped",
      sfha: false,
      staticBfe: null,
      dfirmId: null,
      panelNumber: null,
      label: "No FEMA Flood Data Available",
      description:
        "This address does not appear to be within FEMA's digitally mapped National Flood Hazard Layer. This may mean the area has not been restudied, or the property falls outside mapped floodplain boundaries. Contact your local floodplain administrator for more information.",
      insuranceRequired: false,
      rawZone: "Not Mapped",
    };
  }

  const attrs = features[0].attributes;
  const rawZone = attrs.FLD_ZONE || "";
  const classified = classifyZone(rawZone);

  return {
    ...classified,
    staticBfe: attrs.STATIC_BFE ?? null,
    dfirmId: attrs.DFIRM_ID || null,
    panelNumber: attrs.DFIRM_AR_ID || null,
  };
}
