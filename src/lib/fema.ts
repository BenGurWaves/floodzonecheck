import { type FloodZoneResult } from "./types";
import { classifyZone } from "./zone-utils";

const NFHL_URL = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query";

const EMPTY_RESULT: FloodZoneResult = {
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

async function fetchNFHL(lat: number, lng: number, attempt = 0): Promise<Response> {
  const geometry = JSON.stringify({ x: lng, y: lat, spatialReference: { wkid: 4326 } });

  const params = new URLSearchParams({
    geometry,
    geometryType: "esriGeometryPoint",
    spatialRel: "esriSpatialRelIntersects",
    outFields: "FLD_ZONE,ZONE_SUBTY,SFHA_TF,STATIC_BFE,DFIRM_ID,FLD_AR_ID",
    returnGeometry: "false",
    f: "json",
  });

  const response = await fetch(`${NFHL_URL}?${params}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; FloodZoneCheck/1.0)",
      Accept: "application/json",
    },
  });

  if (!response.ok && attempt < 2) {
    await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    return fetchNFHL(lat, lng, attempt + 1);
  }

  return response;
}

export async function lookupFloodZone(lat: number, lng: number): Promise<FloodZoneResult> {
  try {
    const response = await fetchNFHL(lat, lng);

    if (!response.ok) {
      return EMPTY_RESULT;
    }

    const data = await response.json();

    if (data.error) {
      return EMPTY_RESULT;
    }

    const features = data.features;

    if (!features || features.length === 0) {
      return EMPTY_RESULT;
    }

    const attrs = features[0].attributes;
    const rawZone = attrs.FLD_ZONE || "";
    const classified = classifyZone(rawZone);

    return {
      ...classified,
      staticBfe: attrs.STATIC_BFE ?? null,
      dfirmId: attrs.DFIRM_ID || null,
      panelNumber: attrs.FLD_AR_ID || null,
    };
  } catch {
    return EMPTY_RESULT;
  }
}
