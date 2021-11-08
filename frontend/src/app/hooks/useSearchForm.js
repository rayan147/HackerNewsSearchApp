import { useState } from "react";

export const useSearchForm = (initialState) => {
  const [search, setSearch] = useState(initialState);

  const reset = () => {
    setSearch(initialState);
  }

  const bind = {
    search,
    onChange: e => {
        setSearch(e.target.value);
        },   
}
  return [search, bind, reset];
}

