import type { Comment } from '@prima/client';
import { cache } from 'react';
import { db } from '@/db';

export type CommentWithAuthor = Comment & {
    user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
        where: { postId },
        includes: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
});