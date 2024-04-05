import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Tags, TagsDTO, useTags } from "../hooks/useTags";
import { useEffect } from "react";

const MainPage = () => {
  const { getTags } = useTags();

  const { isLoading, isSuccess, isError, data } = useQuery<TagsDTO>({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  return <div></div>;
};

export default MainPage;
