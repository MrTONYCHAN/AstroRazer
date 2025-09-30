export async function POST(context) {
    try {
        const orderId = `order-${Date.now()}`;

        // Simulate creating an order
        console.log(`Simulating order creation with ID: ${orderId}`);

        return new Response(JSON.stringify({ orderId }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error creating order:', error);
        return new Response(JSON.stringify({ message: 'Error creating order' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
