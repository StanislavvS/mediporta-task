import { useQuery } from "@tanstack/react-query";
import { TagsDTO, useTags } from "../hooks/useTags";
import { useQueriesContext } from "../context/hooks/useQueriesContext";
const TagsTable = () => {
  const { getTags } = useTags();
  const { queries } = useQueriesContext();

  const { isLoading, isSuccess, isError, data } = useQuery<TagsDTO[]>({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  return <div></div>;
};

export default TagsTable;
