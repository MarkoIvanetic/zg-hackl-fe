import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude paths that should not be redirected
  const excludedPaths = [
    "/otkrij",
    "/dogadanja",
    "/api",
    "/_next",
    "/favicon.ico",
  ];

  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect everything else to /dogadanja
  const url = request.nextUrl.clone();
  url.pathname = "/dogadanja";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*", // Matches all paths
};
