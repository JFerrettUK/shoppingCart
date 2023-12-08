import "./ProductCard.css";

const ProductCard = ({ name }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      {/* Other product card content... */}
    </div>
  );
};

export default ProductCard;
