import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function login(req, res) {
  const { username, password } = req.body;

  if (username === "ad" && password === "ad") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //30 days
        username: username,
      },
      secret
    );

    const serialised = serialize("PenkwinJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30, //when the cookie expires
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.status(200).json({ message: "Success" });
  } else {
    console.log("Username", username, "password", password);
    res.json({ message: "Invalid username or password" });
  }
}
