import readExcel from './components/givencode'
function App() {
  return (
    <div className="App">
    <input type="file" onChange={(e)=>{
      const file = e.target.files[0];
      readExcel(file) }} />    
    </div>
  );
}

export default App;








