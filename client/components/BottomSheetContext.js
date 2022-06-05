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

export default function BottomSheetContext(props) {
  console.log(props.symbolIndex);
  return (
    <SafeAreaView>
      <View>
        <Text>History of {props.symbolIndex}</Text>
        <Table index={props.symbolIndex}></Table>
        <MyChart index={props.symbolIndex}></MyChart>
      </View>
    </SafeAreaView>
  );
}
