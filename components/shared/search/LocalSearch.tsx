'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface LocalSearch {
    route:string
    iconPosition:string
    image:string
    placeholder:string
    otherClass?:string
}

const LocalSearch = ({route,iconPosition,image,placeholder,otherClass}:LocalSearch)=>{
    return(
    <div className={`relative w-full  ${otherClass}`}>
        <div className={'background-light800_darkGradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'}>
            {iconPosition=='left' && <Image className={'cursor-pointer'} src={image} alt={'search'} width={24} height={24}/>}
            <Input onChange={()=>{}} className={'paragragh-regular placeholder:text-light-400 dark:placeholder:text-light-300 border-none shadow-none no-focus paragraph-regular outline-none background-light800_darkgradient dark:text-light-900'} type={'text'} placeholder={placeholder}/>
            {iconPosition=='right' && <Image className={'cursor-pointer'} src={image} alt={'search'} width={24} height={24}/>}
        </div>
    </div>)
}
export default LocalSearch;