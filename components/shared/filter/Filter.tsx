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
                <SelectTrigger className={`${className} body-regular rounded-[8px]`}>
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="border-none">
                    <SelectItem className="dark:text-dark300_light700" value="light">Light</SelectItem>
                    <SelectItem className="dark:text-dark300_light700" value="dark">Dark</SelectItem>
                    <SelectItem className="dark:text-dark300_light700" value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Filter;