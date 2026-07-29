import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://ayodejiatanda.me");
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
