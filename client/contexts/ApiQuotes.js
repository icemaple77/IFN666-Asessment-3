import { useEffect, useState } from "react";
const API_KEY = "9bdf814120dd203b072c0828821bd0e2";
function SearchApiQuote(symbol) {
  const [loadingQ, setLoading] = useState(true);
  const [rowDataQ, setData] = useState([]);
  const [errorQ, setError] = useState(null);

  console.log(symbol);
  useEffect(() => {
    (async () => {
      try {
        setData(await getDataQuote(symbol));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [symbol]);

  console.log(rowDataQ);

  return {
    loadingQ,
    rowDataQ,
    errorQ,
  };
}

async function getDataQuote(symbol) {
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
  let res = await fetch(url);
  let data = await res.json();
  let quote = data.map((quote) => {
    return {
      symbol: quote.symbol,
      name: quote.name,
      price: quote.price,
      percentage: quote.changesPercentage,
    };
  });
  console.log("quote" + quote);

  return quote;
}

export default SearchApiQuote;
