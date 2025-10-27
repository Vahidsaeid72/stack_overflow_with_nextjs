import React from "react";


const Question = ({ params }:{params : { id:number }}) => {

  return <div className={'flex w-full h-screen bg-red-500'}>Question {params.id}</div>;
};

export default Question;

