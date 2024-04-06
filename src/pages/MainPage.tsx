import TagsTable from "../components/TagsTable";
import Header from "../components/ui/Header";
import NumericInput from "../components/ui/NumericInput";
import { useQueriesContext } from "../context/hooks/useQueriesContext";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { queries } = useQueriesContext();
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

      <TagsTable />
    </div>
  );
};

export default MainPage;
