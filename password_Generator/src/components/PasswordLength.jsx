import React from "react";
import { IconRemove, IconAdd } from "../icons";

function PasswordLength({ length, onChange, onClick = [] }) {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold capitalize">
          password length : {length}
        </h2>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="disabled:cursor-not-allowed"
            onClick={onClick[0]}
            disabled={length === 8}
          >
            <IconRemove />
          </button>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="w-full"
            onChange={onChange}
          />

          <button
            type="button"
            className="disabled:cursor-not-allowed"
            onClick={onClick[1]}
            disabled={length === 20}
          >
            <IconAdd />
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordLength;
