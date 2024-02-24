import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactElement;
};

export default function Button({
  onClick,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={icon ? { gap: 4 } : {}}
      {...props}
    >
      {icon && React.cloneElement(icon, { fill: "#bbb" })}
      {children}
    </button>
  );
}
