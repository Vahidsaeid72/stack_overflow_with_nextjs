"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { QuestionSchema } from "@/lib/validation"
import { z } from "zod"




const QuestionForm = () => {


  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  })

  function onSubmit(values: z.infer<typeof QuestionSchema>) {
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="paragraph-semibold text-dark400_light800">Question Title</FormLabel>
                <FormControl className="mt-3.5">
                  <Input className="no-focus paragraph-regular background-light700_dark300 text-dark300_light700 min-h-[56px] border-2-light-200 dark:border-dark-400 rounded-[12px] px-4 py-3 shadow-none outline-none" {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Be specific and imagine you&apos;re asking a question to another person.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => ( 
              <FormItem className="flex flex-col w-full gap-3">
                <FormLabel className="paragraph-semibold text-dark400_light800">Detailed explanation of your problem</FormLabel>  
                <FormControl className="mt-3.5">
                {/* add editor here */}
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  introduce the problem and scope of the question
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="paragraph-semibold text-dark400_light800">Tags</FormLabel>
                <FormControl className="mt-3.5">
                  <Input 
                  className="no-focus paragraph-regular background-light900_dark300 text-dark300_light700 min-h-[56px] border-2-light-200 dark:border-dark-400 rounded-[12px] px-4 py-3 shadow-none outline-none"
                  {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default QuestionForm