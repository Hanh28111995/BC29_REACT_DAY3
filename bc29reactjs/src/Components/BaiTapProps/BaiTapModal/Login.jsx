import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="text" className="form-control"/>
        </div>
      </div>
    );
  }
}
