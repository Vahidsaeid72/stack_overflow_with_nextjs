import React from "react";


const Tags = ({ params }:{params : { id:number }}) => {

  return <div className={'flex w-full h-screen bg-red-500'}>Tag {params.id}</div>;
};

export default Tags;

