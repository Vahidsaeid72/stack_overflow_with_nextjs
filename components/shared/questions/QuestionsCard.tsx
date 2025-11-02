interface Tag {
    id: number;
    name: string;
}

interface Question {
    id: number;
    title: string;
    tags: Tag[];
    author: string;
    upvotes: number;
    views: number;
    answers: number;
    createdAt: string;
}

interface QuestionsCardProps {
    question: Question;
}

const QuestionsCard = ({question}:QuestionsCardProps)=>{
    const{id,title,tags,author,upvotes,views,answers,createdAt}= question;

    return <div>{title}</div>
}
export default QuestionsCard 