// proxy.ts - Middleware for Indonesian only
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  // Get pathname
  const pathname = request.nextUrl.pathname;

  // Redirect root to /id
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/id", request.url));
  }

  // If pathname doesn't start with /id, redirect to /id + pathname
  if (!pathname.startsWith("/id")) {
    return NextResponse.redirect(new URL(`/id${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
