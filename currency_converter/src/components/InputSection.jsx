import React from "react";

function InputSection({
  htmlFor,
  amount = 1,
  options = [],
  onAmountChange,
  onSectionChange,
  selectedValue,
  readOnly = false,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="grid grid-cols-2 divide-x-[1px] rounded-lg border p-2 focus-within:divide-gray-500 focus-within:border-gray-500"
    >
      <input
        type="number"
        id={htmlFor}
        name={`currency_${htmlFor}`}
        className="p-1 outline-none focus:outline-none"
        value={amount}
        onChange={onAmountChange}
        min={1}
        readOnly={readOnly}
      />
      <select
        className="p-1 focus:outline-none"
        onChange={onSectionChange}
        value={selectedValue}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export default InputSection;
