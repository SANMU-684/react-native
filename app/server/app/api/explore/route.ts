import { connectMongo } from "../../../lib/mongodb";
import { Post } from "../../../models/Post";
import { exploreOnce } from "../../../services/exploreService";

// GET: 获取全部探索帖子
export async function GET() {
  try {
    await connectMongo();
    const posts = await Post.find().sort({ createdAt: -1 }).populate("authorId", "username").lean();
    return Response.json({ ok: true, posts });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}

// POST: 执行一次探索，生成一条 Post
export async function POST(req: Request) {
  try {
    await connectMongo();

    const { authorId } = await req.json();
    const drop = exploreOnce();

    const post = await Post.create({
      authorId,
      content: `探索获得：${drop.items.map((d) => `${d.name} x${d.quantity}`).join("，")}`,
    });

    return Response.json({ ok: true, post, drops: drop.items }, { status: 201 });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}
