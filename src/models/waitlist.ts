import {z} from 'zod'

export const WaitlistSchema = z.object({
    id : z.string(),
    fullName : z.string().min(1),
    email : z.string().email(),
    

})

export type Post = z.infer<typeof WaitlistSchema>