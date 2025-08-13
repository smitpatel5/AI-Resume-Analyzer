import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Disable SSR for Vercel deployment - works better as SPA
  ssr: false,
} satisfies Config;
