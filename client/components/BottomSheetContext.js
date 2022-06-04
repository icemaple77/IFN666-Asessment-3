import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
} from "react-native";
import Table from "./Table";
import Chart from "./Chart";

export default function BottomSheetContext(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>History of {props.symbol}</Text>
        <Table symbol={props.symbol}></Table>
        <Chart symbol={props.symbol}></Chart>
      </View>
    </SafeAreaView>
  );
}
