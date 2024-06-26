import React, { useState } from "react";
import styles from "./App.module.scss";
import MainPage from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  QueriesContextProvider,
  QueryTags,
} from "./context/QueriesContextProvider";

function App() {
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
        {" "}
        <div className={styles["App"]}>
          <MainPage />
        </div>
      </QueryClientProvider>
    </QueriesContextProvider>
  );
}

export default App;
