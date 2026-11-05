import type { NextConfig } from "next";

/* "standalone" output is only for the sandbox / self-hosted server.
   On Netlify the official Next.js runtime owns the output, and a
   standalone build would break its serverless packaging. */
const isNetlify = process.env.NETLIFY === "true";

const nextConfig: NextConfig = {
  ...(isNetlify ? {} : { output: "standalone" as const }),
  /* Every image is a local, pre-optimized file in /public/images.
     Serving them un-optimized makes the images bullet-proof on any
     host (Netlify included) — nothing depends on a runtime image CDN,
     so photos can never "disappear" after deployment. */
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
