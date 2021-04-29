import GetData from "./components/get"
import Form from "./components/post"
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router> 
    <div className="App">
      {/*Navbar modulu ile atayacagimiz linlleri bir alanda topladik..Bu kinkleri dogrudan buraya da koyabilirdik*/}
      <Navbar/>
      <div className="content">
        {/*Modulleri bir Home catisi altinda birlestirerek route'ladik*/}
      <Route path="/"> 
           <GetData/>
           <Form/>
       </Route>
       {/* Switch ile modul linkleri ayri ayri nasil calisiyor onu asagida goruyoruz*/}
          <Switch>
            <Route path="/getdata">
            <GetData/>
            </Route>
            <Route path="/form">
            <Form/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
