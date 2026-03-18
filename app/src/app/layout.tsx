import type { Metadata } from "next";
import { Headers } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { withBasePath } from "@/lib/path";

import { ja } from "@/locales/ja";

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
      <body className="min-h-screen flex flex-col">
        <Headers />
        <main className="flex-1 pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
