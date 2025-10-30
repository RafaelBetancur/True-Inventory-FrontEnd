import styles from "./Filter.module.css";
import { Input } from "../../atoms/Input/Input";
import { Menu } from "../../atoms/Menu/Menu";
import type { FilterProps } from "./Filter.model";
import { Label } from "../../atoms";
import { useState } from "react";

export const Filter = ({
    width,
    height,
    bgColor,
    borderShadow,
    fontSize,
    fontWeight,
    color,
    onSearch,
    onCategoryChange,
    onPriceChange // ✅ nuevo prop
}: FilterProps) => {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Menú");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch?.(value);
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        onCategoryChange?.(value);
    };

    // ✅ manejadores de precio
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value);
        onPriceChange?.(value ? Number(value) : null, maxPrice ? Number(maxPrice) : null);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value);
        onPriceChange?.(minPrice ? Number(minPrice) : null, value ? Number(value) : null);
    };

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
                onChange={handleSearchChange}
            />

            <Label textLabel="Categorías" color="#424242" />
            <Menu
                options={["Menú", "Electrónica", "Hogar y Decoración", "Moda", "Deportes y Aire Libre", "Cocina y Gastronomía"]}
                defaultOption="Menú"
                width="100%"
                onChange={handleCategoryChange}
            />

            <Label textLabel="Precio" color="#424242" />
            <div className={styles.priceContainer}>
                <Input
                    placeholder="Desde"
                    width="100%"
                    height="2rem"
                    type="number"
                    value={minPrice}
                    onChange={handleMinChange}
                />
                <span className={styles.separator}>-</span>
                <Input
                    placeholder="Hasta"
                    width="100%"
                    height="2rem"
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
};
