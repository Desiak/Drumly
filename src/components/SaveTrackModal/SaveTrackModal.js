import React, { useState } from "react";
import { connect } from "react-redux";
import { handleTrackSaveModalState } from "../../actions/actions";

const SaveTrackModal = ({
  tracks,
  trackIndex,
  customableTrack,
  handleTrackSaveModalState,
}) => {
  const [trackName, setTrackName] = useState("");

  const formSubmitHandler = async (e) => {

    //need to check if entered track name already exists
    
    e.preventDefault();

    const newTrackValue = customableTrack.map((bar) => bar.value);
    const newTrack = {
      ...tracks[trackIndex],
      track: newTrackValue,
      trackName: trackName,
    };

    try {
      const response = await fetch(
        "https://drumly-dev-default-rtdb.europe-west1.firebasedatabase.app/tracks.json",
        {
          method: "POST",
          body: JSON.stringify(newTrack),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok){
        console.log("response is ok!");
        //handle success

      }
    } catch (err) {
      //need some kind of error handling!
      console.log(err);
    }
  };

  return (
    <div className="save-track-modal">
      <p>{trackName}</p>
      <div className="save-track-modal__overlay">
        <div className="save-track-modal__form-wrapper">
          <i
            class="fa-solid fa-xmark save-track-modal__close-icon"
            onClick={() => {
              handleTrackSaveModalState(false);
            }}
          ></i>
          <form
            class="save-track-modal__form"
            onSubmit={(e) => {
              formSubmitHandler(e);
            }}
          >
            <div className="save-track-modal__input-wrapper">
              <label for="track-name" class="save-track-modal__label">
                Track name
              </label>
              <input
                type="text"
                id="track-name"
                class="save-track-modal__input"
                placeholder="enter track name..."
                onChange={(e) => {
                  setTrackName(e.target.value.trim());
                }}
                minLength="3"
                maxLength="30"
                required
              ></input>
            </div>
            <div className="save-track-modal__track-info-wrapper">
              <p className="save-track-modal__track-info">
                <span>Time:</span> <span>{tracks[trackIndex].time}</span>
              </p>
              <p className="save-track-modal__track-info">
                <span>Measure:</span>{" "}
                <span>{tracks[trackIndex].measure} notes</span>
              </p>
              <p className="save-track-modal__track-info">
                <span>Length:</span>{" "}
                <span>{tracks[trackIndex].track.length} bar(s)</span>
              </p>
            </div>
            <button className="save-track-modal__btn-submit">Save track</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ state }) => ({
  trackIndex: state.trackIndex,
  tracks: state.tracks,
  customableTrack: state.customableTrack,
});

const mapDispatchToProps = {
  handleTrackSaveModalState,
};

const SaveTrackModalConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveTrackModal);

export default SaveTrackModalConsumer;
