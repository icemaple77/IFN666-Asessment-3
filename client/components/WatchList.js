import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

export default function StockList(props) {
  let data = props.rowData;
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
