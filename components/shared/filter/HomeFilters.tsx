'use client'
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/fiters";
import { useState } from "react";

const HomeFilters = ()=>{
    const [active,setActive] = useState('recommended');

    return<div className="hidden mt-10 md:flex flex-wrap gap-3">
        {HomePageFilters.map(item=>(
            <Button className={`body-medium rounded-[8px] px-6 py-3 capitalize shadow-none
                ${active === item.value ? 
                    'bg-primary-100 text-primary-500' : 
                    'bg-light-800 text-light-500 hover:bg-light-900 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300'}
                `} onClick={()=>{setActive(item.value)}} key={item.value}>{item.name}</Button>
            ))}
    </div>
}
export default HomeFilters;