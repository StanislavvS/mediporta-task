import { useContext } from "react";
import { QueriesContextState } from "../QueriesContextProvider";

export const useQueriesContext = () => {
  const ctx = useContext(QueriesContextState);

  if (!ctx) {
    throw new Error("Component beyond QueriesContext!");
  }

  return ctx;
};
