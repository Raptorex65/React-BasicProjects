// Bu calismada oncelikle array icerigini filtreleyerek dort ayri module ayirdik
// Modullere gonderdigimiz array bilesenleri icindeki ilk nesne bilgilerini UI da goruntuleyerek, 
// diger balik turlerinin next butonlarina click eventi ile aktif hale gelmesi icin statelerimizi tanimladik.
// Next butonu icin balik bilgisi yer almayanlar icin alert tanimlayarak yine state ile bos [] goruntulenmesini istedik

import React from 'react';
import fishFarm from './fishFarm'
import WinterFishes from './winterFishes';
import SummerFishes from './summerFishes';
import SpringFishes from './springFishes';
import AutumnFishes from './autumnFishes';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
function App() {

  let filterWinter = fishFarm.filter((fish)=>fish.season==="Winter");
  let filterSummer = fishFarm.filter((fish)=>fish.season==="Summer");
  let filterAutumn = fishFarm.filter((fish)=>fish.season==="Autumn");
  let filterSpring = fishFarm.filter((fish)=>fish.season==="Spring");

  return (
    <div className="App">

      <WinterFishes filterWinter={filterWinter}/>
      <SummerFishes filterSummer={filterSummer}/>
      <SpringFishes filterSpring={filterSpring}/>
      <AutumnFishes filterAutumn={filterAutumn}/>

    </div>
  );
}

export default App;
