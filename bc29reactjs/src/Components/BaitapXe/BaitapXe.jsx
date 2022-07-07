import React, { Component } from "react";

export default class BaitapXe extends Component {
  state = {
    imageURL: "./img/products/black-car.jpg",
  };
  changeColor = (color) => {
    this.setState({
      imageURL: `./img/products/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div>
        <h4>BaitapXe</h4>
        <div className="row">
          <div className="col-7">
            <img className="img-fluid" src={this.state.imageURL} />
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">Colors</div>
              <div className="card-body">
                <div
                  onClick={() => {
                    this.changeColor("black");
                  }}
                >
                  <img width={70} src="./img/icons/icon-black.jpg" />
                  <span>BLACK</span>
                </div>
                <div
                  onClick={() => {
                    this.changeColor("steel");
                  }}
                >
                  <img width={70} src="./img/icons/icon-steel.jpg" />
                  <span>STEEL</span>
                </div>
                <div
                  onClick={() => {
                    this.changeColor("silver");
                  }}
                >
                  <img width={70} src="./img/icons/icon-silver.jpg" />
                  <span>SILVER</span>
                </div>
                <div
                  onClick={() => {
                    this.changeColor("red");
                  }}
                >
                  <img width={70} src="./img/icons/icon-red.jpg" />
                  <span>RED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
