import React, { Component } from "react";

export default class GioHang extends Component {
  
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({this.props.sumCart})
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
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                   {this.props.cartList.map((ele)=>
                   { return (
                    <tr>
                    <td>1</td>
                    <td>
                      <img
                        width={50}
                        src={ele.hinhAnh}
                        className="img-fluid"
                        alt="phone"
                      />
                    </td>
                    <td>{ele.tenSP}</td>
                    <td>
                      <button className="btn btn-warning" onClick={()=> this.props.handleQuantity(ele, false)}>-</button>
                      <span className="mx-1">{ele.soLuong}</span>
                      <button className="btn btn-warning" onClick={()=> this.props.handleQuantity(ele, true)}>+</button>
                    </td>
                    <td>{ele.giaBan.toLocaleString()}</td>
                    <td>{(ele.soLuong*ele.giaBan).toLocaleString()}</td>
                    <td>
                    <button className="btn btn-danger" >Xoa</button>
                    </td>
                  </tr>
                   )
                   })
                   }
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
    )
  }
}
