import { useEffect, useState } from "react";

const ProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const productsWithIds = data.map((product, index) => ({
          ...product,
          id: index,
        }));
        setProducts(productsWithIds);
      })
      .catch((error) => console.error(error));
  }, []);

  return products;
};

export default ProductData;
