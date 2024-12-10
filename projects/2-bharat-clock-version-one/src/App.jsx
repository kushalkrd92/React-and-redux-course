import './App.css';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {
  return <center className='clock-container'>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime />
  </center>
}

export default App;
