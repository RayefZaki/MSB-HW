import {z,TypeOf} from 'zod'

export const movieSchema = z.object({
    body:z.object({
        id:z.string({required_error:"Id is required !"})
        .min(3,"ID must be at least 3 characters"),

        name: z.string({required_error:"Name is required!"})
        .min(3,"Name must be at least 3 characters"),

        genre:z.enum(["Drama","Action","Comedy"],{
            required_error:"genre is required and must be one of this array [`Drama`, `Action`, `Comedy`]",
        }),

        rating:z.number({required_error:"rating is required!"})
        .min(1,"must be less than 1")
        .max(5,"must be more than 5"),
         
        duration:z.number({required_error:"duration is required!"})
        .min(60,"must be less than 60"),
}),
})
export type movieType = TypeOf<typeof movieSchema>["body"];