
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Checkout({ cart, onPlaceOrder }) {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("cod");

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Giỏ hàng đang trống!");
      return;
    }

    // Chỉ mô phỏng đặt hàng, chưa xử lý thanh toán.
    onPlaceOrder();
    alert("Đặt hàng demo thành công!");
    navigate("/");
  }

  return (
    <main className="container section">
      <h1 className="page-title">Thanh toán đơn hàng</h1>

      {cart.length === 0 ? (
        <div className="center">
          <p>Giỏ hàng đang trống.</p>
          <Link to="/products" className="btn-primary">
            Mua sắm ngay
          </Link>
        </div>
      ) : (
        <div className="checkout-layout">
          <form
            id="checkout-form"
            className="checkout-box"
            onSubmit={handleSubmit}
          >
            <h2>Thông tin giao hàng</h2>

            <label>Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ tên"
              required
            />

            <label>Số điện thoại</label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              pattern="[0-9]{10,11}"
              required
            />

            <label>Địa chỉ nhận hàng</label>
            <textarea
              rows="3"
              placeholder="Nhập địa chỉ"
              required
            />

            <h2>Phương thức thanh toán</h2>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === "cod"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Thanh toán khi nhận hàng (COD)
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={payment === "bank"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Chuyển khoản ngân hàng 
            </label>
          </form>

          <div className="checkout-box">
            <h2>Đơn hàng của bạn</h2>

            {cart.map((item, index) => (
              <div className="order-item" key={index}>
                <span>{item.name}</span>
                <strong>
                  {item.price.toLocaleString("vi-VN")}đ
                </strong>
              </div>
            ))}

            <div className="order-total">
              <span>Tổng cộng</span>
              <strong>
                {total.toLocaleString("vi-VN")}đ
              </strong>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="auth-btn"
            >
              Xác nhận đặt hàng
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Checkout;
