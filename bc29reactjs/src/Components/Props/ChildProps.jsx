import React, { Component } from "react";

export default class ChildProps extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.movie.imageUrl} />
        <div className="card-body">
          <h4 className="card-title">{this.props.movie.name}</h4>
          <div>
          <button className="btn btn-info">xem chi tiet</button>
          </div>
        </div>
      </div>
    );
  }
}
