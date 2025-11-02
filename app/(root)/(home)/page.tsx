import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import search from '@/assets/icons/search.svg';
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/fiters";
import HomeFilters from "@/components/shared/filter/HomeFilters";


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
          image= {search}
          placeholder="local search ..."
          otherClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          className="min-h-[56px] w-full sm:max-w-[200px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex w-full sm:max-w-[200px]"
          />
      </div>
      <HomeFilters/>

  </>;
};

export default Home;
