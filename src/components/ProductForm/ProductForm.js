import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import styles from "./ProductForm.module.scss";
import PropTypes from "prop-types";

const ProductForm = ({
  currentSize,
  setCurrentSize,
  sizes,
  currentColor,
  setCurrentColor,
  colors,
  title,
  price,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedProduct = {
      Name: title,
      Price: price,
      Size: currentSize,
      Color: currentColor,
    };

    console.log("Summary: ", selectedProduct);
  };
  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        sizes={sizes}
      />
      <OptionColor
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        colors={colors}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductForm;