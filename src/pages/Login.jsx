
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Chỉ mô phỏng đăng nhập cho bài tập frontend.
    // Không gửi hoặc lưu mật khẩu.
    onLogin(email);
    alert("Đăng nhập demo thành công!");
    navigate("/");
  }

  return (
    <main className="auth-page">
      <div className="auth-box">
        <h1>CareBeauty</h1>
        <h2>Đăng nhập</h2>
        <p>Chào mừng bạn quay trở lại!</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Đăng nhập
          </button>
        </form>

        <p>
          Chưa có tài khoản?{" "}
          <Link to="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
