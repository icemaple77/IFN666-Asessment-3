import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import SearchApiQuote from "../contexts/ApiQuotes";
import { useStocksContext } from "../contexts/StocksContext";

export default function Table(props) {
  const { loadingQ, rowDataQ, fecthQuote } = useStocksContext();

  fecthQuote(props.symbol);

  console.log("rowDataQ", rowDataQ);

  if (loadingQ == false) {
    return <SafeAreaView></SafeAreaView>;
  }
}

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
    color: "white",
  },
});

// <View>
//         <View style={styles.container}>
//           {/* Left Side Data */}
//           <View style={styles.subContainer}>
//             <View style={styles.leftDataContainer}>
//               <Text style={styles.titleText}> Open </Text>
//               <Text style={styles.dataText}> {rowDataQ.open.toFixed(2)} </Text>
//             </View>

//             <View style={styles.leftDataContainer}>
//               <Text style={styles.titleText}> Day High </Text>
//               <Text style={styles.dataText}>
//                 {" "}
//                 {rowDataQ.dayHigh.toFixed(2)}{" "}
//               </Text>
//             </View>

//             <View style={styles.leftDataContainer}>
//               <Text style={styles.titleText}> Day Low </Text>
//               <Text style={styles.dataText}>
//                 {" "}
//                 {rowDataQ.dayLow.toFixed(2)}{" "}
//               </Text>
//             </View>
//           </View>

//           <Divider orientation="vertical" height={"100%"} width={0.5} />

//           {/* Right Side Data */}
//           <View style={styles.subContainer}>
//             <View style={styles.rightDataContainer}>
//               <Text style={styles.titleText}> Price </Text>
//               <Text style={styles.dataText}> {rowDataQ.price.toFixed(2)} </Text>
//             </View>

//             <View style={styles.rightDataContainer}>
//               <Text style={styles.titleText}> Year High </Text>
//               <Text style={styles.dataText}>
//                 {" "}
//                 {rowDataQ.yearHigh.toFixed(2)}{" "}
//               </Text>
//             </View>

//             <View style={styles.rightDataContainer}>
//               <Text style={styles.titleText}> Year Low </Text>
//               <Text style={styles.dataText}>
//                 {" "}
//                 {rowDataQ.yearLow.toFixed(2)}{" "}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
