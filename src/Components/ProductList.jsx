import "./ProductList.css";
import ProductCard from "./ProductCard";
import Turismo from "../assets/turismo.jpeg";
import ProductData from "./ProductData";

const ProductList = () => {
  console.log(ProductData);
  return (
    <>
      <div className="product-list">
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 1"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 2"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />{" "}
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 3"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />{" "}
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 4"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />{" "}
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 5"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />{" "}
        <ProductCard
          imageSource={Turismo}
          name="Gran Turismo 6"
          description="Whether you're an avid racer, whether competitive or casual, a collector, tuner, livery designer, or photographer – discover your path with an extensive array of game modes. These include beloved options like GT Campaign, Arcade, and Driving School."
          price={50}
        />
      </div>
    </>
  );
};

export default ProductList;
