import './index.css';
import {Route,Routes} from 'react-router-dom'
import SearchBar from '../app/components/SearchBar'
import ButtonGroup from '../app/components/ButtonGroup';
import HistoryList from '../app/components/HistoryList'


function App() {
  
  return (
    <div className="App">
  
    <main>
      <Routes>
      <Route path='/' element={<ButtonGroup/>}/>  
      <Route path='/search' element={<SearchBar/>}/>  
      <Route path='/history' element={<HistoryList/>}/>  
      </Routes>
    </main>
    </div>
  );
}

export default App;
