"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass glass-border backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[980px] items-center justify-between px-5 md:px-0">
        <Link
          href="/"
          className="text-xl font-semibold -tracking-wider text-text-primary hover:opacity-70 transition-opacity"
        >
          Siddheya Patade
        </Link>

        <nav className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs font-normal transition-colors ${
                pathname === item.path
                  ? "text-accent-blue"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
