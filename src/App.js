import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect,Provider } from "react-redux";
import {createStore} from redux;
import {reducer} from "./ActionsAndReducers.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from "./Board.js";

configure({ adapter: new Adapter() });
const Tapp=connect(mapStateToProps,mapDispatchToProps)(Board);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}/>
      </div>
    );
  }
}
const store=createStore(reducer);

export default App;
