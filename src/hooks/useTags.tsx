import { TAGS } from "../data/paths";
import axiosInstance from "../utils/api/axios";
import { QueryTags } from "../context/QueriesContextProvider";

export interface Tags {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export type TagsDTO = Readonly<Tags>;

export const useTags = () => {
  const getTags = (queries: QueryTags) => {
    const { page, pageSize, order, sortBy } = queries;

    return axiosInstance
      .get<{
        items: TagsDTO[];
      }>(
        `${TAGS}?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sortBy}&site=stackoverflow`
      )
      .then((res) => res.data.items);
  };

  return { getTags };
};
