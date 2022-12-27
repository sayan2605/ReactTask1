import { useState } from 'react';

function ThemeSelector({ onSelect }) {
  const [theme, setTheme] = useState('');

  const handleChange = (event) => {
    setTheme(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <p>Please select a theme color:</p>
      <label>
        Blue:
        <input
          type="radio"
          value="blue"
          checked={theme === 'blue'}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Green:
        <input
          type="radio"
          value="green"
          checked={theme === 'green'}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Red:
        <input
          type="radio"
          value="red"
          checked={theme === 'red'}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Purple:
        <input
          type="radio"
          value="purple"
          checked={theme === 'purple'}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ThemeSelector;
