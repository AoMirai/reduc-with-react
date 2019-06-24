import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { 
  add1Action, 
  add10Action, 
  remove1Action, 
  remove10Action, 
  resetAction } from './actions'


const CounterContainer = ({ 
  counter, 
  add1Action, 
  add10Action, 
  remove1Action, 
  remove10Action, 
  resetAction }) => (
  <div className="CounterContainer">
   {counter}

   <button id="add1" onClick={() => add1Action()}>+1</button>
   <button id="add10" onClick={() => add10Action()}>+10</button>
   <button id="remove1" onClick={() => remove1Action()}>-1</button>
   <button id="remove10" onClick={() => remove10Action()}>-10</button>
   <button id="reset" onClick={() => resetAction()}>RESET</button>
  </div>
);

const mstp = state => ({
  counter: state
});

const mdtp = dispatch => bindActionCreators({
  add1Action,
  add10Action,
  remove1Action,
  remove10Action,
  resetAction
}, dispatch)

export default connect(mstp, mdtp)(CounterContainer);



