import React from 'react';
import jsonData from './data.json';
import Profil from './Profil'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h5> PERSON INFO</h5>

        <Profil list={jsonData}/>



      </header>
    </div>
  );
}

export default App;
