import { useState, useCallback, useEffect, useRef } from "react";
import { IconContentCopy } from "./icons";
import { Character, PasswordLength } from "./components";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const copyPassword = useRef(null);

  const notify = () => toast.success("Copy Successful");

  const inpData = [
    {
      label: "include_uppercase",
      text: "ABC",
      defaultChecked: includeUppercase,
      onChange: () => {
        setIncludeUppercase((prev) => !prev);
      },
    },
    {
      label: "include_number",
      text: "123",
      defaultChecked: includeNumbers,
      onChange: () => {
        setIncludeNumbers((prev) => !prev);
      },
    },
    {
      label: "include_characters",
      text: "#$@",
      defaultChecked: includeSpecialChars,
      onChange: () => {
        setIncludeSpecialChars((prev) => !prev);
      },
    },
  ];

  const generatePassword = useCallback(() => {
    let password = "";
    let characterPool = "abcdefghijklmnopqrstuvwxyz";

    if (includeUppercase) characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characterPool += "0123456789";
    if (includeSpecialChars) characterPool += "!@#$%^&*()_+[]{}|<>?/";

    for (let i = 0; i < passwordLength; i++) {
      password += characterPool.charAt(
        Math.floor(Math.random() * characterPool.length),
      );
    }
    setGeneratedPassword(password);
  }, [passwordLength, includeUppercase, includeSpecialChars, includeNumbers]);

  const copyToClipboard = () => {
    copyPassword.current.select();
    window.navigator.clipboard.writeText(generatedPassword);
    notify();
  };

  useEffect(() => {
    generatePassword();
  }, [
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSpecialChars,
    setGeneratedPassword,
  ]);

  return (
    <>
      <main className="grid h-dvh w-full place-items-center bg-slate-200">
        <section
          className="w-full max-w-lg space-y-6 rounded-xl bg-white p-8 shadow-lg"
          aria-label="password generator"
        >
          <h1 className="mb-4 text-center text-2xl font-semibold capitalize">
            password generator
          </h1>
          <div className="flex items-center rounded-lg border px-4 py-2">
            <input
              type="text"
              name="password"
              id="password"
              value={generatedPassword}
              readOnly
              className="w-full focus:outline-none"
              ref={copyPassword}
            />
            <button
              type="button"
              className="grid place-items-center p-0 text-gray-500 hover:text-black"
              onClick={copyToClipboard}
              aria-label="Copy password to clipboard"
            >
              <IconContentCopy />
            </button>
          </div>

          {/* password length component */}
          <PasswordLength
            length={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            onClick={[
              () => setPasswordLength((prev) => Math.max(prev - 1, 8)),
              () => setPasswordLength((prev) => Math.min(prev + 1, 20)),
            ]}
          />

          {/* character used component */}
          <Character data={inpData} />

          {/* toast */}
          <ToastContainer />
        </section>
      </main>
    </>
  );
}

export default App;
