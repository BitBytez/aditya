
import { useEffect, useState } from 'react';
import data from './data';
import './App.css';
import Session from './components/Session';


function App() {
  // const data = {
  //   1 : {
  //     "__participants" : 10,
  //     "wsdl":{
  //       "outcomes" : ["sess1_wsdl_out_1", "sess1_wsdl_out_2"],
  //       "challenges" : ["sess1_wsdl_chal_1", 'sess1_wsdl_chal_2'],
  //       "frequency" : {
  //         outcomes: 10,
  //         challenges: 15
  //       }
  //     },
  //     "soap" : {
  //       "outcomes": ["sess1_soap_out_1","sess1_soap_out_2"],
  //       "challenges": ["sess1_soap_chal_1", "sess1_soap_chal_2"],
  //       "frequency" : {
  //         outcomes: 12,
  //         challenges: 14
  //       }

  //     },
  //   },
  //   2 : {
  //     "__participants" : 15,
  //     "wsdl":{
  //       "outcomes" : ["sess2_wsdl_out_1", "sess2_wsdl_out_2"],
  //       "challenges" : ["sess2_wsdl_chal_1", 'sess2_wsdl_chal_2'],
  //       "frequency" : {
  //         outcomes: 12,
  //         challenges: 22
  //       }

  //     },
  //     "soap" : {
  //       "outcomes": ["sess2_soap_out_1","sess2_soap_out_2"],
  //       "challenges": ["sess2_soap_chal_1", "sess2_soap_chal_2"],
  //       "frequency" : {
  //         outcomes: 11,
  //         challenges: 16
  //       }

  //     },
  //   }
  // }

  // const data = data;
  const sessions = Object.keys(data);
  const [sessId, setSessId] = useState(1);
  const [topics, setTopics] = useState(Object.keys(data[sessId]).slice(1));

  const handleButtonClick = (inc) => {
    setSessId((prev) => {
      setTopics(Object.keys(data[prev + inc]).slice(1));
      return prev + inc;
    });
  }

  return (
    <div style={{display:"flex", flex:1, flexDirection:"column", marginLeft:100, marginTop: 20}} className="App">
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
