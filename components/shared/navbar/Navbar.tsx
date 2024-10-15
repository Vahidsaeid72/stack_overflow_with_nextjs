import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/site-logo.svg";
function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 sm-px-12 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} width={23} height={23} alt="myDev" />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      GlobalSearch
      <div className="flex-between gap-5">
        
      </div>
    </nav>
  );
}

export default Navbar;
