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
  metadataBase: new URL('https://thefuelhaustt.com'),
  alternates: {
    canonical: '/',
  },
  title: "The Fuel Haus TT | Exclusive Women's Fitness Coaching",
  description: "Join the movement with Radha Edoo. Exclusive women's fitness, nutrition, and mindset coaching to ignite your transformation with The Fuel Haus TT.",
  keywords: ["Women's Fitness", "Female Personal Trainer", "Nutrition", "Mindset", "Coaching", "Radha Edoo", "Trinidad", "Transformation"],
  openGraph: {
    title: "The Fuel Haus TT | Women's Fitness Coaching",
    description: "Fuel Your Body. Fire Your Life. Exclusive Coaching for Women.",
    type: "website",
    locale: "en_US",
    siteName: "The Fuel Haus TT",
    images: [
      {
        url: '/radha.jpg',
        width: 800,
        height: 600,
        alt: 'Radha Edoo - The Fuel Haus TT',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "The Fuel Haus TT",
    "image": "https://thefuelhaustt.com/radha.jpg",
    "description": "Fitness, Nutrition, and Mindset coaching to ignite your transformation.",
    "founder": {
      "@type": "Person",
      "name": "Radha Edoo"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TT"
    },
    "url": "https://thefuelhaustt.com",
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
