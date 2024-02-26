import React from "react";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

export default function Input({ labelClassName, label, ...props }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={`${styles.label} ${labelClassName}`}>{label}</div>
      <input className={styles.input} {...props} />
    </div>
  );
}
