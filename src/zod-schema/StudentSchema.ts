import {z,TypeOf} from 'zod'

export const StudentSchema = z.object({
    body:z.object({
        id:z.string({required_error:"Id is required !"})
        .min(3,"ID must be at least 3 characters"),

        name: z.string({required_error:"Name is required!"})
        .min(3,"Name must be at least 3 characters"),

        major:z.enum(["IT","IS","CS","SWE"],{
            required_error:"genre is required and must be one of this array [`IT`, `IS`, `CS`,`SWE`]",
        }),

        level:z.number({required_error:"rating is required!"})
        .min(1,"must be less than 1")
        .max(8,"must be more than 8"),
         
        GPA:z.number({required_error:"duration is required!"})
        .min(0,"must be less than 0")
        .max(5,"must be more than 5"),
}),
})
export type StudentType = TypeOf<typeof StudentSchema>["body"];