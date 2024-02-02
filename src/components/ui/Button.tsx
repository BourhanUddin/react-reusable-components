import cn from "../../utils/cn";
// `bg-purple-500 py-3 px-3 rounded-md ${className} ${
//   variant == "outline" ? "border border-red-600 opacity-50" : ""
// }`

const Button = ({ className, variant }) => {
  return (
    <button
      className={cn(
        `btn`,
        {
          "border border-purple-900 opacity-50": variant,
        },
        className
      )}
    >
      click here
    </button>
  );
};

export default Button;
