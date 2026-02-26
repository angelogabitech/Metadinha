import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isLogged = request.cookies.get("auth");

  const isLoginPage = request.nextUrl.pathname.startsWith("/login");

  if (!isLogged && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLogged && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.\..).*)",
  ],
};