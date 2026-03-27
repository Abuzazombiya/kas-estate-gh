import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)", "/add-property(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (isAdminRoute(request)) {
    // auth.protect() handles redirect / 404 for unauthorized or unauthenticated requests.
    auth.protect();
  }

  // Continue with normal routing.
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!ion)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};