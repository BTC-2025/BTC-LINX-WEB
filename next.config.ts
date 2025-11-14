import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // 🔥 Disable the bottom-left Next.js icon
  // 🔥 Disable "Compiling", "Rendering", build activity overlays
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
