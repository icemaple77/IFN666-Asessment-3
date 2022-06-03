import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard /* include other react native components here as needed */,
  Button,
} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchApiStocks from "../contexts/ApiStocks";
import StockList from "../components/StockList";

function filterStocks(data, symbol) {
  let finalData = [];
  if (symbol === "") {
    return (finalData = data);
  } else {
    finalData = data.filter((profile) => {
      return profile.symbol.toLowerCase().includes(symbol.toLowerCase());
    });
    return finalData;
  }
}

export default function SearchScreen({ navigation }) {
  const { loading, rowData, error } = SearchApiStocks();
  const [symbol, setSymbol] = useState("");
  let stocksList = filterStocks(rowData, symbol);

  return (
    <SafeAreaView onPress={Keyboard}>
      <View style={styles.container}>
        <SearchBar
          icon={"search"}
          placeholder={"Search"}
          symbol={symbol}
          setSymbol={setSymbol}
        ></SearchBar>
        <StockList rowData={stocksList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
});
