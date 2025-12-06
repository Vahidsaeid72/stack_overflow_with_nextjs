"use client"
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
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
import { useTheme } from '@/context/ThemeProvider';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import closeIcon from '@/assets/icons/close.svg';
import { createQuestion } from '@/lib/actions/question.action';

const type = 'create';

const QuestionForm = () => {
  const { mode, setMode } = useTheme();
  const editorRef = useRef(null);
  const [submiting, setSubmiting] = useState(false);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue != '') {
        if (tagInput.value.length > 15) {
          return Form.setError('tags', { type: 'required', message: 'Tag must be at most 15 characters.' });
        }
      }
      if (!field.value.includes(tagValue as never)) {
        field.onChange([...field.value, tagValue as never]);
        tagInput.value = '';
        Form.clearErrors('tags');
      }
      else {
        Form.trigger();
      }
    }
  }

  const handleRemoveTag = (tag: string, field: any) => {
    field.onChange(field.value.filter((t: string) => t !== tag));
    Form.clearErrors('tags');
  }

  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  })

  async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    setSubmiting(true);
    try {
        await createQuestion({});
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }

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
                  <Editor
                    apiKey="04ighgdl3olj528i47uqvlwejqalqzpciyhkoxmnhylsya6k"
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue={field.value}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                      ],
                      toolbar:
                        'undo redo | blocks | bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | removeformat | help',

                      skin: mode === 'dark' ? 'oxide-dark' : 'oxide',
                      content_css: mode === 'dark' ? 'dark' : 'default',
                      onBlur: () => {
                        field.onBlur();
                      },
                      onEditorChange: (content) => {
                        field.onChange(content);
                      },
                      content_style: `
                              body {
                                font-family: Inter, sans-serif;
                                font-size: 16px;
                                background-color: ${mode === 'dark' ? '#1f2937' : '#f3f4f6'}; /* dark: gray-800, light: gray-100 */
                                color: ${mode === 'dark' ? '#e5e7eb' : '#111827'}; /* dark: gray-200, light: gray-900 */
                                border-radius: 0.75rem;
                              }
                            `,
                    }}
                  />


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
                <FormControl className="mt-3.5"><>
                  <Input
                    className="no-focus paragraph-regular background-light900_dark300 text-dark300_light700 min-h-[56px] border-2-light-200 dark:border-dark-400 rounded-[12px] px-4 py-3 shadow-none outline-none"
                    onKeyDown={(e) => handleKeyDown(e, field)}
                  />
                  {field.value.length > 0 &&
                    <div className='flex-start mt-2.5 gap-2.5'>
                      {field.value.map((tag: string) => (
                        <Badge
                          key={tag}
                          className='subtle-medium background-light800_dark300 text-light400_light500 border-none flex items-center justify-center gap-2 rounded-xl px-3 py-2 capitalize'
                          onClick={() => handleRemoveTag(tag, field)}
                        >
                          {tag}
                          <Image src={closeIcon} alt='close' width={12} height={12} className=' cursor-pointer object-contain invert-0 ml-2' />

                        </Badge>
                      ))}

                    </div>}
                </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button className='primary-gradient w-fit !text-light-900 rounded-[12px]' disabled={submiting} type="submit">
            {submiting ? (type === 'create' ? "Posting..." : "Editing...") : (type === 'create' ? "Create Question" : "Edit Question")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default QuestionForm;