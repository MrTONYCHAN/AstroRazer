import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const orderId = data.orderId;

  if (typeof orderId !== 'string') {
    return new Response(JSON.stringify({ error: "Order ID is required" }), { status: 400 });
  }

  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log(`Simulating payment for order: ${orderId}`);

  // Return a success response
  return new Response(JSON.stringify({ orderId }), { status: 200 });
};
