type Props = {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size: string;
};

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
