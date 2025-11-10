import Link from "next/link";
import arrow from '@/assets/icons/chevron-right.svg'
import Image from "next/image";
import TagRender from "@/components/shared/tag/TagRender";

const qouestions= [
    {id:1,title:'Compactifying varieties with the same Etale fundamental group'},
    {id:2,title:'What railway "ticket strategy" should I use for this Japan itinerary?'},
    {id:3,title:'Extending Fliess theorem to weighted automata over commutative semirings'},
    {id:4,title:'Is this third-party cantrip, Quick Knot, balanced for a cantrip? If not, how can I make it more balanced?'},
    {id:5,title:'Compactifying varieties with the same Etale fundamental group'}
]
const tags = [
    {id:1,name:'javascript',totalQuestions:5},
    {id:2,name:'nextjs',totalQuestions:4},
    {id:3,name:'php',totalQuestions:7},
    {id:4,name:'laravel',totalQuestions:3},
    {id:5,name:'html',totalQuestions:1}
]
const RightSideBar =()=>{

    return <section className={'hidden background-light900_dark200 light-border xl:flex h-screen overflow-y-auto border-l shadow-light-300 dark:shadow-none text-dark100_light900 custom-scrollbar flex-col gap-1 pt-32  px-2 lg:px-4 fixed top-0 right-0 z-40 w-[350px]'}>
        <h3 className={'h3-bold text-dark200_light900'}>Top Questions</h3>
        <div className={'mt-6 flex flex-col gap-[30px]'}>
            {qouestions.map(q=>(
                <Link className={'cursor-pointer flex items-center justify-between gap-7'} href={`/question/${q.id}`} key={q.id+'question'}>
                    <p className={'body-medium'}>{q.title}</p>
                    <Image className={'flex justify-center align-top invert-colors'} src={arrow} alt={'arrow'}/>
                </Link>
            ))}
        </div>
        <div className={'mt-16'}>
            <h3 className={'h3-bold text-dark200_light900'}>Popular Tags</h3>
            <div className={'mt-6 flex flex-col gap-4'}>
                {tags.map(tag=>(
                    <TagRender id={tag.id} name={tag.name} key={tag.name+tag.id} totalQuestions={tag.totalQuestions} showCount/>
                ))}
            </div>
        </div>


    </section>
}
export default RightSideBar;