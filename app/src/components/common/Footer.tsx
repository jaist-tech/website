import Image from "next/image";

import { withBasePath } from "@/lib/path";
import { ja } from "@/locales/ja";

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center justify-center gap-2 bg-violet-950 pt-8 pb-2">
      <a
        href="https://jaist.ac.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 text-sm transition-colors hover:text-cyan-500 hover:underline active:text-cyan-500 active:underline"
      >
        {ja.footer.jaistOfficial}
      </a>
      <Image
        src={withBasePath("images/logo_jaist.png")}
        alt="JAIST Logo"
        width={100}
        height={40}
        className="my-2 select-none"
      />
      <p className="select-none text-gray-100 text-xs">
        &copy; 2025-{new Date().getFullYear()} JAIST Tech Circle
      </p>
    </footer>
  );
};
