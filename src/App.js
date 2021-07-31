import "./style/style.css";

import {Provider} from 'react-redux';

import Menu from "./components/Menu";
import Drumset from "./components/Drumset";
import Player from "./components/Player";
import store from "./store/store";



function App() {
  
  console.log(store);
  return (
    <Provider store={store}>
       <div className="app">
         
       <Menu></Menu>
       <Player></Player>
       <Drumset></Drumset>
       </div>
    </Provider>
   
  );
}

export default App;
