import { Footer } from "@/components/common/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Headers } from "@/components/common/Header";
import { withBasePath } from "@/lib/path";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: withBasePath("images/logo_jaist-tech-circle.png"),
        type: "image/x-icon",
      },
    ],
  },
  title: "JAIST Tech サークル",
  description: "JAIST Tech サークルの公式サイトです！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col">
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
        <Headers />
        <main className="flex-1 pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
