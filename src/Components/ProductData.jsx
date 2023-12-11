import { useEffect, useState } from "react";

const ProductData = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setImageURL(data[0].image))
      .catch((error) => console.error(error));
  }, []);

  // Expose the fetched data (imageURL) for external use
  return imageURL;
};

export default ProductData;
