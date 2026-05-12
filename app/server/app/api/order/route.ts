import { connectMongo } from "../../../lib/mongodb";
import { Product } from "../../../models/Product";

// 简单下单：扣减库存
export async function POST(req: Request) {
  try {
    const { productId, quantity = 1 } = await req.json();

    if (!productId) {
      return Response.json({ ok: false, message: "缺少 productId" }, { status: 400 });
    }

    await connectMongo();

    const product = await Product.findById(productId);
    if (!product) {
      return Response.json({ ok: false, message: "商品不存在" }, { status: 404 });
    }

    if (product.stock < quantity) {
      return Response.json({ ok: false, message: "库存不足" }, { status: 400 });
    }

    product.stock -= quantity;
    await product.save();

    return Response.json({ ok: true, product });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}
