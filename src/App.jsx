
import './App.css';
import {UsersDisplay} from "./components/UsersDisplay"
import { SearchBar } from "./components/SearchBar"
function App() {
  return (
    <div className="App">
      <SearchBar/>
      <UsersDisplay/>
    </div>
  );
}

export default App;
