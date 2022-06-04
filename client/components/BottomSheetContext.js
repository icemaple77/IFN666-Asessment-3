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
        <Text>History of aaa</Text>
        <Table index={props.symbolIndex}></Table>
        <Chart></Chart>
      </View>
    </SafeAreaView>
  );
}
