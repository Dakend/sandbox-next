import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { Suspense } from "react";
import { Loading } from "src/components/loading";
import { Content } from "src/pages/users/content";
import { POSTS, USERS } from "src/utilities/params";
import { request } from "src/utilities/request";
import { Post, User } from "src/utilities/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await request.get<User[]>(USERS);
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  const [posts, users] = await Promise.all([
    request.get<Post[]>(POSTS),
    request.get<User[]>(USERS),
  ]);
  const user = users.find((user) => user.id.toString() === ctx.params?.id);
  if (!user) return { notFound: true };
  const filteredPost = posts.filter(
    (post) => post.userId.toString() === ctx.params?.id
  );
  return {
    props: { user, posts: filteredPost },
  };
};

type Props = {
  user: User;
  posts: Post[];
};

const UserPage: NextPage<Props> = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Content user={props.user} posts={props.posts} />
    </Suspense>
  );
};

export default UserPage;
