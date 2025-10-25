import { Button, Categories, Label } from "../../atoms";
import type { ProductCardProps } from "./ProductCard.model";
import styles from './ProductCard.module.css';

export const ProductCard = ({
  isAdmin = false,
  onDelete,
  width,
  bgColor,
  borderRadius,
  boxShadow,
  border,
  fontSize,
  color,
  name,
  description,
  image,
  price,
  quantity
}: ProductCardProps) => {

  const styleProperties = {
    "--width": width,
    "--bgColor": bgColor,
    "--borderRadius": borderRadius,
    "--boxShadow": boxShadow,
    "--border": border,
    "--fontSize": fontSize,
    "--color": color
  } as React.CSSProperties;

  return (
    <div style={styleProperties} className={styles.container}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={image}/>
      </div>

      <div className={styles.descriptionBox}>
        <div className={styles.description}>
          <Label
            textLabel={name}
            fontSize="32px"
            fontWeight="bold"
            color="#333"
          />
          <p>
            {description}
          </p>
        </div>
        <div className={styles.categoriesContainer}>
          <Categories text="Moda" />
        </div>
      </div>

      <div className={styles.priceBox}>
        <Label textLabel={price+"$"} fontSize="32px" fontWeight="bold" color="#333" />
        <Label textLabel={quantity+" Unidades"} fontSize="16px" color="#333" />

        {isAdmin && (
          <div className={styles.actions}>
            <Button
              value="Actualizar producto"
              width="180px"
              height="6vh"
              bgColor="#FF8D1B90"
              borderColor="#FF8D1B"
              color="white"
            />
            <Button
              value="Eliminar producto"
              width="180px"
              height="6vh"
              bgColor="#FF383890"
              borderColor="#FF3838"
              color="white"
              onClick={onDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};
