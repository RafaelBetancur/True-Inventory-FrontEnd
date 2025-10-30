import type { ScrollProps } from './Scroll.model';
import styles from './Scroll.module.css'


export const Scroll = ({
    width,
    height,
    color,

}: ScrollProps) => {
    const styleProperties = {
        "--width": width,
        "--height": height,
        "--color": color
    } as React.CSSProperties;
    return (
        <>
            <div style={styleProperties}>
                <div className={`overflow-auto border p-3 ${styles.scroll}`}>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                    <p>Texto o contenido largo...</p>
                </div>
            </div>
        </>
    )
}
