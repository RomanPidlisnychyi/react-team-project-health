import React from 'react';
import styles from './Button.module.css';

export default function Button({
  title = '',
  onClick = null,
  type = 'button',
  disabled = false,
  role = '',
  allow = false,
}) {
  const customHover = `${styles.button} ${allow ? styles.allow : styles.normal}`;

  return (
    <button
      disabled={disabled}
      className={customHover}
      onClick={onClick}
      type={type}
      role={role}
    >
      {title}
    </button>
  );
}
