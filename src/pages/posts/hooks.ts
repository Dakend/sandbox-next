import { useSWRSuspense } from "src/utilities/hooks";
import { POSTS } from "src/utilities/params";
import { request } from "src/utilities/request";
import { Post } from "src/utilities/types";

type Returns = { posts: Post[] };

export const usePosts = (): Returns => {
  const { data: posts } = useSWRSuspense(POSTS, (key) =>
    request.get<Post[]>(key)
  );
  return { posts };
};
