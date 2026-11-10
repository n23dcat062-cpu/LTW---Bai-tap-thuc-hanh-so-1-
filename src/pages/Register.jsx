
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Demo giao diện: không tạo tài khoản thật,
    // không lưu mật khẩu trong trình duyệt.
    alert("Đã kiểm tra biểu mẫu đăng ký thành công!");
    navigate("/login");
  }

  return (
    <main className="auth-page">
      <div className="auth-box">
        <h1>CareBeauty</h1>
        <h2>Đăng ký tài khoản</h2>
        <p>Tạo tài khoản để bắt đầu mua sắm.</p>

        <form onSubmit={handleSubmit}>
          <label>Họ và tên</label>
          <input
            type="text"
            name="name"
            placeholder="Nhập họ tên"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Nhập email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            placeholder="Ít nhất 6 ký tự"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            Đăng ký
          </button>
        </form>

        <p>
          Đã có tài khoản?{" "}
          <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
