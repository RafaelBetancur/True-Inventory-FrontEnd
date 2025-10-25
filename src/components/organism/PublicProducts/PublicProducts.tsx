import { useState } from 'react';
import { Button } from '../../atoms';
import { Filter, ProductCard, TitleSubtitle } from '../../molecules';
import { PopUp } from '../../molecules/PopUp/PopUp';
import type { PublicProductsProps } from './PublicProducts.model';
import styles from './PublicProducts.module.css';
import { productsData } from '../../../dummies/data'

export const PublicProducts = ({
  isAdmin = true,
  /*id,
  name,
  description,
  image,
  price,
  quantity*/
}: PublicProductsProps) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleDeleteClick = () => setShowPopUp(true);
  const handleCancel = () => setShowPopUp(false);
  const handleConfirm = () => {
    console.log("Producto eliminado");
    setShowPopUp(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TitleSubtitle />
        <Button
          value={isAdmin ? "Cerrar Sesión" : "Iniciar Sesión"}
          width="200px"
          height="7.5vh"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.productsContainer}>
          <div className={styles.productsSection}>
            {
              productsData.map((product: PublicProductsProps) => (
                <ProductCard key={product.id} onDelete={handleDeleteClick}
                  id={product.id ?? ''} name={product.name ?? ''}
                  description={product.description ?? ''}
                  image={product.image ?? ''}
                  price={product.price ?? 0}
                  quantity={product.quantity ?? 0} />
              )

              )
            }

          </div>
        </div>

        <div className={styles.filterSection}>
          <Filter fontWeight="bold" />
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
