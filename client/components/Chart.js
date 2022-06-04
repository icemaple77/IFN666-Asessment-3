import { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import SearchApiHistory from "../contexts/ApiHistory";
import { useStocksContext } from "../contexts/StocksContext";

export default function Chart(props) {
  const { loadingH, rowDataH, fecthHistory } = useStocksContext();
  useEffect(() => {
    //fecthHistory(props.symbol);
  }, []);

  console.log("rowData", rowDataH, "Symbol");
  return <SafeAreaView></SafeAreaView>;
}
