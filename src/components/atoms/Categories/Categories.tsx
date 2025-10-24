import styles from "./Categories.module.css";
import type { CategoriesProps } from "./Categories.model";


export const Categories = ({
  text,
  backgroundColor,
  color,
  borderColor,
}: CategoriesProps) => {
  const styleProperties = {
    "--text":text,
    "--backgroundColor":backgroundColor,
    "--color":color,
    "--borderColor":borderColor
  } as React.CSSProperties;

  return (
    <button className={styles.tag} style={styleProperties}>
      {text}
    </button>
  );
};