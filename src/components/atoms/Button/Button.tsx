import type { BtnProps } from "./Button.model";
import styles from "./Button.module.css";

export const Button = ({
  type = "button",
  bgColor,
  width,
  height,
  color,
  fontSize,
  border,
  borderColor,
  borderRadius,
  padding,
  margin,
  value,
  onClick, // ✅ ahora sí la recibimos
  ...rest // por si en el futuro pasas disabled, etc.
}: BtnProps) => {
  const styleProperties = {
    "--width": width,
    "--height": height,
    "--color": color,
    "--fontSize": fontSize,
    "--border": border,
    "--borderColor": borderColor,
    "--borderRadius": borderRadius,
    "--padding": padding,
    "--margin": margin,
    "--bgColor": bgColor,
  } as React.CSSProperties;

  return (
    <div style={styleProperties}>
      <button
        type={type}
        className={styles.Btn}
        onClick={onClick}
        {...rest}
      >
        {value}
      </button>
    </div>
  );
};
