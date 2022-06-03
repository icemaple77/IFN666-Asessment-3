import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import WatchList from "../components/WatchList";

// FixMe: implement other components and functions used in StocksScreen here (don't just put all the JSX in StocksScreen below)

export default function StocksScreen({ route }) {
  const { watchList } = useStocksContext();
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
        <WatchList rowData={watchList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
});
