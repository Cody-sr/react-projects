import { useEffect, useState, useCallback } from "react";

const apiKey = import.meta.env.VITE_CURRENCY_KEY;

const useFetchData = (currency) => {
  const [data, setData] = useState({});
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}&base_currency=${currency}`);
      const result = await response.json();
      setData(result.data || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currency]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

const useFetchCurrencyInfo = ({ fromCurrency, toCurrency }) => {
  const [data, setData] = useState({});
  const url = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apiKey}`;

  const fetchCurrencyInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `${url}&currencies=${fromCurrency},${toCurrency}`,
      );
      const result = await response.json();
      setData(result.data || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    fetchCurrencyInfo();
  }, [fetchCurrencyInfo]);

  return data;
};

export { useFetchData, useFetchCurrencyInfo };
