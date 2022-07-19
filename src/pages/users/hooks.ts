import { useSWRSuspense } from "src/utilities/hooks";
import { USERS } from "src/utilities/params";
import { request } from "src/utilities/request";
import { User } from "src/utilities/types";

export const useUsers = (): { users: User[] } => {
  const { data: users } = useSWRSuspense(USERS, (key) =>
    request.get<User[]>(key)
  );
  return { users };
};
