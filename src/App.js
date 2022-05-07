
import { useEffect, useState } from 'react';
import data from './data.json';
import './App.css';
import Session from './components/Session';
import UploadPage from './components/UploadPage';

function App() {

  const sessions = Object.keys(data);
  const [sessId, setSessId] = useState(1);
  const [topics, setTopics] = useState(Object.keys(data[sessId]).filter(x => ! x.startsWith("__")));
  // const [isUploading, setIsUploading] = useState(true);
  const handleButtonClick = (inc) => {
    setSessId((prev) => {
      setTopics(Object.keys(data[prev + inc]).filter(x => ! x.startsWith("__")));
      return prev + inc;
    });
  }

  return (
    <div style={{display:"flex", flex:1, flexDirection:"column", marginLeft:100, marginTop: 20}} className="App">
      <UploadPage />
      <Session sessId={sessId} 
        content={data[sessId]}
        participants={data[sessId]["__participants"]}
        topics={topics}

      />
      {/* <p> {String(topics)} </p> */}
      <div>
        <button style={{margin: 20}} onClick={() => handleButtonClick(-1)} disabled={sessId == sessions[0]}> Previous </button>
        <button style={{margin: 20}} onClick={() => handleButtonClick(1)} disabled={sessId == sessions.at(-1)}> Next </button>
      </div>
    
    </div>
  );
}

export default App;
