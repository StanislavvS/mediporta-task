import React, { ComponentProps, useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  QueriesContextProvider,
  QueryTags,
} from "../context/QueriesContextProvider";

import TagsTable from "./TagsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mockData } from "../data/mocks/data";

export default {
  title: "Molecules/TagsTable",
  component: TagsTable,
  args: {
    data: mockData,
    isLoading: false,
    emptyMessage: "No data",
    error: null,
    page: 1,
    pageSize: 30,
    total: 750,
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof TagsTable>> = (args) => {
  const queryClient = new QueryClient();
  const [queries, setQueries] = useState<QueryTags>({
    order: "desc",
    page: 1,
    pageSize: 30,
    sortBy: "popular",
    total: 750,
  });

  return (
    <QueriesContextProvider value={{ queries, setQueries }}>
      <QueryClientProvider client={queryClient}>
        <TagsTable {...args} />
      </QueryClientProvider>
    </QueriesContextProvider>
  );
};

export const Default = Template.bind({
  data: mockData,
  isLoading: false,
  emptyMessage: "No data",
  error: null,
  page: 1,
  pageSize: 30,
  total: 750,
});

export const Loading = Template.bind({
  isLoading: true,
  emptyMessage: "No data",
  error: null,
  page: 1,
  pageSize: 30,
  total: 750,
});
