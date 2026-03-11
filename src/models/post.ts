import {z} from 'zod'

export const PostSchema = z.object({
    uid : z.string(),
    content:z.object(), 
    createdAt:z.number(),
    badge:z.string(),
    email : z.email(),
    token : z.string(),
    fullName : z.string(),
    likes : z.number()

})

export type Post = z.infer<typeof PostSchema>