function App() {
  let [selectedVideo, setSelectedVideo] = React.useState(null);

  let videos = [
    {
      name: '지디',
      url: 'https://www.youtube.com/embed/Ox29z5Nf1Uk',
    },
    {
      name: '에스파',
      url: 'https://www.youtube.com/embed/_LyRdiHwyFA',
    },
    {
      name: '로제',
      url: 'https://www.youtube.com/embed/dgGqD28J6aQ',
    },
    // TODO: add your own video!
  ];

  return (
    <section>
      <h1>Youtube</h1>
      <div>
        {videos.map((video, index) => (
          <button
            key={index}
            // 고쳐야할 곳
            onClick={function () {
              console.log(video);
            }}
          >
            {video.name}
          </button>
        ))}
      </div>
      <div>{selectedVideo ? <iframe width="560" height="315" src={selectedVideo.url} frameBorder="0" allowFullScreen title={selectedVideo.name} /> : <p>비디오를 골라보세요</p>}</div>
    </section>
  );
}

let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
