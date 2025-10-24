import type { SelectProps } from "./Menu.model";
import styles from "./Menu.module.css";

export const Menu = ({
  label,
  options,
  width,
  onChange,
  defaultOption
}: SelectProps) => {
  const styleProperties = {
    "--width": width,
  } as React.CSSProperties;

  return (
    <div style={styleProperties} className={styles.selectContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        className={styles.select}
        onChange={(e) => onChange?.(e.target.value)}
        defaultValue={defaultOption}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
