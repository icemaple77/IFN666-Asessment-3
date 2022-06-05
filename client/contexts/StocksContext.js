import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchApiQuote from "../contexts/ApiQuotes";
const StocksContext = React.createContext();
const API_KEY = "9bdf814120dd203b072c0828821bd0e2";

export function useStocksContext() {
  return useContext(StocksContext);
}

export const StocksProvider = ({ children }) => {
  const [watchList, setState] = useState([]);

  // const [loadingQ, setLoadingQ] = useState(true);
  // const [rowDataQ, setDataQ] = useState([]);

  // const [loadingH, setLoadingH] = useState(true);
  // const [rowDataH, setDataH] = useState([]);

  async function getWatchList() {
    const ServerURl = "http://localhost:3000";
    const url = `${ServerURl}/users/getWatchlist`;
    const token = await AsyncStorage.getItem("@storage_token");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await res.json();
    if (data.error == false) {
      console.log(data.watchList);
      setState(data.watchList);
    } else {
      alert("No Symbol in the watchlist");
    }
  }

  async function addToWatchlist(newSymbol) {
    //FixMe: add the new symbol to the watchlist, save it in useStockContext state and persist to AsyncStorage
    const ServerURl = "http://localhost:3000";
    const url = `${ServerURl}/users/addWatchlist`;
    const token = await AsyncStorage.getItem("@storage_token");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        symbol: newSymbol,
      }),
    });

    let data = await res.json();
    console.log(data);
    if (data.error == false) {
      alert(data.message);
    } else {
      alert("Symbol is not added to the watchlist");
    }
  }

  async function deleteToWatchlist(newSymbol) {
    //FixMe: add the new symbol to the watchlist, save it in useStockContext state and persist to AsyncStorage
    const ServerURl = "http://localhost:3000";
    const url = `${ServerURl}/users/deleteWatchlist`;
    const token = await AsyncStorage.getItem("@storage_token");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        symbol: newSymbol,
      }),
    });

    let data = await res.json();
    console.log(data);
    if (data.error == false) {
      alert(data.message);
    } else {
      alert("Symbol is not deleted from the watchlist");
    }
  }

  // async function getDataQuote(symbol) {
  //   const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   let quote = data.map((quote) => {
  //     return {
  //       symbol: quote.symbol,
  //       name: quote.name,
  //       price: quote.price,
  //       open: quote.open,
  //       percentage: quote.changesPercentage,
  //       dayHigh: quote.dayHigh,
  //       dayLow: quote.dayLow,
  //       yearHigh: quote.yearHigh,
  //       yearLow: quote.yearLow,
  //     };
  //   });

  //   return quote;
  // }

  // async function getDataHistory(symbol) {
  //   let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   let dataObj = Object.entries(data)[1][1];
  //   let history = Object.entries(dataObj);
  //   return history.map((history) => {
  //     return {
  //       date: history[0],
  //       open: history[1]["1. open"],
  //       low: history[1]["2. high"],
  //       high: history[1]["3. low"],
  //       close: history[1]["4. close"],
  //       volume: history[1]["5. volume"],
  //     };
  //   });
  // }

  // async function fecthQuote(symbol) {
  //   setDataQ(await getDataQuote(symbol));
  //   setLoadingQ(false);
  // }

  // async function fecthHistory() {
  //   setDataH(await getDataHistory("ADBE"));
  //   setLoadingH(false);
  // }

  useEffect(() => {
    // FixMe: Retrieve watchlist from persistent storage
    getWatchList();
  }, []);

  return (
    <StocksContext.Provider
      value={{
        watchList,
        setState,
        // addToWatchlist,
        // deleteToWatchlist,
        // loadingQ,
        // rowDataQ,
        // fecthQuote,
        // loadingH,
        // rowDataH,
        // fecthHistory,
      }}
    >
      {children}
    </StocksContext.Provider>
  );
};
