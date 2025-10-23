import type { InputProps } from './Input.model'
import style from './Input.module.css'

export const Input = ({fontFamily, 
  type, 
  placeholder, 
  width, 
  height, 
  color, 
  fontSize, 
  padding
}: InputProps) => {
  const styleProperties = {
    "--width": width,
    "--height": height,
    "--color": color,
    "--fontSize": fontSize,
    "--padding": padding,
    "--placeholder": placeholder,
    "--fontFamily": fontFamily,
  };
  return (
    <>
      <div style={styleProperties} className={`input-group mb-3 ${style.input}`}>
        <input type={type} placeholder={placeholder} className={`form-control`}/>
      </div>
    </>
  )
}