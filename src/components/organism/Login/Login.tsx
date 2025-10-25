import { Button, Input, Label, Title } from "../../atoms/index"
import type { LoginProps } from "./Login.model";
import styles from './Login.module.css'


export const Login = ({
  width,
  boxShadow,
}: LoginProps) => {
  const styleProperties = {
    "--width": width,
    "--boxShadow": boxShadow,
  } as React.CSSProperties;
  return (
    <>
      <div style={styleProperties} className={styles.container}>
        <div className={styles.formBox}>
          <div className={styles.wrap}>
              <Title />
            <div className={styles.inputLabel}>
              <Label
                textLabel="Usuario"
                fontSize="16px"
              />
              <Input
                placeholder="Ingrese su usuario"
                type="text"
                width="100%"
              />
              <Label
                textLabel="Contraseña"
                fontSize="16px"
              />
              <Input
                placeholder="Ingrese su contraseña"
                type="password"
                width="100%"
              />
            </div>
            <div className={styles.buttonBox}>
              <Button
                value="Ingresar"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
