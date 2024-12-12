// 1. 컴포넌트(화면에 보이는 조각들, 덩어리들)
function App() {
  // 2. 변수 등등 선언

  let count = 0;
  //   let [count, setCount] = React.useState(0);

  // 3. return문 내부에는 화면에 보여질 html 코드를 작성
  return (
    <div>
      <h2>count: {count}</h2>
      <h2>doubled: {count * 2}</h2>
      <button
        onClick={function () {
          count += 1;
        }}
      >
        Increment
      </button>
      <button
        onClick={function () {
          count -= 1;
        }}
      >
        Decrement
      </button>
    </div>
  );
}

// 메모리상에 React Element를 만든다
let root = ReactDOM.createRoot(document.querySelector('#root'));

// 메모리상에 만든 React Element를 실제 DOM에 렌더링한다
root.render(<App />);
