//types
export const CHANGE_VOLUME = "CHANGE_VOLUME";
export const CHANGE_TEMPO = "CHANGE_TEMPO";
export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SELECT_TRACK = "SELECT_TRACK";
export const PLAY_TOGGLE = "PLAY_TOGGLE";
export const LOAD_TRACK = "LOAD_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const CHANGE_BARS_NUMBER = "CHANGE_BARS_NUMBER";
export const LOAD_DRUMPADS = "LOAD_DRUMPADS";
export const CHANGE_BAR = "CHANGE_BAR";
export const CHANGE_DRUMSET = "CHANGE_DRUMSET";
export const LOAD_DEFAULT_TRACKS = "LOAD_DEFAULT_TRACKS";

//actions
export const changeTempo = (value, direction = "change") => {
  let updatedValue;
  if (direction === "+") {
    updatedValue = value + 1;
  } else if (direction === "-") {
    updatedValue = value - 1;
  } else {
    //change event
    updatedValue = Number(value);
  }
  return {
    type: CHANGE_TEMPO,
    payload: {
      updatedValue,
    },
  };
};

export const trackSelect = (index) => {
  return {
    type: "SELECT_TRACK",
    payload: {
      index,
    },
  };
};

export const play = () => {
  return {
    type: "PLAY_TOGGLE",
    payload: {},
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
    payload: {},
  };
};

export const loadCurrentTrack = (track, qty) => {
  let updatedTrack = [];

  track.track.forEach((bar) => {
    updatedTrack.push({ value: bar, id: Math.floor(Math.random() * 1000) });
  });
  return {
    type: "LOAD_TRACK",
    payload: {
      updatedTrack,
    },
  };
};
export const updateTrack = (updatedTrack) => {
  return {
    type: "UPDATE_TRACK",
    payload: {
      updatedTrack,
    },
  };
};

export const changeNumOfBars = (direction) => {
  return {
    type: "CHANGE_BARS_NUMBER",
    payload: {
      direction,
    },
  };
};

export const loadDrumPads = (drumpads) => {
  return {
    type: "LOAD_DRUMPADS",
    payload: {
      drumpads,
    },
  };
};

export const changeDrumset = (drumset, buffers) => {
  return {
    type: "CHANGE_DRUMSET",
    payload: {
      drumset,
      buffers,
    },
  };
};

export const loadDefaultTracks = (data) => {
  return {
    type: "LOAD_DEFAULT_TRACKS",
    payload: {
      tracks: data,
    },
  };
};
