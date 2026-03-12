import { z} from 'zod'

export const Identity = z.object({
    id : z.number().optional(), 
    email : z.email(),
    inclove_token : z.string(), 
    isActive : z.boolean(), 
    lastUsed : z.number(),
     createdAt : z.number()

})

export type Identity = z.infer<typeof Identity>