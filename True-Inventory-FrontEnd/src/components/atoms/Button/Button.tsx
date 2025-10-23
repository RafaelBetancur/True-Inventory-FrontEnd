import type { BtnProps } from './Button.model';
import styles from './Button.module.css'


export const Button = ({type,
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
    value
}:BtnProps) => {
  const styleProperties = {
    "--width":width,
    "--height":height,
    "--color":color,
    "--fontSize":fontSize,
    "--border":border,
    "--borderColor":borderColor,
    "--borderRadius":borderRadius,
    "--padding":padding,
    "--margin":margin,
    "--bgColor":bgColor
} as React.CSSProperties;
    return (
 <>
    <div style={styleProperties}>
        <button type={type} className={styles.Btn}>{value}</button>
    </div>
</>
  )
}