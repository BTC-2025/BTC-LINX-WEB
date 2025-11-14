import "../styles/index.css";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbtclinxe5052back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10"
          type="module"
          strategy="afterInteractive"
        />

        <Script
          src="https://static.rocket.new/rocket-shot.js?v=0.0.1"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
