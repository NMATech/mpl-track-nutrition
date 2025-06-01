const Form = ({
  title,
  placeholder = "",
  type,
  width,
  handleChange = "",
  value,
}) => {
  return (
    <div className="text-start">
      <h1 className="mb-2">{title}</h1>
      <input
        style={{
          width: width,
        }}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-[5px] border border-[#333] p-1 placeholder:text-gray-400"
      />
    </div>
  );
};

export default Form;
