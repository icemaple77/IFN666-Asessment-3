import { scaleSize } from "../constants/Layout";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import SearchApiHistory from "./ApiHistory";
import {} from "react-native";

export default function MyChart(props) {
  const { loading, rowData, error } = SearchApiHistory(props.index);

  console.log("rowDataQ", rowData);
  const open = rowData.map((x) => x.open);

  // const chartConfig = {
  //   backgroundGradientFrom: "#1E2923",
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: "#08130D",
  //   backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //   strokeWidth: 2, // optional, default 3
  //   barPercentage: 0.5,
  //   useShadowColorFromDataset: false, // optional
  // };

  const data = {
    //labels: ["100 days history"],
    datasets: [
      {
        data: open,
        // color: (opacity = 1) => `rgba(0, 96, 240, ${opacity})`, // optional
        //strokeWidth: 2, // optional
      },
    ],
    //legend: [`${props.index}`], // optional
  };
  return (
    <SafeAreaView>
      <View>
        <LineChart
          data={data}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#0c2e4e",
            backgroundGradientTo: "#186db3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "1",
              strokeWidth: "2",
              stroke: "#48a7df",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <LineChart />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: scaleSize(1),
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  //   padding: 10,
  // },
  // header: {
  //   textAlign: "center",
  //   fontSize: scaleSize(18),
  //   padding: scaleSize(16),
  //   marginTop: scaleSize(16),
  // },
});
