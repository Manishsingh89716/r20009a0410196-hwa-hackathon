const orders = [];

export async function POST(req) {
  try {
    const body = await req.json();
    const { customer, items, total } = body;

    if (!customer || !customer.name || !customer.email || !customer.address) {
      return Response.json({ ok: false, error: "Missing customer details" }, { status: 400 });
    }
    if (!items || items.length === 0) {
      return Response.json({ ok: false, error: "Cart is empty" }, { status: 400 });
    }

    const order = {
      id: "PP-" + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      customer,
      items,
      total,
      status: "confirmed",
    };

    orders.push(order);

    return Response.json({ ok: true, orderId: order.id, order });
  } catch (err) {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ ok: true, count: orders.length, orders });
}
