import Image from "next/image";
import Link from "next/link";

import { withBasePath } from "@/lib/path";
import { ja } from "@/locales/ja";

export const Headers = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-12 w-full items-center bg-white px-4 shadow-md">
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
                className="text-gray-700 transition-colors hover:text-cyan-500"
              >
                🚀 {ja.projects.title}
              </Link>
            </li>
            <li>
              <Link
                href="/#news"
                className="text-gray-700 transition-colors hover:text-cyan-500"
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
