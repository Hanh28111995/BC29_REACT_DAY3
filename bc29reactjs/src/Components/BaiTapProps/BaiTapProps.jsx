import React, { Component } from "react";
import BaiTapDienThoai from "./BaiTapDienThoai/BaiTapDienThoai";
import BaiTapGiay from "./BaiTapGiay/BaiTapGiay";
import BaiTapModal from "./BaiTapModal/BaiTapModal";

export default class BaiTapProps extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Bai tap giay
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Bai tap dien thoai
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Bai tap modal
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane w3-animate-right fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <BaiTapGiay />
            </div>
            <div
              className="tab-pane w3-animate-right fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <BaiTapDienThoai />
            </div>
            <div
              className="tab-pane w3-animate-right fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <BaiTapModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
