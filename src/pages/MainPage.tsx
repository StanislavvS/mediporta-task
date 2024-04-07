import { useQuery } from "@tanstack/react-query";
import TagsTable from "../components/TagsTable";
import Header from "../components/ui/Header";
import NumericInput from "../components/ui/NumericInput";
import { useQueriesContext } from "../context/hooks/useQueriesContext";
import { TagsDTO, useTags } from "../hooks/useTags";
import styles from "./MainPage.module.scss";
import { AxiosError } from "axios";

const MainPage = () => {
  const { queries } = useQueriesContext();
  const { getTags } = useTags();
  const { isLoading, data, error } = useQuery<TagsDTO[]>({
    queryKey: ["tags", queries],
    queryFn: () => getTags(queries),
    retry: 1,
  });
  const { page, pageSize, total } = queries;
  return (
    <div className={styles["main-page"]}>
      <Header>Stack overflow tag page</Header>
      <NumericInput
        id="numeric"
        label="Select page size"
        max={100}
        min={1}
        defaultValue={queries.pageSize}
      />

      <TagsTable
        page={page}
        pageSize={pageSize}
        total={total}
        emptyMessage="No Data"
        data={data}
        isLoading={isLoading}
        error={error as AxiosError}
      />
    </div>
  );
};

export default MainPage;
