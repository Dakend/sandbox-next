import React, { FC } from "react";

import { Post, User } from "src/utilities/types";

type ContentProps = {
  user: User;
  posts: Post[];
  className?: string;
};

export const Content: FC<ContentProps> = (props) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <div>
        <div className="flex justify-center mb-10">
          <table className="table-auto bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">UserName</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{props.user.username}</td>
                <td className="border px-4 py-2">{props.user.email}</td>
                <td className="border px-4 py-2">{props.user.company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {props.posts.map((post) => (
        <Card key={post.id} post={post} className="flex justify-center mb-5" />
      ))}
    </div>
  );
};

type CardProps = { post: Post; className?: string };

const Card: FC<CardProps> = ({ post, className }) => {
  return (
    <div className={`${className}`}>
      <div className="border rounded bg-white w-1/2">
        <div className="font-bold mb-2 bg-gray-100 rounded p-3">
          {post.title}
        </div>
        <div className="p-3 mb-2 text-gray-500">{post.body}</div>
      </div>
    </div>
  );
};
