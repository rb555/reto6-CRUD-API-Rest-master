import {z} from 'zod';

export const createReviewSchema = z.object({
    restaurantName: z.string({
        required_error: 'Name required'
    }),
    description: z.string({required_error: 'Description required'}),
    review: z.string({required_error: 'Review required'}),
    date: z.string().datetime().optional(),
});