import "./style.scss";

type DividerProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Divider = ({ className, style }: DividerProps) => {
  return <div className={`divider ${className}`} style={style} />;
};

export default Divider;
