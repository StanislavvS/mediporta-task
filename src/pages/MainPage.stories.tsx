import React, { useState } from "react";

import { Meta } from "@storybook/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainPage from "./MainPage";
import { QueryTags } from "../context/QueriesContextProvider";
import { QueriesContextProvider } from "../context/QueriesContextProvider";

export default {
  title: "/Pages/MainPage",
} as Meta;

export const _MainPage = () => {
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
        <MainPage />
      </QueryClientProvider>
    </QueriesContextProvider>
  );
};
