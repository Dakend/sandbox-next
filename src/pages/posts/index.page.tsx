import React, { Suspense } from "react";
import { GetStaticProps, NextPage } from "next";
import { Loading } from "src/components/loading";
import { POSTS, USERS } from "src/utilities/params";
import { request } from "src/utilities/request";
import { Post, User } from "src/utilities/types";
import { Content } from "./content";
import { SWRConfig } from "swr";

type Props = {
  fallback: Record<string, Post[] | User[]>;
};

const PostPage: NextPage<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await request.get<Post[]>(POSTS);
  const users = await request.get<User[]>(USERS);
  return { props: { fallback: { [POSTS]: posts, [USERS]: users } } };
};

export default PostPage;
