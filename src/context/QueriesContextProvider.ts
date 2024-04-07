import React, { createContext } from "react";

export interface QueryTags {
  order: "asc" | "desc";
  page: number;
  pageSize: number;
  sortBy: "popular" | "name" | "activity";
  total: number;
}

interface QueriesContextStateIterface {
  queries: QueryTags;
  setQueries: React.Dispatch<React.SetStateAction<QueryTags>>;
}

export const QueriesContextState = createContext<
  QueriesContextStateIterface | undefined
>(undefined);

export const QueriesContextProvider = QueriesContextState.Provider;
