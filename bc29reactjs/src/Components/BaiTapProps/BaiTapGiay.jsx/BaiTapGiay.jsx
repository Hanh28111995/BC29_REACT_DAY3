 import React, { Component } from "react";

import danhSachGiay from "../../../Data/data.json";
import Giay from "./Giay";

export default class BaiTapGiay extends Component {
  colors = ["primary", "success", "danger"];
  renderShoesList = () => {
    const content = danhSachGiay.map((ele) => {
      return (
        <div className="col-4" key={ele.id}>
          <Giay ClickDetail={this.ClickDetail} item={ele}>
            {this.colors.map((item, index) => {
              return (
                <span key={index} className={`badge badge-${item}`}>
                  {item}
                </span>
              );
            })}
          </Giay>
        </div>
      );
    });
    return content;
  };

  ClickDetail = (description) => {
    alert(description);
    // console.log("1");
  };

  render() {
    return <div className="row">{this.renderShoesList()}</div>;
  }
}
