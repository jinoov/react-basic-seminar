import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello, React</h1>
    </div>
  );
}

let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
