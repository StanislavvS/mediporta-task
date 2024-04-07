import { TagsDTO } from "../hooks/useTags";
import { useQueriesContext } from "../context/hooks/useQueriesContext";
import type { TableColumnsType, TableProps } from "antd";
import styles from "./TagsTable.module.scss";
import { AxiosError } from "axios";
import { Table } from "antd";
import { useErrors } from "../hooks/useErrors";

interface DataType {
  key: React.Key;
  name: string;
  count: number;
}

interface TagsTableProps {
  data?: TagsDTO[];
  isLoading: boolean;
  emptyMessage: string;
  error: AxiosError | null;
  page: number;
  pageSize: number;
  total: number;
}

const TagsTable = ({
  data,
  isLoading,
  error,
  emptyMessage,
  page,
  pageSize,
  total,
}: TagsTableProps) => {
  const { errorObject } = useErrors();
  const { setQueries } = useQueriesContext();

  const dataSource = data?.map((tag) => {
    return { name: tag.name, count: tag.count };
  });

  const translateOrderDirection = (
    order: "ascend" | "descend"
  ): "asc" | "desc" => (order === "ascend" ? "asc" : "desc");

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      sorter: (a, b) => a.count - b.count,
    },
  ];

  const handleTableChange: TableProps["onChange"] = (
    pagination,
    filters,
    sorter: any
  ) => {
    setQueries((prevState) => ({
      ...prevState,
      page: pagination.current as number,
    }));

    if (sorter.order) {
      setQueries((prevState) => ({
        ...prevState,
        sortBy: sorter.field === "name" ? sorter.field : "popular",
        order: translateOrderDirection(sorter.order),
      }));
    }
  };

  return (
    <div className={styles["table-contianer"]}>
      <Table
        dataSource={dataSource}
        //@ts-ignore
        columns={columns}
        loading={isLoading}
        locale={{
          emptyText() {
            return error ? (
              <>
                <p className={"table-container__empty-message--error"}>
                  {errorObject[error?.response?.status as number].message}
                </p>
              </>
            ) : (
              <p className={"table-container__empty-message"}>{emptyMessage}</p>
            );
          },
        }}
        showSorterTooltip={{ target: "sorter-icon" }}
        onChange={handleTableChange}
        pagination={{
          current: page,
          total,
          showSizeChanger: false,
          pageSize,
        }}
      />
    </div>
  );
};

export default TagsTable;
