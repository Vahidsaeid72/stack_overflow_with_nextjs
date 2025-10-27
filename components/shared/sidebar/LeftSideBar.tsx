'use client'
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {usePathname} from "next/navigation";
import {SignedOut} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import account from '@/assets/icons/account.svg'
import signup from '@/assets/icons/sign-up.svg'
const LeftSideBar = ()=>{
    const pathName = usePathname();
    return<>
        <section className={'hidden background-light900_dark200 light-border sm:flex h-screen border-r shadow-light-300 dark:shadow-none custom-scrollbar flex-col gap-1 pt-32 pb-6 px-2 lg:px-4 fixed'}>
            {sidebarLinks.map(item=>{
                const isActive = (pathName.includes(item.route) && item.route.length>1) || pathName === item.route ;
                return(<Link key={item.route} className={`${isActive?'primary-gradient rounded-xl text-light-900':'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`} href={item.route}>
                        <Image className={`${isActive ? '' : 'invert-colors'}`} src={item.imgURL} alt={''} width={21} height={21}/>
                        <p className={`${isActive?'base-bold':'base-medium'} hidden lg:block text-dark100_light900`}>{item.label}</p>
                    </Link>)
            })}
            <div>
                <SignedOut>
                        <Link href={'/sign-in'} >
                            <Button className={'small-medium  btn-secondary min-h-[41px] w-full rounded px-4 py-5 my-2 shadow-none'}>
                                <span className={'primary-text-gradient'}>
                                    <span className={'hidden lg:block'}>Log In</span>
                                    <Image className={'lg:hidden'} src={account} alt={'account'}/>
                                </span>
                            </Button>
                        </Link>
                        <Link href={'/sign-up'} >
                            <Button className={'small-medium  btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded px-4 py-5 my-2 shadow-none'}>
                                <span className={'hidden lg:block'}>Sign up</span>
                                <Image className={'lg:hidden'} src={signup} alt={'account'}/>
                            </Button>
                        </Link>
                </SignedOut>
            </div>
        </section>

    </>
}
export default LeftSideBar