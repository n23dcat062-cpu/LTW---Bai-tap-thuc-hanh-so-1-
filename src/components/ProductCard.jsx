
function ProductCard({ product, onAddToCart }) {
  const formattedPrice = product.price.toLocaleString("vi-VN");

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>{formattedPrice}đ</strong>
          <button onClick={() => onAddToCart(product)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
