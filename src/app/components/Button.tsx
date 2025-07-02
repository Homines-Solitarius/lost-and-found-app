interface ButtonProps {
  text: string;
  color: string;
}
  
  
const Button = ({text, color} : ButtonProps) => {
  return (
    <button style={{backgroundColor: color}}>{text}</button>
  )
}

export default Button