import { useState } from 'react';
import { Button } from '../../atoms';
import { Filter, ProductCard, TitleSubtitle } from '../../molecules';
import { PopUp } from '../../molecules/PopUp/PopUp';
import type { PublicProductsProps } from './PublicProducts.model';
import styles from './PublicProducts.module.css';
import { productsData, categoriesData } from '../../../dummies/data';
import { useNavigate } from 'react-router-dom';

export const PublicProducts = ({
  isAdmin,
  setIsAdmin
}: PublicProductsProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Menú');
  const [priceMin, setPriceMin] = useState<number | null>(null); // ✅ nuevo
  const [priceMax, setPriceMax] = useState<number | null>(null); // ✅ nuevo
  const navigate = useNavigate();

  const handleDeleteClick = () => setShowPopUp(true);
  const handleCancel = () => setShowPopUp(false);
  const handleConfirm = () => {
    console.log("Producto eliminado");
    setShowPopUp(false);
  };

  const handleLogout = () => {
    if (setIsAdmin) setIsAdmin((prev) => !prev);
  };

  const getCategoryName = (id: number): string => {
    const category = categoriesData.find(cat => cat.id === id);
    return category ? category.name : "Sin categoría";
  };

  // ✅ Filtrado por nombre, categoría y precio
  const filteredProducts = productsData.filter((product) => {
    const matchesName = product.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const categoryName = getCategoryName(product.category_id);
    const matchesCategory =
      selectedCategory === "Menú" || categoryName === selectedCategory;

    const matchesPriceMin = priceMin === null || product.price >= priceMin;
    const matchesPriceMax = priceMax === null || product.price <= priceMax;

    return matchesName && matchesCategory && matchesPriceMin && matchesPriceMax;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TitleSubtitle />
        <Button
          value="Crear Producto"
          width="200px"
          height="7.5vh"
          bgColor="#387EFF90"
          borderColor="#387EFF"
          color="white"
          onClick={() => navigate('/create')}
        />
        <Button
          value={isAdmin ? "Cerrar Sesión" : "Iniciar Sesión"}
          width="200px"
          height="7.5vh"
          style={{ marginLeft: '1rem' }}
          onClick={() => {
            if (isAdmin) {
              if (setIsAdmin) setIsAdmin(false);
            } else {
              navigate('/login');
            }
          }}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.productsContainer}>
          <div className={styles.productsSection}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                onDelete={handleDeleteClick}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                category={getCategoryName(product.category_id)}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <Filter
            fontWeight="bold"
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onPriceChange={(min, max) => { // ✅ nuevo
              setPriceMin(min);
              setPriceMax(max);
            }}
          />
        </div>
      </div>

      {showPopUp && (
        <div className={styles.overlay}>
          <PopUp onCancel={handleCancel} onConfirm={handleConfirm} />
        </div>
      )}
    </div>
  );
};
