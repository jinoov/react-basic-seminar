function App() {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const handleSubmit = (event) => {
    // 리로드 방지
    event.preventDefault();
    // 입력값 확인
    alert(`ID: ${id}, PW: ${pw}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          ID:
          {/* 고쳐야할 곳 */}
          <input type="text" value={id} />
        </label>
      </div>
      <div>
        <label>
          PW:
          {/* 고쳐야할 곳 */}
          <input type="password" value={pw} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
