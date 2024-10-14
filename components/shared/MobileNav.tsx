import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/images/logo-text.svg" width={180} height={28} />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
              <Image src="/assets/images/logo-text.svg" width={152} height={32} alt="logo"
              />
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
