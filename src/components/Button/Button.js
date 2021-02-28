import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button
      type="submit"
      value="submit"
      className={styles.button}
      // onClick={onLoadMore}
    >
      Похудеть
    </button>
  );
};

// Button.propTypes = {
//   props: PropTypes.exact({
//     onLoadMore: PropTypes.func.isRequired,
//   }),
// };

export default Button;
