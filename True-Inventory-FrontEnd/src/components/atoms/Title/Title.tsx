import type { TitleProps } from "./Title.model"
import styles from './Title.module.css'

export const Title = ({
    fontSize,
    fontFamily,
    color,
    width,
    height
}: TitleProps) => {
    const styleProperties = {
        "--fontSize":fontSize,
        "--fontFamily":fontFamily,
        "--color":color,
        "--width":width,
        "--height":height
    };
    return (
        <>
            <div style={styleProperties} className={styles.container}>
                <h1>True Inventory</h1>
            </div>
        </>
    )
}
