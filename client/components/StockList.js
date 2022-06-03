import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard /* include other react native components here as needed */,
  Button,
} from "react-native";
import { ListItem } from "react-native-elements";
import { useStocksContext } from "../contexts/StocksContext";

// function CheckButton(watchList, symbolSearched) {
//   watchList.map((e) => {
//     return e.toLowerCase().includes(symbolSearched.toLowerCase());
//   });
// }

export default function StockList(props) {
  let data = props.rowData;
  const { watchList, addToWatchlist } = useStocksContext();
  return (
    <SafeAreaView>
      <ScrollView>
        {data.map((e, i) => (
          <View key={i} style={styles.container}>
            <ListItem containerStyle={styles.listitem}>
              <ListItem.Content>
                <ListItem.Title style={styles.symbol}>
                  {e.symbol}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} style={styles.name}>
                  {e.name}
                </ListItem.Subtitle>
              </ListItem.Content>
              {/* {CheckButton(watchList, e.symbol) ? (
                <Button title="Delete" style={styles.button} color="black" />
              ) : (
                <Button
                  title="Add"
                  style={styles.button}
                  color="black"
                  onPress={() => addToWatchlist(e.symbol)}
                />
              )} */}
              <Button
                title="Add"
                style={styles.button}
                color="black"
                onPress={() => addToWatchlist(e.symbol)}
              />
            </ListItem>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", color: "white", borderRadius: 10 },
  listitem: {
    backgroundColor: "black",
    borderRadius: 10,
    borderBottomColor: "white",
  },
  symbol: {
    // backgroundColor: "white",
    color: "white",
    padding: 5,
    borderRadius: 10,
    borderBottomColor: "white",
    margin: 2,
  },
  name: {
    // backgroundColor: "white",
    color: "#808080",
    padding: 5,
    borderRadius: 10,
    borderBottomColor: "white",
    margin: 2,
  },
  br: {
    height: 1,
    backgroundColor: "#808080",
  },
});
