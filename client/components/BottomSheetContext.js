import { useState } from "react";
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
  const [name, setName] = useState("");
  console.log(props.symbolIndex);
  console.log("119" + props.symbolName);
  return (
    <SafeAreaView>
      <View>
        <Table index={props.symbolIndex} name={setName}></Table>
        {/* <MyTable index={props.symbolIndex}></MyTable> */}
        {/* <MyChart index={props.symbolIndex} name={name}></MyChart> */}
      </View>
    </SafeAreaView>
  );
}
