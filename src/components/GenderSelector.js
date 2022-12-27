import { useState } from 'react';

function GenderSelector() {
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  let title = '';
  if (gender === 'male') {
    title = 'Mr.';
  } else if (gender === 'female') {
    title = 'Ms.';
  }

  return (
    <div>
      <p>Please select your gender:</p>
      <label>
        Male:
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Female:
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        />
      </label>
      <br />
      {title && <p>Your title is: {title}</p>}
    </div>
  );
}

export default GenderSelector;
