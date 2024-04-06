import { useQuery } from "@tanstack/react-query";
import { TagsDTO, useTags } from "../hooks/useTags";
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

const TagsTable = () => {
  const { getTags } = useTags();
  const { errorObject } = useErrors();
  const { queries, setQueries } = useQueriesContext();
  const { order, page, pageSize, sortBy, total } = queries;
  const { isLoading, isSuccess, isError, data, error } = useQuery<TagsDTO[]>({
    queryKey: ["tags", queries],
    queryFn: () => getTags(queries),
    retry: 1,
  });

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
      page: pagination.current,
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
            return isError ? (
              <>
                <p className={"table-container__empty-message--error"}>
                  {
                    errorObject[
                      (error as AxiosError)?.response?.status as number
                    ].message
                  }
                </p>
              </>
            ) : (
              <p className={"table-container__empty-message"}>No Data</p>
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
