import Image from "next/image";
import search from '@/assets/icons/search.svg';
import { Input } from "@/components/ui/input";


const GlobalSearch = ()=>{
    return(<div className={'relative w-full max-w-[600px] max-lg:hidden'}>
        <div className={'background-light800_darkGradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'}>
            <Image className={'cursor-pointer'} src={search} alt={'search'} width={24} height={24}/>
            <Input className={'placeholder:text-light-400 dark:placeholder:text-light-300 border-none shadow-none no-focus paragraph-regular outline-none background-light800_darkgradient dark:text-light-900'} type={'text'} placeholder={'search...'}/>
        </div>
    </div>)
}
export default GlobalSearch;