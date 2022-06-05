import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import WatchList from "../components/WatchList";
import SearchApiQuote from "../components/ApiQuotes";
import BottomSheet from "../components/BottomSheet";

// FixMe: implement other components and functions used in StocksScreen here (don't just put all the JSX in StocksScreen below)

export default function StocksScreen({ route }) {
  const { watchList } = useStocksContext();
  const refRBSheet = useRef();
  let result = [];
  watchList.map((e) => {
    result.push(e.symbol);
  });
  let symbollist_fetch = result.toString();
  const { loadingQ, errorQ, rowDataQ } = SearchApiQuote(symbollist_fetch);
  // fecthQuote(symbollist_fetch);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [state, setState] = useState({
    /* FixMe: initial state here */
  });

  // can put more code here

  useEffect(() => {
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state
  }, []);

  return (
    <SafeAreaView onPress={Keyboard}>
      <View style={styles.container}>
        <WatchList
          rowData={rowDataQ}
          refRBSheet={refRBSheet}
          setHistorySymbol={setHistoryIndex}
        />
        <BottomSheet refRBSheet={refRBSheet} symbolIndex={historyIndex} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
});
