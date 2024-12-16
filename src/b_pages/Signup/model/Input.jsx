const Input = ({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  errorMessage,
}) => {
  console.log(errorMessage);
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="text-xl px-[20px] py-[10px] border-b-[1px] border-gray-500 flex focus:border-red-600"
        onChange={onChange}
      />
      <span className="text-red-600">{errorMessage}</span>
    </>
  );
};

export default Input;
