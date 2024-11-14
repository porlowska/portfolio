type InputProp = {
  inputLabel: string;
  type: string;
  placeholder?: string | ""
  helperText?: string;
};

const Input = ({ inputLabel, type, placeholder, helperText }: InputProp) => {
  return (
    <div>
      <div className="relative mt-2">
        <label
          htmlFor={inputLabel}
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          {inputLabel}
        </label>
        <input
          id={inputLabel}
          name={inputLabel}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6"
        />
      </div>
      {helperText !== null ? (
        <p id={inputLabel} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
