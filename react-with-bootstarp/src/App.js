import logo from './logo.svg';
import './App.css';
import CardGroup from './components/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <CardGroup></CardGroup>
    </div>
  );
}

export default App;
