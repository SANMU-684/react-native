import { connectMongo } from "../../../lib/mongodb";
import { Product } from "../../../models/Product";

export async function GET() {
  try {
    await connectMongo();
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    return Response.json({ ok: true, items: products });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectMongo();
    const product = await Product.create(body);
    return Response.json({ ok: true, product }, { status: 201 });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}
