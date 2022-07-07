import React, { Component } from "react";
import "./style.css";
import style from "./style.module.css";

//3 cach :
// stylesheet  => tao 1 file css thong thuong
//module => tao 1 file css.module.css
//inline

export default class Styling extends Component {
  state = {
    fontSize: 30,
  };
  handleInc = () => {
    this.setState({
      fontSize: this.state.fontSize + 10,
    });
  };

  handleDec = () => {
    this.setState({
      fontSize: this.state.fontSize - 10,
    });
  };

  render() {
    return (
      <div>
        <h4>Styling</h4>
        <div>
          <button onClick={this.handleDec} className="btn btn-warning">Decrease</button>
          <button onClick={this.handleInc} className="btn btn-light">Increse</button>
        </div>
        <p className="cybersoft-bg-color">Stylesheet</p>

        <p className={style.cybersoft}>Module</p>

        <p style={{ background: "blue", fontSize: this.state.fontSize }}>Inline</p>

        <p className={`${style.cybersoft} ${style["cybersoft-color"]}`}>
          Module
        </p>
      </div>
    );
  }
}
