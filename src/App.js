import './App.css';
import Form from './components/Form.js';
import Tdate from './components/Tdate.js';
import GenderSelector from './components/GenderSelector.js';

function App() {
  return (
    <div>
      <Tdate />
      <GenderSelector />
      <Form />
    </div>
  );
}

export default App;
