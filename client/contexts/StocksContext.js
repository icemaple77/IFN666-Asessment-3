import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StocksContext = React.createContext();
let list = [];

export const StocksProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return (
    <StocksContext.Provider value={[state, setState]}>
      {children}
    </StocksContext.Provider>
  );
};

export const useStocksContext = () => {
  const [state, setState] = useContext(StocksContext);

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
      alert(data.message);
      list = data.watchList;
      console.log(list);
      setState((state) => ({ ...state, symbolList: list }));
      console.log(state);
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

  useEffect(() => {
    // FixMe: Retrieve watchlist from persistent storage
    getWatchList();
  }, []);

  return {
    watchList: state,
    addToWatchlist,
  };
};
