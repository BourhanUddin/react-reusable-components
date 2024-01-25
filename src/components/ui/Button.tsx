import { twMerge } from "tailwind-merge";
const Button = ({ className }) => {
  return (
    <button className={twMerge(`bg-red-600 ${className}`)}>click here</button>
  );
};

export default Button;
