import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Rohit' lname='Sharma'>
        <p>Indian Cricket Team Capton</p>
      </Greet>
      <Greet name='KL'>
        <button>Click ME</button>
      </Greet>
      <Greet name ='Virat'/>
      {/* <Welcome name='Chahal'/> */}
      {/* <Hello />      */}
    </div>
  );
}

export default App;
