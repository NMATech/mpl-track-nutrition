const FormDropdown = ({ title, width, options, handleChange = "" }) => {
  return (
    <div className="text-start">
      <h1 className="mb-2">{title}</h1>
      <select
        style={{
          width: width,
        }}
        className="rounded-[5px] border border-[#333] p-1"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="" disabled selected>
          select
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
