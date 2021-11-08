import { useState, useEffect, useMemo } from "react";
import { historySearches } from "../components/SearchBar";
export const useHistorySearches = () => {
  const [history, setHistory] = useState([]);
  // useMemo is used to avoid re-rendering the component when the history changes
  const arr = useMemo(() => [...historySearches], []);

  useEffect(() => {
    setHistory(arr);
  }, [history, arr]);
  return history;
};
