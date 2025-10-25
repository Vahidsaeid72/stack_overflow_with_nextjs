'use client'
import React from 'react'
import {useTheme} from "@/context/ThemeProvider";
import sun from "@/assets/icons/sun.svg";
import moon from "@/assets/icons/moon.svg";
import Image from 'next/image';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { themes } from '@/constants';

function Theme() {
    const { mode, setMode } = useTheme();
  return (<>
        <Menubar className='relative border-none bg-transparent shadow-none'>
        <MenubarMenu>
            <MenubarTrigger className='focus:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
                {mode==='light'?<Image src={sun} alt='light mode' className='active-theme'/>:<Image src={moon} alt='light mode' className='active-theme'/>}
            </MenubarTrigger>
            <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
                {themes.map((theme,index)=>(
                        <MenubarItem onClick={()=>{setMode(theme.value)}} key={index}>
                          <Image 
                          src={theme.icon}
                           alt={theme.value}
                            width={16}
                            height={16}
                            className={`${mode === theme.value && 'active-theme'}`}
                            />
                        </MenubarItem>
                ))}
            </MenubarContent>
        </MenubarMenu>
        </Menubar>
  </>
  )
}

export default Theme