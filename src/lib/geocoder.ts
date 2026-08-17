import { type GeocodeResult } from "./types";

const CENSUS_GEOCODER_URL = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress";

export async function geocodeAddress(address: string): Promise<GeocodeResult> {
  const params = new URLSearchParams({
    address,
    benchmark: "Public_AR_Current",
    format: "json",
  });

  const response = await fetch(`${CENSUS_GEOCODER_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Geocoding request failed: ${response.status}`);
  }

  const data = await response.json();
  const matches = data?.result?.addressMatches;

  if (!matches || matches.length === 0) {
    throw new Error("No matching address found. Please try a more specific address.");
  }

  const match = matches[0];
  const [lng, lat] = match.coordinates.x !== undefined
    ? [match.coordinates.x, match.coordinates.y]
    : [0, 0];

  return {
    lat,
    lng,
    address,
    matchedAddress: match.matchedAddress || address,
  };
}
