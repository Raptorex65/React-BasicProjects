import './App.css';

/*Src klasorunde bu asamada gerek duymadigimiz dosyalari ve bunlarin importlarini 
silerek ise basladik.
App.js dosyasi uzerinde html kodlarini olusturdum. Gereksiz css kodlarini cikararak
app.css'i duzenledim
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <strong>Input Format</strong>
          <p> First line contains <b> <i> N.N</i></b> lines follow, each having a PAN number       </p>
          <strong>Constraints</strong>
          <ul>
          <li>1 <span>&#8804;</span> <b><i>N</i></b> <span>&#8804;</span> 10</li>
          <li> Each char is an uppercase letter, i.e, <i> <b>char</b></i> <span>&#8712; </span> ['A','Z'].</li>
          <li> Each digit lies between 0 and 9, i.e, <i> <b>digit</b></i><span>&#8712; </span> [0, 9].</li>
          <li> The length of the PAN number is always 10 i.e.,<i> <b>length</b></i> (PAN) = 10</li>
          <li> Every caharacter in PAN is either cahr or digit satisfying the above constraints </li>
          </ul>
          <strong>Output Format</strong>
          <p>For every PAN number listed, print YES if it is valid and NO if it is not</p>
      </header>
    </div>
  );
}

export default App;
