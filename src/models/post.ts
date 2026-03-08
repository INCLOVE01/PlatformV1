import {z} from 'zod'

export const PostSchema = z.object({
    id : z.string(),
    title : z.string().min(1)

})

export type Post = z.infer<typeof PostSchema>