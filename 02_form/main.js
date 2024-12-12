function App() {
  let [id, setId] = React.useState('');
  let [pw, setPw] = React.useState('');

  let handleSubmit = function (event) {
    // 리로드 방지
    event.preventDefault();

    // 입력값 확인
    alert(`Welcome, ID: ${id}, PW: ${pw}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>
          아이디:
          <input
            type="text"
            value={id}
            // 고쳐야할 곳
            onChange={function (e) {
              console.log(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          패스워드:
          <input
            type="password"
            value={pw}
            // 고쳐야할 곳
            onChange={function (e) {
              console.log(e.target.value);
            }}
          />
        </label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
