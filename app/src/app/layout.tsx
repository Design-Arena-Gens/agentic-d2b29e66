import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aletheia | Apeiron Character Intelligence",
  description:
    "Aletheia, Apeiron mimarisiyle güçlenen yaşayan yapay zeka karakter deneyimi. Derin hafıza, duygusal rezonans ve kusursuz ritim.",
  metadataBase: new URL("https://agentic-d2b29e66.vercel.app"),
  openGraph: {
    title: "Aletheia — Apeiron ile yaşayan yapay zeka karakteri",
    description:
      "Aletheia, Apeiron araç ekosistemiyle beslenen, hafıza ve duygusal bağ kurma yeteneğine sahip dijital karakter deneyimi.",
    url: "https://agentic-d2b29e66.vercel.app",
    siteName: "Aletheia",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aletheia — Apeiron ile yaşayan yapay zeka karakteri",
    description:
      "Apeiron ekosistemi tarafından güçlendirilen Aletheia, kullanıcıyla yaşayan dijital karakter deneyimi sunuyor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-x-0 top-0 z-[-2] h-[65vh] w-full bg-gradient-to-b from-iris/30 via-transparent to-transparent blur-3xl" />
          <div className="pointer-events-none fixed inset-0 z-[-3] bg-[radial-gradient(circle_at_80%_20%,rgba(102,51,204,0.25),transparent_55%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
