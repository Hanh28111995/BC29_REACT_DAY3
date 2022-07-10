import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    const {hinhAnh, tenSP} = this.props.phone ;
    return (
      <div className="col-4" >
        <div className="card">
          <img className="card-img-top" src={hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <div>
              <button className="btn btn-success" onClick={()=> this.props.selectPhone(this.props.phone)}>XEM CHI TIẾT</button>
              <button className="btn btn-danger" onClick={()=> this.props.addToCart(this.props.phone)}>THÊM GIỎ HÀNG</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
