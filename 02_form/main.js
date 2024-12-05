function App() {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const handleSubmit = (event) => {
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
          {/* 고쳐야할 곳 */}
          <input type="text" value={id} />
        </label>
      </div>
      <div>
        <label>
          패스워드:
          {/* 고쳐야할 곳 */}
          <input type="password" value={pw} />
        </label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
