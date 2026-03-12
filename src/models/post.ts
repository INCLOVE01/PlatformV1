import {z} from 'zod'

export const PostSchema = z.object({
    uid : z.string(),
    content: z.string().min(1, { message: "Content cannot be empty" }),
    createdAt:z.number(),
    badge:z.string(),
    email : z.string().email(),
    token : z.string(),
    fullName : z.string(),
    likes : z.number()

})

export type Post = z.infer<typeof PostSchema>