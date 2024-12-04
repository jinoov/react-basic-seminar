function App() {
  let count = 0;
  //   let [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <h2>더블: {count * 2}</h2>
      <button onClick={() => count++}>Increment</button>
      <button onClick={() => count--}>Decrement</button>
    </div>
  );
}

// 메모리상에 React Element를 만든다
const root = ReactDOM.createRoot(document.querySelector('#root'));

// 메모리상에 만든 React Element를 실제 DOM에 렌더링한다
root.render(<App />);
