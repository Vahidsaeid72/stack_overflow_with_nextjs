'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


interface FilterProps {
    filters:{name:string,value:string}[];
    className?:string;
    containerClass?:string;
}

const Filter = ({filters,className,containerClass}:FilterProps) => {
    return (
        <div className={`relative ${containerClass}`}>
            <Select>
                <SelectTrigger className={`${className} body-regular border-light rounded-[8px] background-light800_dark300 text-dark500_light700`}>
                    <div className="line-clamp-1 flex-1 text-left">
                        <SelectValue placeholder="select a filter" />
                    </div>
                </SelectTrigger>
                <SelectContent className="border-none">
                    {filters.map(f=>(
                        <SelectItem className="dark:text-dark300_light700 w-full sm:max-w-[200px]" value={f.value}>{f.name}</SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    )
}

export default Filter;