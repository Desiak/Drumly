import "./style/style.css";

import {Provider} from 'react-redux';

import Menu from "./components/Menu";
import Drumset from "./components/Drumset";
import Player from "./components/Player";
import store from "./store/store";



function App() {
  
  return (
    <Provider store={store}>
       <div className="app">
         <div class="rotate-device-info">
           <p class="rotate-txt">Rotate device!</p>
         </div>
       <Menu></Menu>
       <Player></Player>
       <Drumset></Drumset>
       </div>
    </Provider>
   
  );
}

export default App;
