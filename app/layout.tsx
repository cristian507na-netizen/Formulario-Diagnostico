import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "Diagnóstico Empresarial",
  description: "Diagnóstico estratégico de eficiencia y escalabilidad",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: "Diagnóstico Empresarial",
    description: "Diagnóstico estratégico de eficiencia y escalabilidad",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Diagnóstico Empresarial",
    description: "Diagnóstico estratégico de eficiencia y escalabilidad",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'rgba(15,20,35,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#f1f5f9',
              fontFamily: "'DM Sans', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
