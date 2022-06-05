import { scaleSize } from "../constants/Layout";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import SearchApiHistory from "./ApiHistory";
//for server reauest
var headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
// import { useStocksContext } from "../contexts/StocksContext";
const MyLineChart = (props) => {
  console.log(props);
  const [data, setData] = useState([0]);
  const { ServerURL } = useStocksContext();

  // get history data using getHistory function

  //to call data from History function
  // if data is undefined set to [0] to avoid error

  //from react native chart kit exmaple
  return (
    <>
      <LineChart
        data={{
          labels: ["30 Days Ago", "20 Days Ago", "10 Days Ago", "Early month"],
          datasets: [
            // set data
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native, set width size
        height={scaleSize(120)}
        withDots={false}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",

          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: scaleSize(8),
          borderRadius: scaleSize(16),
        }}
      />
    </>
  );
};
export default function MyChart(props) {
  const { loadingQ, rowDataQ, errorQ } = SearchApiHistory(props.index);

  console.log("rowDataQ", rowDataQ);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <MyLineChart symbol={props.symbol} />
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
