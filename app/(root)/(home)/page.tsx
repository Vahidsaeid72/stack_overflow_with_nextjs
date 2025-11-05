import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import search from '@/assets/icons/search.svg';
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/fiters";
import HomeFilters from "@/components/shared/filter/HomeFilters";
import { title } from "process";
import QuestionsCard from "@/components/shared/questions/QuestionsCard";
import NoResult from "@/components/shared/questions/NoResult";

const Questions = [
  // {
  //   id :1,
  //   title:"How can I fix my problem ?",
  //   tags :[
  //     {id : 1 , name : 'Javascript'},
  //     {id : 2 , name : 'Typescript'},
  //   ],
  //   author :'Vahid saeid',
  //   upvotes : 8 ,
  //   views : 63 ,
  //   answers :6 ,
  //   createdAt : '2024-07-26T11:36:02.000Z'
  // },
  // {
  //   id :2,
  //   title:"How do i use express as custom server in Next.js ?",
  //   tags :[
  //     {id : 1 , name : 'Express'},
  //     {id : 2 , name : 'Nextjs'},
  //   ],
  //   author :'Jeams Adam',
  //   upvotes : 8 ,
  //   views : 50 ,
  //   answers :9 ,
  //   createdAt : '2024-07-27T10:30:02.000Z'
  // },
  // {
  //   id :3,
  //   title:"How can I fix my problem ?",
  //   tags :[
  //     {id : 1 , name : 'Javascript'},
  //     {id : 2 , name : 'Typescript'},
  //   ],
  //   author :'Vahid saeid',
  //   upvotes : 8 ,
  //   views : 63 ,
  //   answers :6 ,
  //   createdAt : '2024-07-26T11:36:02.000Z'
  // },
  // {
  //   id :4,
  //   title:"How can I fix my problem ?",
  //   tags :[
  //     {id : 1 , name : 'Javascript'},
  //     {id : 2 , name : 'Typescript'},
  //   ],
  //   author :'Vahid saeid',
  //   upvotes : 8 ,
  //   views : 63 ,
  //   answers :6 ,
  //   createdAt : '2024-07-26T11:36:02.000Z'
  // },
  // {
  //   id :5,
  //   title:"How can I fix my problem ?",
  //   tags :[
  //     {id : 1 , name : 'Javascript'},
  //     {id : 2 , name : 'Typescript'},
  //   ],
  //   author :'Vahid saeid',
  //   upvotes : 8 ,
  //   views : 63 ,
  //   answers :6 ,
  //   createdAt : '2024-07-26T11:36:02.000Z'
  // }
]


const Home = () => {
  return <>
    <div className="flex flex-col-reverse w-full justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="h1-bold text-dark100_light900">All Questions</h1>
      <Link className="flex flex-end max-sm:w-full" href={'/ask-question'}>
        <Button className="primary-gradient min-h-[46px] rounded-[8px] px-4 py-3 !text-light-900">Ask Questions</Button>
      </Link>
    </div>
    <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center w-full">
      <LocalSearch
        route="/"
        iconPosition="left"
        image={search}
        placeholder="local search ..."
        otherClass="flex-1"
      />
      <Filter
        filters={HomePageFilters}
        className="min-h-[56px] w-full sm:max-w-[200px] sm:min-w-[170px]"
        containerClass="hidden max-md:flex w-full sm:max-w-[200px]"
      />
    </div>
    <HomeFilters />
    <div className="flex flex-col gap-6 w-full mt-10">

      {Questions.length > 0 ?
        Questions.map(q => (
          <QuestionsCard question={q} />
        )) : <div>
          <NoResult
            title="There is no question to show"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  nihil ratione? Id incidunt asperiores quibusdam vitae pariatur totam aspernatur nobis?"
            link="/ask-question"
            linkTitle="Ask Questions"
          />
        </div>
      }
    </div>
  </>;
};

export default Home;
