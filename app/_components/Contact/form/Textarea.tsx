type TextareaProps = {
  textareaLabel: string;
  rows: number;
  defaultValue?: string | "";
  helperText?: string;
};
const Textarea = ({
  textareaLabel,
  defaultValue,
  rows,
  helperText,
}: TextareaProps) => {
  return (
    <div>
      <div className="relative mt-2">
        <label
          htmlFor={textareaLabel}
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          {textareaLabel}
        </label>
        <textarea
          id={textareaLabel}
          name={textareaLabel}
          rows={rows}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          defaultValue={defaultValue}
        />
      </div>
      {helperText !== null ? (
        <p id={textareaLabel} className="mt-2 text-xs text-gray-600">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
export default Textarea;
