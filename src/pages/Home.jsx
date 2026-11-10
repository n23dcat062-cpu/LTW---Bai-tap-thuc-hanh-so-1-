
import { Link } from "react-router";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ onAddToCart }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-label">
              CHĂM SÓC BẢN THÂN MỖI NGÀY
            </span>
            <h1>
              Vẻ đẹp bắt đầu từ
              <span> sự chăm sóc</span>
            </h1>
            <p>
              Khám phá các sản phẩm chăm sóc da,
              tóc và cơ thể dành cho bạn.
            </p>
            <Link to="/products" className="btn-primary">
              Khám phá sản phẩm
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900"
            alt="Sản phẩm chăm sóc cá nhân"
          />
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <div className="categories">
          <div>🧴 Chăm sóc da</div>
          <div>🫧 Chăm sóc tóc</div>
          <div>🌸 Chăm sóc cơ thể</div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        <div className="center">
          <Link to="/products" className="btn-primary">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
