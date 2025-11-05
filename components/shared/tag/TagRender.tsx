'use client'
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

const TagRender = ({id ,name, key, totalQuestions, showCount}:{id:number; name: string; key: string|number; totalQuestions: number; showCount?: boolean; })=>{
    return<>
        <Link key={key} className={'flex-between gap-2'} href={`/tags/${id}`}>
            <Badge className={'uppercase px-4 py-2 background-light800_dark300 text-light400_light500 border-none rounded subtle-medium'}>{name}</Badge>
            {showCount && <p className={'small-medium text-dark200_light900'}>{totalQuestions}</p>}
        </Link>
    </>
}
export default TagRender;