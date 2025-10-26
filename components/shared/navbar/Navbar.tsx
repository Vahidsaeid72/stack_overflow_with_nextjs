'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/site-logo.svg";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Theme from "./Theme";
import MobileNav from "@/components/shared/navbar/MobileNav";
import GlobalSearch from "@/components/shared/search/GlobalSearch";

function Navbar() {


    return (
    <nav className="flex-between background-light900_dark200 sm-px-12 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} width={23} height={23} alt="myDev" />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <GlobalSearch/>
      <div className="flex-start gap-4">
      <Theme/>
      <div className="flex-between gap-5">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log In</span>
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="small-medium btn-primary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10"
              },
              variables: {
                colorPrimary: "#6c47ff"
              }
            }}
          />
        </SignedIn>
      </div>
        <MobileNav/>
      </div>
    </nav>
  );
}

export default Navbar;
