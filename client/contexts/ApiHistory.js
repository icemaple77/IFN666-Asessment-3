import { useEffect, useState } from "react";
const API_KEY = "eb6d9149d9e4183108ab835be6a1bfac";

function SearchApiHistory(symbol) {
  const [loading, setLoading] = useState(true);
  const [rowData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await getDataHistory(symbol));
        console.log("data", rowData, "symbol", symbol);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [symbol]);
  return {
    loading,
    rowData,
    symbol,
    error,
  };
}



export default SearchApiHistory;
