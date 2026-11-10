
import { Link } from "react-router";

function NotFound() {
  return (
    <main className="container section center">
      <h1 className="page-title">404 - Không tìm thấy trang</h1>
      <p>Đường dẫn bạn truy cập không tồn tại.</p>
      <Link to="/" className="btn-primary">
        Quay về trang chủ
      </Link>
    </main>
  );
}

export default NotFound;
