import { Label, Title } from "../../atoms";
import type { TitleSubtitleProps } from "./TitleSubtitle.model";
import styles from './TitleSubtitle.module.css'


export const TitleSubtitle = ({
    width
}: TitleSubtitleProps) => {
    const styleProperties = {
        "--width":width
    } as React.CSSProperties;
    return (
        <>
            <div style={styleProperties} className={styles.container}>
                <Title />
                <Label
                    textLabel="Productos"
                    fontSize="32px"
                    fontWeight="bold"
                />
            </div>
        </>
    )
}