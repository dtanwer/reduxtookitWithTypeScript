import { inputProps } from "./Input.type"
const Input=({...rest}:inputProps)=> {
  return (
    <input {...rest} className="input-text" />
  )
}

export default Input