import {z} from 'zod';


export const createTaskSchema =  z.object({
    title: z
    .string({
    required_error:"Must have any Title"}),
    description: z.
    string({required_error:'Must have any Description'}),
    date: z.string().datetime().optional(),
    });