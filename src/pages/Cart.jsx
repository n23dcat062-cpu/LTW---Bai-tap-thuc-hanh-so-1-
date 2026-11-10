
import { Link } from "react-router";

function Cart({ cart, onRemoveFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main className="container section">
      <h1 className="page-title">Giỏ hàng của bạn</h1>

      {cart.length === 0 ? (
        <div className="center">
          <p>Giỏ hàng đang trống.</p>
          <Link to="/products" className="btn-primary">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="content-box">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name}</span>

              <strong>
                {item.price.toLocaleString("vi-VN")}đ
              </strong>

              <button
                onClick={() => onRemoveFromCart(index)}
              >
                Xóa
              </button>
            </div>
          ))}

          <h2 className="cart-total">
            Tổng tiền: {total.toLocaleString("vi-VN")}đ
          </h2>

          <div className="center">
            <Link to="/checkout" className="btn-primary">
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
