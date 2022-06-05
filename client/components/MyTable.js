import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component-2";
import SearchApiQuote from "./ApiQuotes";
export default function MyTable(props) {
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(props.index);

  let Quote = [];
  rowDataQ.map((x) => {
    Quote = x;
  });

  let state = {
    tableHead: [`${Quote.name}`],
    tableData: [
      ["Price", `${Quote.price}`, "Open", `${Quote.open}`],
      ["DayHigh", `${Quote.dayHigh}`, "YearHigh", `${Quote.yearHigh}`],
      ["DayLow", `${Quote.dayLow}`, "YearLow", `${Quote.yearLow}`],
      ["Have a nice day!!"],
    ],
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={state.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
