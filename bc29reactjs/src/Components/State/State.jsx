import React, { Component } from "react";

export default class State extends Component {
  state = {
    isShowMessage: true,
  };
//   isShowMessage = true;
    handleHideMessage = () => {
        // this.state.isShowMessage = false;
        this.setState({
            isShowMessage: false,
        });
    }
    handleShowMessage = () => {
        this.setState({
            isShowMessage: true,
        });
    }

  render() {
    return (
      <div>
        <h4>State</h4>
        <div>
          <button onClick={this.handleShowMessage} className="btn btn-warning">Show</button>
          <button onClick={this.handleHideMessage} className="btn btn-light">Hiden</button>
        </div>
        {this.state.isShowMessage && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          ullam fuga harum omnis animi unde reprehenderit accusamus possimus
          delectus provident modi, labore optio sapiente eum, expedita
          accusantium doloremque quos architecto.
        </p>
        )};
        <p className="cybersoft-bg-color">State</p>
      </div>
    );
  }
}
