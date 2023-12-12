/* eslint-disable react/prop-types */
import "./ProductList.css";
import ProductCard from "./ProductCard";
import ProductData from "./ProductData";

const ProductList = ({ basket, setBasket }) => {
  const products = ProductData();

  if (!products || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageSource={product.image}
          name={product.title}
          description={product.description}
          price={product.price}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
};

export default ProductList;
