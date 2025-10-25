import styles from "./Filter.module.css";
import { Input } from "../../atoms/Input/Input";
import { Menu } from "../../atoms/Menu/Menu";
import type { FilterProps } from "./Filter.model";
import { Label } from "../../atoms";

export const Filter = ({
    width,
    height,
    bgColor,
    borderShadow,
    fontSize,
    fontWeight,
    color
}: FilterProps) => {
    const styleProperties = {
        "--width": width,
        "--height": height,
        "--bgColor": bgColor,
        "--borderShadow": borderShadow,
        "--fontSize": fontSize,
        "--fontWeight": fontWeight,
        "--color": color

    } as React.CSSProperties;
    return (
        <div className={styles.container} style={styleProperties}>
            <h2 className={styles.title}>Filtro</h2>
            <Input
                placeholder="🔍 Buscar"
                width="100%"
                height="2rem"
            />
            <Label
                textLabel="Categorias"
                color="#424242"
            />
            <Menu
                options={["Menú", "Ropa", "Electrónica", "Hogar"]}
                defaultOption="Menú"
                width="100%"
            />
            <Label
                textLabel="Precio"
                color="#424242"
            />
            <div className={styles.priceContainer}>
                <Input
                    placeholder="Desde"
                    width="100%"
                    height="2rem"
                />
                <span className={styles.separator}>-</span>
                <Input
                    placeholder="Hasta"
                    width="100%"
                    height="2rem"
                />
            </div>
        </div>
    );
};
