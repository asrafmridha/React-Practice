import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold'>This Is Header</h1>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
