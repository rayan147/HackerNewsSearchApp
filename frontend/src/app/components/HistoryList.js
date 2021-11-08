import { Button } from "./Button";
import { useHistorySearches } from "../hooks/useHistorySearches";










const HistoryList = () => {
const history = useHistorySearches()

const mapHistory = history.map((item, index) => (
  <li key={index}>{item}</li>
))

  return (
    <div>
      <Button name='Home' where='/' />
      <h2>History</h2>
      <ul>{mapHistory}</ul>
    </div>
  );
};

export default HistoryList;
