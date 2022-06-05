import React, { useRef, useState } from "react";
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
  const [name, setName] = useState("");
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
              backgroundColor: "white",
            },
          }}
        >
          <BottomSheetContext
            symbolIndex={props.symbolIndex}
            symbolName={props.name}
          />
        </RBSheet>
      </View>
    </SafeAreaView>
  );
}
