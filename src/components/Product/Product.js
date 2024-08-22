import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = ({ title, name, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    const currentSizePrice = sizes.find((size) => size.name === currentSize);
    return basePrice + currentSizePrice.additionalPrice;
  }, [sizes, currentSize, basePrice]);

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          title={title}
          price={price}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Product;