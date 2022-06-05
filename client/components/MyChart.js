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
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: open,
        color: (opacity = 1) => `rgba(0,0,255, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [`${props.index}`], // optional
  };

  return (
    <SafeAreaView>
      {/* <Text>{props.index}</Text>{" "} */}
      <View>
        <>
          <LineChart
            data={data.reverse()}
            width={Dimensions.get("window").width} // from react-native, set width size
            height={scaleSize(220)}
            yAxisLabel="$"
            yAxisInterval={1}
            withDots={false}
            //withShadow={true}
            chartConfig={{
              fillShadowGradientFrom: "#2ede17",
              fillShadowGradientTo: "#7bb6e6",
              //fillShadowGradient: 2,
              // fillShadowGradientToOpacity: 0.2,
              backgroundGradientFrom: "#7bb6e6",
              backgroundGradientTo: "#144d83",
              fillShadowGradientOpacity: 1,
              //useShadowColorFromDataset: true,

              decimalPlaces: 2, // optional, defaults to 2dp

              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                r: "1",
                strokeWidth: "2",
                stroke: "#48a7df",
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: scaleSize(8),
              borderRadius: scaleSize(16),
            }}
          />
        </>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: scaleSize(1),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: scaleSize(18),
    padding: scaleSize(16),
    marginTop: scaleSize(16),
  },
});
