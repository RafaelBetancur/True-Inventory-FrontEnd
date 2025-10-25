import type { LabelProps } from "./Label.model";
import styles from './Label.module.css'

export const Label = ({
    width,
    height,
    color,
    fontSize,
    fontWeight,
    padding,
    textLabel
}: LabelProps) => {
    const styleProperties = {
        "--width": width,
        "--height": height,
        "--color": color,
        "--fontSize": fontSize,
        "--padding": padding,
        "--fontWeight":fontWeight
    } as React.CSSProperties;
    return (
        <>
            <div style={styleProperties}>
                <label className={`form-label ${styles.label}`}>{textLabel}</label>
            </div>
        </>
    )
}