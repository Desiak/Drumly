import "./style/style.css";
import Menu from "./components/Menu";
import Drumset from "./components/Drumset";
import Player from "./components/Player";
import { useEffect } from "react";
import { connect } from "react-redux";
import { loadDefaultTracks } from "./actions/actions";
import SaveTrackModal from "./components/SaveTrackModal/SaveTrackModal";

function App(props) {
  const fetchTracks = async () => {
    const response = await fetch(
      "https://drumly-dev-default-rtdb.europe-west1.firebasedatabase.app/tracks.json"
    );
    const data = await response.json();
    const dataObjToArray = Object.values(data);

    props.loadDefaultTracks(dataObjToArray);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className="app">
      {props.tracks.length > 0 ? (
        <div className="app__main">
          <div class="rotate-device-info">
            <p class="rotate-txt">Rotate device!</p>
          </div>
          <Menu></Menu>
          <Player tracks={props.tracks}></Player>
          <Drumset></Drumset>
          {props.isTrackSaveModalOpen ? (
            <SaveTrackModal></SaveTrackModal>
          ) : null}
        </div>
      ) : (
        <span>wrong data bro!</span>
      )}
    </div>
  );
}

const mapStateToProps = ({ state }) => ({
  tracks: state.tracks,
  isTrackSaveModalOpen: state.isTrackSaveModalOpen,
});

const mapDispatchToProps = {
  loadDefaultTracks,
};

const AppConsumer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConsumer;
