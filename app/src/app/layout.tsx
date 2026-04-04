import { Footer } from "@/components/common/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Headers } from "@/components/common/Header";
import { withBasePath } from "@/lib/path";

import type { Metadata, Viewport } from "next";

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
  description:
    "北陸先端科学技術大学院大学公認の技術系サークル「JAIST Tech サークル」の公式サイト。アプリ開発、ハッカソン、AI、電子工作などを通して、楽しみながらスキルを磨けるコミュニティです。",
  openGraph: {
    title: "JAIST Tech サークル",
    description:
      "北陸先端科学技術大学院大学公認の技術系サークル「JAIST Tech サークル」の公式サイト。",
    images: [
      {
        url: "https://www.jaist.ac.jp/misc/circles/tech/ogp/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "活動の様子が描かれたイラスト",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ee82ee",
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
