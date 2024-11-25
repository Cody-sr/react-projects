import React from "react";

const CheckboxInp = ({ id, text, defaultChecked, onchange }) => {
  return (
    <>
      <label htmlFor={id} className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          name={id}
          defaultChecked={defaultChecked}
          onChange={onchange}
          id={id}
        />
        <span>{text}</span>
      </label>
    </>
  );
};

function Character({ data = [] }) {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold capitalize">character used :</h2>

        <div className="flex items-center gap-4">
          {data?.map((inp) => (
            <CheckboxInp
              key={inp?.label}
              id={inp?.label}
              text={inp?.text}
              defaultChecked={inp?.defaultChecked}
              onchange={inp?.onChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Character;
