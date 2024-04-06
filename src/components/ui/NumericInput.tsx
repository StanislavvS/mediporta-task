import styles from "./NumericInput.module.scss";
import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { useQueriesContext } from "../../context/hooks/useQueriesContext";

const NumericInput = () => {
  const { setQueries, queries } = useQueriesContext();
  const { pageSize } = queries;
  const onChange: InputNumberProps["onChange"] = (value) => {
    setQueries((prevState) => ({
      ...prevState,
      pageSize: value?.valueOf() as number,
    }));
  };

  return (
    <div className={styles["numeric-input"]}>
      <label htmlFor="numeric">Select page size:</label>
      <InputNumber
        id="numeric"
        min={1}
        max={100}
        defaultValue={queries.pageSize}
        onChange={onChange}
      />
    </div>
  );
};

export default NumericInput;
