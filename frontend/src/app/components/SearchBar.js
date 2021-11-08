import { useDispatch } from "react-redux";
import { fetchNewsBySearch } from "../actions/newsAction";
import { useSearchForm } from "../hooks/useSearchForm";
import { Button } from "./Button";

import CardGroup from './CardGroup'

// use a Set to store the history of searches to avoid duplicates
export const historySearches = new Set();

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, bindSearch, resetSearch] = useSearchForm("");

  const handleOnSearch = (query) => {
    dispatch(fetchNewsBySearch(query));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length > 0) {
      if (!historySearches.has(search)) {
        historySearches.add(search);
      }
      handleOnSearch(search);
      resetSearch();
    }
    console.log(historySearches);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...bindSearch} type='text' placeholder='Search...' />
        <button type='submit'>Search</button>
        <Button name='Home' where='/'/>
        <Button name='History' where='/history'/>
      </form>
      <CardGroup/>
    </div>
  );
};

export default SearchBar;
