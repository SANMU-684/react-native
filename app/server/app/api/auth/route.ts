import { connectMongo } from "../../../lib/mongodb";
import { User } from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";

export async function POST(req: Request) {
  try {
    const { action, username, password } = await req.json();

    if (!action || !username || !password) {
      return Response.json({ ok: false, message: "缺少参数" }, { status: 400 });
    }

    await connectMongo();

    if (action === "register") {
      const exists = await User.findOne({ username });
      if (exists) {
        return Response.json({ ok: false, message: "用户名已存在" }, { status: 409 });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const user = await User.create({ username, passwordHash });

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
      return Response.json({ ok: true, token });
    }

    if (action === "login") {
      const user = await User.findOne({ username });
      if (!user) {
        return Response.json({ ok: false, message: "用户名或密码错误" }, { status: 401 });
      }

      const valid = await bcrypt.compare(password, user.passwordHash);
      if (!valid) {
        return Response.json({ ok: false, message: "用户名或密码错误" }, { status: 401 });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
      return Response.json({ ok: true, token });
    }

    return Response.json({ ok: false, message: "未知操作" }, { status: 400 });
  } catch (err: any) {
    return Response.json({ ok: false, message: err.message }, { status: 500 });
  }
}
