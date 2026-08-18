import { NextRequest } from "next/server";
import { geocodeAddress } from "@/lib/geocoder";
import { lookupFloodZone } from "@/lib/fema";

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address || typeof address !== "string") {
      return Response.json({ error: "Please provide a valid address." }, { status: 400 });
    }

    const geocode = await geocodeAddress(address);
    const zoneResult = await lookupFloodZone(geocode.lat, geocode.lng);

    return Response.json({
      ...zoneResult,
      matchedAddress: geocode.matchedAddress,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred.";
    return Response.json({ error: message }, { status: 500 });
  }
}
