import { Button, Input, Label, Menu } from '../../atoms';
import styles from './CreateProduct.module.css'
import image from '../../../assets/image.png';
import { useNavigate } from 'react-router-dom';

export const CreateProduct = ({

}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container}>

                <div className={styles.leftContainer}>

                    <div className={styles.formBox}>
                        <div className={styles.labelBox}>
                            <Label
                                textLabel='Crea tu producto'
                                fontWeight="bold"
                                fontSize='32px'
                            />
                        </div>
                        <div className={styles.inputsBox}>
                            <Input
                                placeholder='Nombre del producto'
                                height='1rem'
                            />
                            <Input
                                placeholder='Precio'
                                height='1rem'
                            />
                            <Input
                                placeholder='Cantidad'
                                height='1rem'
                            />
                            <Input
                                placeholder='Desripcion'
                                height='1rem'
                            />
                            <div
                                className={styles.dropzone}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files[0];
                                }}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileUpload"
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) console.log("Archivo seleccionado:", file);
                                    }}
                                />
                                <label htmlFor="fileUpload">
                                    <span>Arrastra una imagen aquí o haz clic para subir</span>
                                </label>
                            </div>

                            <Menu
                                options={["Menú", "Ropa", "Electrónica", "Hogar"]}
                                defaultOption="Menú"
                            />
                        </div>
                        <div className={styles.bottoms}>
                            <Button
                                value='Cancelar'
                                width='6rem'
                                bgColor="white"
                                borderColor="#42424290"
                                color="#424242"
                                onClick={() => navigate('/')}
                            />
                            <Button
                                value='Crear'
                                width='6rem'
                                bgColor="#387EFF90"
                                borderColor="#387EFF"
                                color="white"
                                onClick={() => navigate('/')}
                            />
                        </div>
                    </div>
                </div>


                <div className={styles.rightContainer}>
                    <img src={image} alt="Imagen de producto" />
                </div>

            </div>
        </>
    )
};


