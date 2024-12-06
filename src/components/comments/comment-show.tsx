import type { CommentWithAuthor } from "@/db/queries/comments";
import Image from "next/image";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface CommentShowProps {
    commentId: String;
    postId: String;
}

export default async function CommentShow({ commentId, postId }: CommentShowProps) {
    const comments = await fetchCommentsByPostId(postId);
    const comment = comments.find((c) => c.id === commentId);

    if (!comment) {
        return null;
    }

    const children = comments.filter((c) => c.parentId === commentId);
    const renderChildren = children.map((child) => {
        return (
            <CommentShow key={child.id} commentId={child.id} postId={postId} />
        );
    });

    return (
        <div className="p-4 border mt-2 mb-1">
            <div className="flex gap-3">
                <CommentCreateForm />
            </div>
        </div>
    )
}