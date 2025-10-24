import { Categories, Label } from "../../atoms";
import type { ProductCardProps } from "./ProductCard.model"
import styles from './ProductCard.module.css'

export const ProductCard = ({
    width,
    bgColor,
    borderRadius,
    boxShadow,
    border,
    fontFamily,
    fontSize,
    color

}: ProductCardProps) => {
    const styleProperties = {
        "--width": width,
        "--bgColor": bgColor,
        "--borderRadius": borderRadius,
        "--boxShadow": boxShadow,
        "--border": border,
        "--fontFamily": fontFamily,
        "--fontSize": fontSize,
        "--color": color
    } as React.CSSProperties;
    return (
        <>
            <div style={styleProperties} className={styles.container}>
                <div className={styles.imgBox}>
                    <div className={styles.img}>

                    </div>
                </div>
                <div className={styles.descriptionBox}>
                    <div className={styles.description}>
                        <Label
                            textLabel="Camiseta"
                            fontFamily="Open Sans"
                            fontSize="32px"
                            fontWeight="bold"
                            color="#333"
                        />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam blanditiis maiores iure explicabo, est vel praesentium porro dolor atque commodi eligendi. Laudantium aut sit illum quia nobis consequuntur quidem.</p>
                    </div>
                    <div className={styles.categoriesContainer}>
                        <Categories text="Moda" />
                        <Categories text="Ropa" />
                        <Categories text="Camisas" />
                    </div>
                </div>
                <div className={styles.priceBox}>
                    <Label
                        textLabel="15$"
                        fontFamily="Open Sans"
                        fontSize="32px"
                        fontWeight="bold"
                        color="#333"
                    />
                    <Label
                        textLabel="150 Unidades"
                        fontFamily="Open Sans"
                        fontSize="16px"
                        color="#333"
                    />
                </div>
            </div>
        </>
    )
}