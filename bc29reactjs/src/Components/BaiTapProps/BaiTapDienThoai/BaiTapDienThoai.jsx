import React, { Component } from 'react'

export default class BaiTapDienThoai extends Component {
  render() {
    return (
      <div className="container">
        {/* MODAL */}
        <div>
          <div className="d-flex justify-content-end mb-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#gioHang"
            >
              GIỎ HÀNG (0)
            </button>
          </div>
          <div
            className="modal fade"
            id="gioHang"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Mã SP</th>
                        <th>Hình Ảnh</th>
                        <th>Tên SP</th>
                        <th>Số lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành Tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            width={50}
                            src="./images/vsphone.jpg"
                            className="img-fluid"
                            alt="phone"
                          />
                        </td>
                        <td>VinSmart Live</td>
                        <td>
                          <button className="btn btn-warning">-</button>
                          <span className="mx-1">1</span>
                          <button className="btn btn-warning">+</button>
                        </td>
                        <td>3500</td>
                        <td>7000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT LIST */}
        <h4>PRODUCT LIST</h4>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="./images/vsphone.jpg" alt />
              <div className="card-body">
                <h4 className="card-title">VinSmart Live</h4>
                <div>
                  <button className="btn btn-success">XEM CHI TIẾT</button>
                  <button className="btn btn-danger">THÊM GIỎ HÀNG</button>                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="./images/meizuphone.jpg" alt />
              <div className="card-body">
                <h4 className="card-title">Meizu</h4>
                <div>
                  <button className="btn btn-success">XEM CHI TIẾT</button>
                  <button className="btn btn-danger">THÊM GIỎ HÀNG</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="./images/applephone.jpg" alt />
              <div className="card-body">
                <h4 className="card-title">IPhone XS Max</h4>
                <div>
                  <button className="btn btn-success">XEM CHI TIẾT</button>
                  <button className="btn btn-danger">THÊM GIỎ HÀNG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5">
            <h4>Vinsmart Live</h4>
            <img src="./images/vsphone.jpg" className="img-fluid" alt="phone" />
          </div>
          <div className="col-7">
            <h4 className="mb-5">THÔNG SỐ KỸ THUẬT</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>AMOLED, FHD+ 2232 x 1080 pixels</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>Android 9.0 (Pie)</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>20 MP</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>Chính 48 MP & Phụ 8 MP, 5 MP</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>64 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
