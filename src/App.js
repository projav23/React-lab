
import {data} from './data'
import {Main} from './views/Main'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main data={data} />
      </header>
    </div>
  );
}

export default App;
