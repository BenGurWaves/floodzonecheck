export interface FloodZoneResult {
  zone: string;
  sfha: boolean;
  staticBfe: number | null;
  dfirmId: string | null;
  panelNumber: string | null;
  label: string;
  description: string;
  insuranceRequired: boolean;
  rawZone: string;
  matchedAddress?: string;
  lat?: number;
  lng?: number;
}

export interface GeocodeResult {
  lat: number;
  lng: number;
  address: string;
  matchedAddress: string;
}

export interface TrackedProperty {
  id: string;
  user_id: string;
  address_label: string;
  lat: number;
  lng: number;
  last_known_zone: string;
  last_checked: string;
  created_at: string;
}

export interface AlertEntry {
  id: string;
  tracked_property_id: string;
  sent_at: string;
  old_zone: string | null;
  new_zone: string | null;
}

export interface CachedZone {
  id: string;
  lat: number;
  lng: number;
  zone_data: FloodZoneResult;
  last_fetched: string;
}

export interface UserProfile {
  id: string;
  email: string;
  tier: string;
}
