import React, { useState } from 'react';

function Parent() {
  const [message, setMessage] = useState('Hello from Parent');

  const handleClick = () => {
    setMessage('Updated message from Parent');
  };

  return (
    <div>
      <h2>Parent</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Update Message</button>
      <Child message={message} />
    </div>
  );
}

function Child({ message }) {
  return (
    <div>
      <h2>Child</h2>
      <p>{message}</p>
    </div>
  );
}

export default Parent;