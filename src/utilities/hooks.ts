import { Fetcher, KeyedMutator, SWRConfiguration, SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";

type Returns<Data, Error> = {
  data: Data;
  mutate: KeyedMutator<Data>;
} & SWRResponse<Data, Error>;

export const useSWRSuspense = <Data, Error>(
  key: string | undefined,
  fetcher: Fetcher<Data, string>,
  config?: SWRConfiguration<Data, Error>
): Returns<Data, Error> => {
  if (!key) throw new Promise(() => undefined);
  const { data, mutate, ...rest } = useSWRImmutable(key, fetcher, {
    ...config,
    suspense: true,
  });
  if (!data) throw new Promise(() => undefined);
  return { data, mutate, ...rest };
};
