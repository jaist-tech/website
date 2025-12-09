import type { Metadata } from "next";
import { Headers } from "@/components/common/Header";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>
        <Headers />
        {children}
      </body>
    </html>
  );
}
