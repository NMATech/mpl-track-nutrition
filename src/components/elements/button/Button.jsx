const Button = ({
  children,
  width,
  bg,
  colorText,
  colorBorder = "border-1 border-black",
  hover,
  func = () => {},
}) => {
  return (
    <button
      style={{
        width: width,
        border: colorBorder ? `1px solid ${colorBorder}` : "0px solid white",
      }}
      className={`h-[30px] ${bg} rounded-[5px] ${colorText} px-2 ${hover}`}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
