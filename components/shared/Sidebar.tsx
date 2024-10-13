"use client";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "../../constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
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
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathName;
                console.log("us", isActive);
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-700 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathName;
                console.log("us", isActive);
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-700 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer p-4 gap-2">
                <UserButton showName />
              </li>
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
