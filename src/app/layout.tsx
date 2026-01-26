import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fuel Haus TT | Fuel Your Body. Fire Your Life.",
  description: "Join the movement with Radha Edoo. Fitness, Nutrition, and Mindset coaching to ignite your transformation with The Fuel Haus TT.",
  keywords: ["Fitness", "Nutrition", "Mindset", "Coaching", "Radha Edoo", "The Fuel Haus TT", "Transformation"],
  openGraph: {
    title: "The Fuel Haus TT",
    description: "Fuel Your Body. Fire Your Life.",
    type: "website",
    locale: "en_US",
    siteName: "The Fuel Haus TT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
