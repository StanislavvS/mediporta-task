import TagsTable from "../components/TagsTable";
import Header from "../components/ui/Header";
import NumericInput from "../components/ui/NumericInput";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles["main-page"]}>
      <Header headerTextValue="Stack overflow tag page" />
      <NumericInput />

      <TagsTable />
    </div>
  );
};

export default MainPage;
