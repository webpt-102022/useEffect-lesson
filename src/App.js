import './App.css';
//import Counter from './components/Counter';
import { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(prev => !prev)
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      <button onClick={handleShow}>{show ? 'Hide' : 'Show'}</button>
      {show && <Timer />}
    </div>
  );
}

export default App;
