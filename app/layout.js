import "./globals.css";

export const metadata = {
  title: "Rosary Makers Of America",
  applicationName: "Rosary Makers Of America",
  description: "Make rosaries and to strive to pray",
  keywords: [
    "NGO",
    "Rosary",
    "help",
    "services",
    "pray",
    "praying",
    "holy rosary",
    "needy",
    "helping",
    "contributing",
  ],
  openGraph: {
    title: "Rosary Makers: Make rosaries and to strive to pray",
    description: "Enjoying the Dignity of Honest Human Labor in Rosary Making",
    url: "https://rosarymakersoa.org/",
    siteName: "rosarymakersoa",
    images: [
      {
        url: "https://rosarymakersoa.org/images/home.png",
        width: 1200,
        height: 630,
        alt: "Emilist Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosary Makers of America: Make rosaries and to strive to pray",
    description: "Make rosaries and to strive to pray",
    images: ["https://rosarymakersoa.org/images/home.png"],
  },
  alternates: {
    canonical: "https://rosarymakersoa.org/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
