import styles from "./NumericInput.module.scss";
import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { useQueriesContext } from "../../context/hooks/useQueriesContext";

interface NumericInputProps {
  label: string;
  id: string;
  min: number;
  max: number;
  defaultValue: number;
}

const NumericInput = ({ label, id, min, max }: NumericInputProps) => {
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
      <label htmlFor={id}>{label}</label>
      <InputNumber
        id="numeric"
        min={min}
        max={max}
        defaultValue={pageSize}
        onChange={onChange}
      />
    </div>
  );
};

export default NumericInput;
