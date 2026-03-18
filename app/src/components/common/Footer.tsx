import Image from "next/image";
import { withBasePath } from "@/lib/path";

export const Footer = () => {
  return (
    <footer className="w-full mt-8 pt-8 pb-2 flex flex-col items-center justify-center gap-2 bg-violet-950">
      <a
        href="https://jaist.ac.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-100 hover:underline hover:text-cyan-500 transition-colors"
      >
        北陸先端科学技術大学院大学公式サイト
      </a>
      <Image
        src={withBasePath("images/logo_jaist.png")}
        alt="JAIST Logo"
        width={100}
        height={40}
        className="my-2"
      />
      <p className="text-xs text-gray-100 select-none">
        &copy; 2025-{new Date().getFullYear()} JAIST Tech Circle
      </p>
    </footer>
  );
};
