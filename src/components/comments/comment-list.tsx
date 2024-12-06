import type { CommentWithAuthor } from '@/db/queries/comments';
import CommentShow from '@/components/comments/comment-show';
import { fetchCommentsByPostId } from '@/db/queries/comments';

interface CommentListProps {
    postId: String;
}

export default async function CommentList({ postId }: CommentListProps) {
    const comments = await fetchCommentsByPostId(postId);

    const topLevelComments = comments.filter(
        (comment) => comment.parentId === null
    );
    const renderedComments = topLevelComments.map((comment) => {
        return (
            <CommentShow 
                key={comment.id}
                commentId={comment.id}
                postId={postId}
            />
        );
    });

    return (
        <div className="space-y-3">

        </div>
    );
}