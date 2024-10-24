import type { NextRequest } from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";

export default function middleware(req: NextRequest) {
  const geo = geolocation(req);
  const ip = ipAddress(req);
  console.log("Geo:", geo);
  console.log("IP:", ip);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
