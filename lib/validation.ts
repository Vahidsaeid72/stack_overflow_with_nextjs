import { title } from "process"
import { z } from "zod"

 export const QuestionSchema = z.object({
    title: z.string().min(5,{message:"Title must be at least 5 characters."}).max(130,{message:"Title must be at most 130 characters."}),
    explanation: z.string().min(10,{message:"Explanation must be at least 10 characters."}),
    tags: z.array(z.string().min(1,{message:"Tag must be at least 1 character."}).max(15,{message:"Tag must be at most 15 characters."})).min(1,{message:"At least one tag is required"}).max(3,{message:"At most 3 tags are allowed"}), 
  })
  