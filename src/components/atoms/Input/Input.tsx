import type { InputProps } from './Input.model'
import style from './Input.module.css'

export const Input = ({
  type,
  placeholder,
  width,
  height,
  color,
  fontSize,
  padding,
  value,
  onChange
}: InputProps) => {
  const styleProperties = {
    "--width": width,
    "--height": height,
    "--color": color,
    "--fontSize": fontSize,
    "--padding": padding,
    "--placeholder": placeholder,
  } as React.CSSProperties;
  return (
    <>
      <div style={styleProperties} className={`input-group mb-3 ${style.input}`}>
        <input
          type={type}
          placeholder={placeholder}
          className={`form-control`}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}