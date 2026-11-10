
import { NavLink } from "react-router";

function Navbar({ cartCount = 0, user, onLogout }) {
  return (
    <header className="header">
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          Care<span>Beauty</span>
        </NavLink>

        <nav className="nav-menu">
          <NavLink to="/" end>
            Trang chủ
          </NavLink>

          <NavLink to="/products">
            Sản phẩm
          </NavLink>

          <NavLink to="/about-us">
            Giới thiệu
          </NavLink>

          <NavLink to="/contact">
            Liên hệ
          </NavLink>

          <NavLink to="/cart">
            Giỏ hàng ({cartCount})
          </NavLink>

          {user ? (
            <>
              <span>{user}</span>
              <button onClick={onLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                Đăng nhập
              </NavLink>

              <NavLink to="/register">
                Đăng ký
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
