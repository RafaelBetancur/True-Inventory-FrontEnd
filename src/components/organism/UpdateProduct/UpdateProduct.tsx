import { Button, Input, Label, Menu } from '../../atoms';
import styles from './UpdateProduct.module.css';
import image from '../../../assets/7308238.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const UpdateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state || {};

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setPrice(product.price?.toString() || '');
      setQuantity(product.quantity?.toString() || '');
      setDescription(product.description || '');
    }
  }, [product]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.formBox}>
          <div className={styles.labelBox}>
            <Label
              textLabel="Actualiza tu producto"
              fontWeight="bold"
              fontSize="32px"
            />
          </div>

          <div className={styles.inputsBox}>
            <Input
              placeholder="Nombre del producto"
              height="1rem"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Precio"
              height="1rem"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              placeholder="Cantidad"
              height="1rem"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Input
              placeholder="Descripción"
              height="1rem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div
              className={styles.dropzone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) console.log('Archivo:', file);
              }}
            >
              <input
                type="file"
                accept="image/*"
                id="fileUpload" 
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) console.log('Archivo seleccionado:', file);
                }}
              />
              <label htmlFor="fileUpload">
                <span>Arrastra una imagen aquí o haz clic para subir</span>
              </label>
            </div>

            <Menu
              options={['Menú', 'Ropa', 'Electrónica', 'Hogar']}
              defaultOption="Menú"
            />
          </div>

          <div className={styles.bottoms}>
            <Button
              value="Cancelar"
              width="6rem"
              bgColor="white"
              borderColor="#42424290"
              color="#424242"
              onClick={() => navigate('/')}
            />
            <Button
              value="Actualizar"
              width="6rem"
              bgColor="#FF8D1B90"
              borderColor="#FF8D1B"
              color="white"
              onClick={() => navigate('/')}
            />
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <img src={product.image || image} alt="Imagen de producto" />
      </div>
    </div>
  );
};
