import Link from "next/link";
import React, { FC, useMemo } from "react";
import { usePosts } from "src/pages/posts/hooks";
import { useUsers } from "src/pages/users/hooks";
import { PostCard } from "src/utilities/types";

export const Content: FC = () => {
  const { posts } = usePosts();
  const { users } = useUsers();
  const postCards = useMemo(
    () =>
      posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return { ...post, username: user?.username ?? "noname" };
      }),
    [posts, users]
  );
  return (
    <div className="flex flex-col">
      {postCards.map((postCard) => (
        <Card key={postCard.id} postCard={postCard} />
      ))}
    </div>
  );
};

const Card: FC<{ postCard: PostCard }> = ({ postCard }) => {
  return (
    <div className="flex justify-center mb-5">
      <div className="p-5 border rounded bg-white w-1/2">
        <div className="font-bold mb-2">{postCard.title}</div>
        <div className="mb-2 text-gray-500">{postCard.body}</div>
        <div className="flex justify-end">
          <span className="pr-1 text-gray-400">written by</span>
          <span className="font-semibold hover:text-blue-700">
            <Link href={`/users/${postCard.userId}`}>{postCard.username}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
