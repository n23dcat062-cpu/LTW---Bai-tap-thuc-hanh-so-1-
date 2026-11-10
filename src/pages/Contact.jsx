
function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Đã ghi nhận biểu mẫu minh họa!");
    event.currentTarget.reset();
  }

  return (
    <main className="container section">
      <h1 className="page-title">Liên hệ với chúng tôi</h1>

      <div className="content-box">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Họ và tên</label>
          <input type="text" required placeholder="Nhập họ tên" />

          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Nhập email"
          />

          <label>Nội dung</label>
          <textarea
            rows="5"
            required
            placeholder="Nhập nội dung liên hệ"
          />

          <button type="submit" className="btn-primary">
            Gửi liên hệ
          </button>
        </form>
        <p className="form-note">
          Đây là biểu mẫu minh họa, chưa gửi dữ liệu đến máy chủ.
        </p>
      </div>
    </main>
  );
}

export default Contact;
