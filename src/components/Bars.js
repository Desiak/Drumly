import React from 'react'
import { connect } from 'react-redux';

const Bars=(props)=> {
    return (
        <div className="input bars-input">
            Number of bars: {props.bars}
        </div>
    )
}

const mapStateToProps=store=>({
    bars: store.state.bars
});

const BarsConsumer = connect(mapStateToProps)(Bars);

export default BarsConsumer;
