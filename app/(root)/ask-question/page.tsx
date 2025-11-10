import React from "react";
import QuestionForm from "@/components/forms/QuestionForm";



const Question = ({ params }: { params: { id: number } }) => {

  return <div >
    <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
    <div className="mt-9">
      <QuestionForm />
    </div>
  </div>;
};

export default Question;

