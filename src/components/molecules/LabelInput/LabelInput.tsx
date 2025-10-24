
import { Input, Label } from '../../atoms/index'
import type { LabelInputProps } from './LabelInput.model';
import styles from './LabelInput.module.css'

export const LabelInput = ({
    fontFamily,
    type,
    placeholder,
    width,
    height,
    color,
    fontSize,
    padding,
    bgColor
}: LabelInputProps) => {
    const styleProperties = {
        "--width": width,
        "--height": height,
        "--color": color,
        "--fontSize": fontSize,
        "--padding": padding,
        "--placeholder": placeholder,
        "--fontFamily": fontFamily,
        "--bgColor":bgColor
    };
    return (
        <>
        <div style={styleProperties} className={styles.container}>
            <Label
                textLabel="Usuario"
                fontFamily="Open Sans"
            />
            <Input
                type="text"
                placeholder="Ingrese su usuario"
                width="20rem"
                height="6vh"
                padding="0px 10px"
                fontFamily="Open Sans"
            />
        </div>
        </>
    )
}
