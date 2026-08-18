import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-07-29.dahlia",
    });
  }
  return _stripe;
}

interface StripePrices {
  monthlyPriceId: string;
  yearlyPriceId: string;
}

export async function getOrCreateStripePrices(): Promise<StripePrices> {
  const stripe = getStripe();

  // Search for existing product
  const products = await stripe.products.list({ limit: 100, active: true });
  let product = products.data.find((p) => p.name === "FloodZoneCheck Pro");

  if (!product) {
    product = await stripe.products.create({
      name: "FloodZoneCheck Pro",
      description:
        "Unlimited tracked properties, priority alerts, and downloadable PDF summaries for FEMA flood zone monitoring.",
    });
  }

  // Get existing prices for this product
  const existingPrices = await stripe.prices.list({
    product: product.id,
    active: true,
    limit: 100,
  });

  let monthlyPrice = existingPrices.data.find(
    (p) => p.recurring?.interval === "month" && p.unit_amount === 599
  );
  let yearlyPrice = existingPrices.data.find(
    (p) => p.recurring?.interval === "year" && p.unit_amount === 4900
  );

  if (!monthlyPrice) {
    monthlyPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: 599,
      currency: "usd",
      recurring: { interval: "month" },
    });
  }

  if (!yearlyPrice) {
    yearlyPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: 4900,
      currency: "usd",
      recurring: { interval: "year" },
    });
  }

  return {
    monthlyPriceId: monthlyPrice.id,
    yearlyPriceId: yearlyPrice.id,
  };
}
