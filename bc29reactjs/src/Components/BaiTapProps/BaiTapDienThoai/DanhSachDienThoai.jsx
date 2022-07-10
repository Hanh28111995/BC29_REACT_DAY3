import React, { Component } from 'react'
import dataPhone from '../../../Data/dataPhone.json';
import DienThoai from './DienThoai';
import GioHang from './GioHang';


export default class DanhSachDienThoai extends Component {
    renderPhoneList =() => {
        return dataPhone.map((ele) => {
          return <DienThoai 
          addToCart={this.props.addToCart}
          selectPhone={this.props.selectPhone} key = {ele.maSP} phone={ele} />
        });
      };

  render() {
    return (
      <div>
        <h4>PRODUCT LIST</h4>        
        <div className="row">
          {this.renderPhoneList()}
        </div>
      </div>
    )
  }
}
