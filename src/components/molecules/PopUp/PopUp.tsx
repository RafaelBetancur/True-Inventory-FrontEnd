import { Button, Label } from "../../atoms";
import type { PopUpProps } from "./PopUp.model";
import styles from './PopUp.module.css';

export const PopUp = ({ onCancel, onConfirm }: PopUpProps) => {
  return (
    <div className={styles.container}>
      <Label
        textLabel="¿Estás seguro de eliminar este producto?"
        fontWeight="bold"
      />
      <div className={styles.buttonBox}>
        <Button
          value="Cancelar"
          bgColor="#ecececff"
          borderColor="#b1aeaeff"
          color="#262626"
          borderRadius="15px 0px 0px 15px"
          onClick={onCancel}
        />
        <Button
          value="Confirmar"
          bgColor="#FF4E4E90"
          borderColor="#FF4E4E"
          color="#fff"
          borderRadius="0px 15px 15px 0px"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
};
