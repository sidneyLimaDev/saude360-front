import { ButtonHTMLAttributes } from "react";

interface FormActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function FormActionButton({
  text,
  disabled,
  ...rest
}: FormActionButtonProps) {
  return (
    <button
      {...rest}
      className={`w-80 ${disabled ? 'bg-blue-disabled' : 'bg-blue-600 text-white'} rounded mt-10 md:mb-1 pr-5 pl-5 pt-3 pb-3 font-semibold text-lg text-white`} 
      disabled={disabled} 
    >
      {text}
    </button>
    
  );
}