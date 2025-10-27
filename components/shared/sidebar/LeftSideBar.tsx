'use client'
import {sidebarLinks} from "@/constants";
import {SheetClose} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {usePathname} from "next/navigation";

const LeftSideBar = ()=>{
    const pathName = usePathname();
    return<>
        <section className={'hidden background-light900_dark200 sm:flex h-full flex-col gap-3 pt-32 pb-6 px-2 lg:px-4 fixed'}>
            {sidebarLinks.map(item=>{
                const isActive = (pathName.includes(item.route) && item.route.length>1) || pathName === item.route ;
                return(<Link className={`${isActive?'primary-gradient rounded-xl text-light-900':'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`} href={item.route}>
                        <Image className={`${isActive ? '' : 'invert-colors'}`} src={item.imgURL} alt={''} width={21} height={21}/>
                        <p className={`${isActive?'base-bold':'base-medium'} hidden lg:block text-dark100_light900`}>{item.label}</p>
                    </Link>)
            })}
        </section>
    </>
}
export default LeftSideBar