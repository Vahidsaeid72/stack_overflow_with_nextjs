import Link from "next/link";
import TagRender from "../tag/TagRender";

interface Tag {
    id: number;
    name: string;
}

interface Question {
    id: number;
    title: string;
    tags: Tag[];
    author: Array<object>;
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
}

interface QuestionsCardProps {
    question: Question;
}

const QuestionsCard = ({ question }: QuestionsCardProps) => {
    const { id, title, tags, author, upvotes, views, answers, createdAt } = question;

    return <div key={id} className="card-wrapper p-9 sm:px-11 rounded-[10px]">
        <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">
            <div>
                <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                    {String(createdAt)}
                </span>
                <Link href={`/question/${id}`}>
                    <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                        {title}
                    </h3>
                </Link>
            </div>

        </div>
        <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(tag =>(
                <TagRender id={tag.id} key={tag.id}  name={tag.name} totalQuestions={6} showCount={false} />
            ))}
        </div>
    </div>
}
export default QuestionsCard 