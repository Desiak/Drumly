import React from 'react'
import { connect } from 'react-redux';

const Note=(props)=> {
    return (
        <div className="input note-input">
            Single note value: {props.singleNoteValue}
        </div>
    )
}

const mapStateToProps=store=>({
    singleNoteValue: store.state.note
});

const NoteConsumer = connect(mapStateToProps)(Note);

export default NoteConsumer;
