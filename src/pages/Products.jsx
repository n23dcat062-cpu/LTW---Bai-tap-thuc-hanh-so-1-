
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ onAddToCart }) {
  return (
    <main className="container section">
      <h1 className="page-title">
        Tất cả sản phẩm
      </h1>

      <p className="page-description">
        Khám phá các sản phẩm chăm sóc cá nhân
        tại CareBeauty.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;
