import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import WatchList from "../components/WatchList";
import SearchApiQuote from "../contexts/ApiQuotes";
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
  const { loadingQ, errorQ, rowDataQ, fecthQuote } = useStocksContext();
  fecthQuote(symbollist_fetch);
  const [historySymbol, setHistorySymbol] = useState(0);
  const [state, setState] = useState({
    /* FixMe: initial state here */
  });

  // can put more code here

  useEffect(() => {
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state
  }, [watchList]);

  return (
    <SafeAreaView onPress={Keyboard}>
      <View style={styles.container}>
        <WatchList
          rowData={rowDataQ}
          refRBSheet={refRBSheet}
          setHistorySymbol={setHistorySymbol}
        />
        <BottomSheet refRBSheet={refRBSheet} historySymbol={historySymbol} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
});
