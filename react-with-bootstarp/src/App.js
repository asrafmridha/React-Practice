import logo from './logo.svg';
import './App.css';
import CardGroup from './components/CardGroup/CardGroup';
import { Button } from 'react-bootstrap';
import Carousel from './components/Carousel/Carousel';



function App() {
  return (
    <div className="App">
      <Carousel></Carousel>
      <button>Plain Button</button>
      <Button>React Button </Button>

      {/* <CardGroup></CardGroup> */}
    </div>
  );
}

export default App;
