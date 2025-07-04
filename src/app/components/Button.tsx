'use client';

import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" |"reset";
}
  
  
const Button = ({text, color, onClick, type} : ButtonProps) => {
  return (
    <button style={{backgroundColor: color}} type={type} onClick={onClick} className="font-bold p-2">{text}</button>
  )
}

export default Button