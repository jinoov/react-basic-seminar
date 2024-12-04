function Button(props) {
  return <button style={{ backgroundColor: props?.color ?? 'black' }}>버튼</button>;
}

function App() {
  return (
    <section>
      <h1>버튼들을 재활용해보자</h1>
      {/* <Button color={'red'} /> */}
    </section>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
