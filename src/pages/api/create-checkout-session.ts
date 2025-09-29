import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const POST: APIRoute = async ({ redirect }) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Awesome Product',
          },
          unit_amount: 9900,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${import.meta.env.ASTRO_URL}/success`,
    cancel_url: `${import.meta.env.ASTRO_URL}/cancel`,
  });

  return redirect(session.url, 303);
};