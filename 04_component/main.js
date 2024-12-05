function Button(props) {
  return <button style={{ backgroundColor: props?.color ?? 'black' }}>{props?.text ?? ''}</button>;
}

function App() {
  return (
    <section>
      <h1>버튼들을 재활용해보자</h1>
      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        {/* <Button color="blue" text="방가방가" />
        <Button color="red" text="하이하이" />
        <Button color="orange" text="바이바이" />
        <Button color="green" text="집언제가냐" /> */}
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
