import { NextRequest } from "next/server";
import { geocodeAddress } from "@/lib/geocoder";
import { lookupFloodZone } from "@/lib/fema";
import { createServerClient } from "@/lib/supabase-server";

const CACHE_TTL_DAYS = 30;

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address || typeof address !== "string") {
      return Response.json({ error: "Please provide a valid address." }, { status: 400 });
    }

    const geocode = await geocodeAddress(address);

    const roundedLat = Math.round(geocode.lat * 1000) / 1000;
    const roundedLng = Math.round(geocode.lng * 1000) / 1000;

    const supabase = createServerClient();

    const cacheCutoff = new Date();
    cacheCutoff.setDate(cacheCutoff.getDate() - CACHE_TTL_DAYS);

    const { data: cached } = await supabase
      .from("zone_cache")
      .select("zone_data, last_fetched")
      .eq("lat", roundedLat)
      .eq("lng", roundedLng)
      .gte("last_fetched", cacheCutoff.toISOString())
      .single();

    if (cached) {
      return Response.json({
        ...cached.zone_data,
        matchedAddress: geocode.matchedAddress,
        fromCache: true,
      });
    }

    const zoneResult = await lookupFloodZone(geocode.lat, geocode.lng);

    await supabase.from("zone_cache").upsert(
      {
        lat: roundedLat,
        lng: roundedLng,
        zone_data: zoneResult,
        last_fetched: new Date().toISOString(),
      },
      { onConflict: "lat,lng" }
    );

    return Response.json({
      ...zoneResult,
      matchedAddress: geocode.matchedAddress,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred.";
    return Response.json({ error: message }, { status: 500 });
  }
}
