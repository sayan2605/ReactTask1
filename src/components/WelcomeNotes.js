import React from 'react';

function WelcomeNotes() {
  const welNote1 = <h1>Welcome user! This note uses JSX!</h1>;
  const welNote2 = React.createElement('h1', {}, 'Welcome! This note does not JSX!');
  return (
    <div>
      {
            welNote1
        }
      {
            welNote2
        }
    </div>
  );
}

export default WelcomeNotes;
