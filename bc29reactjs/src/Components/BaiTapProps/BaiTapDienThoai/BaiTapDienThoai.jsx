import React, { Component } from "react";
import dataPhone from "../../../Data/dataPhone.json";
import ChiTietSP from "./ChiTietSP";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoai extends Component {
  state = {
    selectedPhone: dataPhone[0],
    cartList: [],
    sumCart: 0,
  };

  addToCart = (phone) => {
    let sum = 0;
    const data = [...this.state.cartList];
    const idx = data.findIndex((ele) => ele.maSP === phone.maSP);
    if (idx !== -1) {
      data[idx].soLuong += 1;
    } else {
      data.push({
        ...phone,
        soLuong: 1,
      });
    }
    data.forEach((ele) => {
      sum += ele.soLuong;
    });
    this.setState({
      cartList: data,
      sumCart: sum,
    });
  };

  handleQuantity = (phone, isIncrease) => {
    let sum = 0;
    const data = [...this.state.cartList];
    const idx = data.findIndex((ele) => ele.maSP === phone.maSP);
    if (idx === -1) {
      alert("Khong tim thay san pham");
      throw new Error("Khong tim thay san pham");
    }
    if (isIncrease) {
      data[idx].soLuong += 1;
      // console.log("check");
    } else if (data[idx].soLuong > 1) {
      data[idx].soLuong -= 1;
    } else if (window.confirm("Delete this product ?")) {
      data.splice(idx, 1);
    }

    //   if (idx !== -1) {
    //     if (isIncrease) {
    //       data[idx].soLuong += 1;
    //       // console.log("check");
    //     }
    //    else {
    //     if (data[idx].soLuong > 1) {
    //       data[idx].soLuong -= 1;
    //     }
    //     else if (window.confirm("Delete this product ?")) {
    //       data.splice(idx, 1);
    //     }
    //   }
    // }
    data.forEach((ele) => {
      sum += ele.soLuong;
    });

    this.setState({
      cartList: data,
      sumCart: sum,
    });
  };

  selectPhone = (phone) => {
    this.setState({ selectedPhone: phone });
  };

  render() {
    const {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.state.selectedPhone;

    return (
      <div className="container">
        {/* MODAL */}
        <GioHang
          handleQuantity={this.handleQuantity}
          sumCart={this.state.sumCart}
          cartList={this.state.cartList}
        />
        <DanhSachDienThoai
          selectPhone={this.selectPhone}
          addToCart={this.addToCart}
        />
        <ChiTietSP selectedPhone={this.state.selectedPhone} />
      </div>
    );
  }
}
