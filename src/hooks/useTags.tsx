import { useQuery } from "@tanstack/react-query";
import { TAGS } from "../data/paths";
import axiosInstance from "../utils/api/axios";

export interface Tags {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export type TagsDTO = Readonly<Tags>;

export const useTags = () => {
  const getTags = () =>
    axiosInstance
      .get<{ items: TagsDTO[] }>(`${TAGS}?order=asc&site=stackoverflow`)
      .then((res) => res.data.items);

  return { getTags };
};
