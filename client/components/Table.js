import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
} from "react-native";
import { Divider } from "react-native-elements";
import SearchApiQuote from "./ApiQuotes";

export default function Table(props) {
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(props.index);

  let Quote = [];
  rowDataQ.map((x) => {
    Quote = x;
  });
  console.log("arr" + Quote.name);
  let abc = "";
  abc = Quote.name;

  console.log("arr" + Quote.name);
  return (
    <SafeAreaView>
      <Text>{Quote.name}</Text>
      {/* <Text>{props.setName(abc)}</Text> */}
      <View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.leftDataContainer}>
              <Text style={styles.titleText}> Open </Text>
              <Text style={styles.dataText}>{Quote.open}</Text>
            </View>

            <View style={styles.leftDataContainer}>
              <Text style={styles.titleText}> Day High </Text>
              <Text style={styles.dataText}>{Quote.dayHigh}</Text>
            </View>

            <View style={styles.leftDataContainer}>
              <Text style={styles.titleText}> Day Low </Text>
              <Text style={styles.dataText}>{Quote.dayLow}</Text>
            </View>
          </View>

          <Divider orientation="vertical" height={"100%"} width={0.5} />

          <View style={styles.subContainer}>
            <View style={styles.rightDataContainer}>
              <Text style={styles.titleText}> Price </Text>
              <Text style={styles.dataText}>{Quote.price}</Text>
            </View>

            <View style={styles.rightDataContainer}>
              <Text style={styles.titleText}> Year High </Text>
              <Text style={styles.dataText}>{Quote.yearHigh}</Text>
            </View>

            <View style={styles.rightDataContainer}>
              <Text style={styles.titleText}> Year Low </Text>
              <Text style={styles.dataText}>{Quote.yearLow}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  subContainer: {
    flex: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    marginBottom: 15,
  },
  rightDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 14,
    color: "#8b8a90",
  },
  dataText: {
    fontSize: 14,
    color: "black",
  },
});
