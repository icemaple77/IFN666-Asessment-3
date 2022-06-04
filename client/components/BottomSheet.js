import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  Button,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheetContext from "./BottomSheetContext";
//import { SafeAreaView } from "react-native-web";

export default function OpenBottomSheet(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <RBSheet
          ref={props.refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={500}
          //   openDuration={250}

          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "black",
            },
            container: {
              minHeight: "20%",
              maxHeight: "80%",
              color: "#0000000",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 2,
            },
          }}
        >
          <BottomSheetContext symbol={props.historySymbol} />
        </RBSheet>
      </View>
    </SafeAreaView>
  );
}
