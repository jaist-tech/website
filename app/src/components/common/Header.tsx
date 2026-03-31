import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/path";

import { ja } from "@/locales/ja";

export const Headers = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-12 px-4 flex items-center bg-white shadow-md">
      <h1>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={withBasePath("images/logo_jaist-tech-circle.png")}
            alt="JAIST Tech Circle Logo"
            width={32}
            height={32}
          />
        </Link>
      </h1>
      <div className="ml-auto font-semibold">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-cyan-500 transition-colors"
              >
                🚀 {ja.projects.title}
              </Link>
            </li>
            <li>
              <Link
                href="/#news"
                className="text-gray-700 hover:text-cyan-500 transition-colors"
              >
                📰 {ja.top.news}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
