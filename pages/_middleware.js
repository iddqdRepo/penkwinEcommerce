import { NextResponse } from "next/server";
import * as jose from "jose";
const secret = process.env.SECRET;

export default async function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.PenkwinJWT;

  const url = req.url;

  if (url.includes("/dashboard")) {
    console.log("Url contains dashboard");
    if (jwt === undefined) {
      console.log("jwt is undefined");
      return NextResponse.redirect("http://localhost:3000/login");
    }

    try {
      console.log("trying to verify jwt");
      const verifying = await jose
        .jwtVerify(jwt, new TextEncoder().encode(`${secret}`))
        .then(console.log("hey"));
      console.log("verifying", verifying);
      return NextResponse.next();
    } catch (error) {
      console.log("error", error);
      return NextResponse.redirect("http://localhost:3000/login");
    }
  }

  return NextResponse.next();
}
