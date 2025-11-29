import { z } from 'zod';

const tweetSchema = z.object({
    tweet: z.string().min(1).max(140),
});

export default tweetSchema;