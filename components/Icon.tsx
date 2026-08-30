type IconProps = {
  name: string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
};

export default function Icon({ name, className = "", fill, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={fill ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  );
}
