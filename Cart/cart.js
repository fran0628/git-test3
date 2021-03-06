import React from "react";
import productItem from "./components/productItem";
import summary from "./components/summary";
import buyer from "./components/buyer";
import deliverynPayment from "./components/deliverynPayment";

function cart() {
  // const background = {
  //   backgroundImage: `url(${""})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundAttachment: "fixed",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };

  return (
    <>
      <div className="">
        <h3 className="text-center">購物車清單</h3>
        <div className="row">
          <productItem />
          <summary />
          <buyer />
          <deliverynPayment />
        </div>
      </div>

      {/* <div className="container" style={background}>
        <div className="row">
          
          <table className="table table-success table-striped table-hover container">
            <thead>
              <tr>
                <th>商品圖片</th>
                <th>商品名稱</th>
                <th>商品價格</th>
                <th>商品數量</th>
                <th>商品小計</th>
                <th>商品總價</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2</th>
                <td>美白水果盒</td>
                <td>$500</td>
                <td>
                  <input type="number" min="1"></input>
                </td>
                <td>x</td>
                <td>x</td>
              </tr>
            </tbody>
          </table>
          <h3 className="container">付款摘要</h3>
          <table className="table table-success container">
            <thead>
              <tr>
                <th scope="col">商品圖片</th>
                <th scope="col">商品數量</th>
                <th scope="col">商品總價</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="container">配送方式 & 付款方式</h3>
      <div class="form-check container">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked
        ></input>
        <label class="form-check-label" for="flexCheckDefault">
          宅配
        </label>
      </div>
      <div class="form-check container">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked
        ></input>
        <label class="form-check-label" for="flexCheckDefault">
          貨到付款
        </label>
      </div>
      <h3 className="container">訂購人資訊</h3>
      <form class="container">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            購買姓名
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="王x名"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            連絡電話
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="09xxxxxxxx"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            寄送地址
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="台北市信義區吳興街177號"
            ></input>
          </div>
          <button type="submit" class="btn btn-success container-fluid mt-3">
            確認並送出訂單
          </button>
        </div>
      </form> */}
    </>
  );
}
export default cart;
