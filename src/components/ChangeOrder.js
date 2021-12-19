import React from "react";
import NumberBox from "./NumberBox";
import { connect } from "react-redux";
import { handleBarMod, updateTrack } from "../actions/actions";
import _ from "lodash";

function ChangeOrder({
  innerRef,
  orderedTrack,
  navToBar,
  listRef,
  updateTrack,
  customableTrack,
  activeBarIndex
}) {

  
  const handleBarState = (action) => {
    let updatedBarsState = _.cloneDeep(customableTrack);
    switch (action) {
      case "multiply":
        if (updatedBarsState.length >= 8) return;
        updatedBarsState.splice(activeBarIndex + 1, 0, {
          id: Math.floor(Math.random() * 1000),
          value: _.cloneDeep(updatedBarsState[activeBarIndex].value),
        });
        break;
      case "remove":
        if (updatedBarsState.length <= 1) return;
        updatedBarsState.splice(activeBarIndex, 1);
        break;
      case "clear":
        updatedBarsState[activeBarIndex].value=updatedBarsState[activeBarIndex].value.map(path=>path.map(()=>0))
        break;
      default:
        break;
    }
    updateTrack(updatedBarsState);
  };

  return (
    <div className="change-order-section" ref={innerRef}>
      <button className="arrow arrow-prev" onClick={() => navToBar("-")}>
        &#8249;
      </button>
      <div className="wrapper control-wrapper">
        <div className="bar-control-section">
          <span class="action-label">Bar actions:</span>
          <span class={`action-btn btn-rm ${customableTrack.length<=1?"disabled":null}`} onClick={()=>{handleBarState("remove")}}>remove <i class="fas fa-trash-alt"></i></span>
          <span class={`action-btn btn-add ${customableTrack.length>=8?"disabled":null}`} onClick={()=>{handleBarState("multiply")}}>copy <i class="fas fa-plus-square"></i></span>
          <span class="action-btn btn-clear" onClick={()=>{handleBarState("clear")}}>clear <i class="fas fa-eraser"></i></span>
        </div>
        <ul className="bars-order-list" ref={listRef} >
          {orderedTrack
            .sort((a, b) => a.order - b.order)
            .map((bar, index) => {
              return (
                <NumberBox
                  bar={bar}
                  navToBar={navToBar}
                  activeBarIndex={activeBarIndex}
                  barIndex={index}
                  key={index}
                  trackLength={customableTrack.length}
                />
              );
            })}
        </ul>
      </div>
      <button className="arrow arrow-next" onClick={() => navToBar("+")}>
        &#8250;
      </button>
    </div>
  );
}

const mapStateToProps = (store) => ({
  customableTrack: store.state.customableTrack,
});

const mapDispatchToProps = {
  handleBarMod,
  updateTrack,
};

const OrderSectionConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeOrder);

export default OrderSectionConsumer;
