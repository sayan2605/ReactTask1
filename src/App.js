import './App.css';
import Form from './components/Form.js';
import Tdate from './components/Tdate.js';
import GenderSelector from './components/GenderSelector.js';
import WelcomeNotes from './components/WelcomeNotes.js';
import ThemeSelector from './components/ThemeSelector.js';

function App() {
  const handleThemeSelect = (theme) => {
    console.log(theme);
  };
  return (
    <div>
      <WelcomeNotes /> <br />
      <Tdate /> <br />
      <GenderSelector /> <br />
      <ThemeSelector onSelect={handleThemeSelect} /> <br />
      <Form />
    </div>
  );
}

export default App;
