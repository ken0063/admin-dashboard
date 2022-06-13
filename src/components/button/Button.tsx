type Props = {
  color?: string;
  bgColor?: string;
  text?: string;
  borderRadius: string;
  size?: string;
  icon?: any;
};

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  icon,
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
