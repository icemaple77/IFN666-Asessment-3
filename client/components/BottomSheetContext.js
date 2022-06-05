import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
} from "react-native";
import Table from "./Table";
import MyChart from "./MyChart";
import MyTable from "./MyTable";

export default function BottomSheetContext(props) {
  console.log(props.symbolIndex);
  return (
    <SafeAreaView>
      <View>
        <Table index={props.symbolIndex}></Table>
        <MyChart index={props.symbolIndex}></MyChart>
        <MyTable index={props.symbolIndex}></MyTable>
      </View>
    </SafeAreaView>
  );
}
