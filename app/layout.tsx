import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Grad Club — Il viaggio di laurea che ricorderai per sempre",
  description:
    "Esperienze esclusive per neolaureati nelle destinazioni più iconiche del Mediterraneo e oltre. Viaggi di gruppo curati nei minimi dettagli.",
  keywords: [
    "viaggio di laurea",
    "grad trip",
    "neolaureati",
    "viaggio gruppo",
    "Mykonos",
    "Ibiza",
    "Cancún",
    "The Grad Club",
  ],
  openGraph: {
    title: "The Grad Club — Il viaggio di laurea che ricorderai per sempre",
    description:
      "Esperienze esclusive per neolaureati nelle destinazioni più iconiche del Mediterraneo e oltre.",
    url: "https://thegradclub.it",
    siteName: "The Grad Club",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grad Club",
    description:
      "Il viaggio di laurea che ricorderai per sempre. Esperienze esclusive per neolaureati.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
