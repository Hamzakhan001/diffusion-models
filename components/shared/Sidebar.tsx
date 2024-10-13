"use client"
import Image from "next/image";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { navLinks } from "../../constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar_nav-elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathName;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${isActive} ? 'bg-purple-gradient text-white : text-gray-700'`}
                  ></li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
