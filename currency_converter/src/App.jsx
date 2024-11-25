import { useEffect, useState } from "react";
import { useFetchData, useFetchCurrencyInfo } from "./hooks/useFetchData";
import { InputSection } from "./components";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);

  const currencyData = useFetchData(fromCurrency);
  const options = currencyData ? Object.keys(currencyData) : [];

  const currencyInfo = useFetchCurrencyInfo({ fromCurrency, toCurrency });

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    if (currencyData && currencyData[toCurrency] !== undefined) {
      setExchangeRate(currencyData[toCurrency]);
    } else {
      setExchangeRate(null);
    }
  }, [currencyData, toCurrency]);

  return (
    <main className="customBg grid h-dvh w-full place-items-center bg-slate-200">
      <section
        aria-label="currency converter"
        className="w-full max-w-xl space-y-8 rounded-xl bg-white p-8"
      >
        <div className="flex flex-col">
          <span className="text-lg font-semibold capitalize text-gray-500">
            {amount} {currencyInfo[fromCurrency]?.name || "Loading..."} equals
          </span>
          <span className="text-balance text-3xl font-semibold capitalize text-gray-800">
            {exchangeRate !== null ? exchangeRate.toFixed(2) : "Loading..."}{" "}
            {currencyInfo[toCurrency]?.name || "Loading..."}
          </span>
        </div>
        <div className="relative grid gap-6">
          <InputSection
            htmlFor="from"
            amount={amount}
            options={options}
            selectedValue={fromCurrency}
            onAmountChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            onSectionChange={(e) => setFromCurrency(e.target.value)}
          />
          <button
            type="button"
            onClick={swapCurrency}
            className="absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray-700"
            >
              <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" />
            </svg>
          </button>
          <InputSection
            htmlFor="to"
            amount={
              exchangeRate !== null ? (amount * exchangeRate).toFixed(2) : 0
            }
            options={options}
            selectedValue={toCurrency}
            onSectionChange={(e) => setToCurrency(e.target.value)}
            readOnly={true}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
