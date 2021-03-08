import React from 'react';
import styles from './Button.module.css';

export default function Button({
  title = '',
  onClick = null,
  type = 'button',
  disabled = false,
  role = '',
}) {
  return (
    <button
      disabled={disabled}
      className={ styles.button}
      onClick={onClick}
      type={type}
      role={role}
    >
      {title}
    </button>
  );
}
