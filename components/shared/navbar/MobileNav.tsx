'use client'
import {
    Sheet, SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import hamburger from '@/assets/icons/hamburger.svg'
import Link from "next/link";
import logo from "@/assets/images/site-logo.svg";
import React from "react";
import {SignedOut} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";


const NavContent = ()=>{
    const pathName = usePathname();

return (
    <section className={'flex h-full flex-col gap-6 pt-16 pb-6'}>
        {sidebarLinks.map(item=>{
            const isActive = (pathName.includes(item.route) && item.route.length>1) || pathName === item.route ;
           return <SheetClose asChild  key={item.route}>
                <Link className={`${isActive?'primary-gradient rounded-xl text-light-900':'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`} href={item.route}>
                    <Image className={`${isActive ? '' : 'invert-colors'}`} src={item.imgURL} alt={''} width={21} height={21}/>
                    <p className={`${isActive?'base-bold':'base-medium' } text-dark100_light900`}>{item.label}</p>
                </Link>
            </SheetClose>
        })}
    </section>
)
}
const MobileNav = ()=>{
    return(<>
        <Sheet>
            <SheetTrigger asChild>
                <Image className={'invert-colors sm:hidden'} src={hamburger} alt={''} width={36} height={36}/>
            </SheetTrigger>
            <SheetContent className={'bg-light-900 dark:bg-dark-200 border-none'} side={'left'}>
                <Link href="/" className="flex items-center gap-1">
                    <Image src={logo} width={23} height={23} alt="myDev" />
                    <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
                        Dev <span className="text-primary-500">Overflow</span>
                    </p>
                </Link>
                <div>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                    <SignedOut>
                        <SheetClose asChild >
                            <Link href={'/sign-in'} >
                                <Button className={'small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-5 my-2 shadow-none'}>
                                    <span className={'primary-text-gradient'}>Log In</span>
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild >
                            <Link href={'/sign-up'} >
                                <Button className={'small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-5 my-2 shadow-none'}>
                                    Sign up
                                </Button>
                            </Link>
                        </SheetClose>
                    </SignedOut>
                </div>
            </SheetContent>
        </Sheet>
        </>)
}
export default MobileNav;