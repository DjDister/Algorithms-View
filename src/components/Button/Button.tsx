import React from "react";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  children,
  icon,
}: {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactElement;
}) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={icon ? { gap: 4 } : {}}
    >
      {icon && React.cloneElement(icon, { fill: "#bbb" })}
      {children}
    </button>
  );
}
