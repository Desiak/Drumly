import "./style/style.css";
import Menu from "./components/Menu";
import Drumset from "./components/Drumset";
import Player from "./components/Player";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDefaultTracks } from "./actions/actions";

function App(props) {
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    const response = await fetch(
      "https://drumly-dev-default-rtdb.europe-west1.firebasedatabase.app/tracks.json"
    );
    const data = await response.json();

    setTracks(data);
    props.loadDefaultTracks(data);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div>
      {props.tracks.length > 0 ? (
        <div className="app">
          <div class="rotate-device-info">
            <p class="rotate-txt">Rotate device!</p>
          </div>
          <Menu></Menu>
          <Player tracks={tracks}></Player>
          <Drumset></Drumset>
        </div>
      ) : (
        <span>wrong data bro!</span>
      )}
    </div>
  );
}

const mapStateToProps = ({ state }) => ({
  tracks: state.tracks,
});

const mapDispatchToProps = {
  loadDefaultTracks,
};

const AppConsumer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConsumer;
