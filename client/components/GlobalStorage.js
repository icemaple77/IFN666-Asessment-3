import React, { useState, useEffect, navigation } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function GlobalStorage(key) {
  const [getValue, setGetValue] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      // Get username from local storage
      async function getValue() {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          setGetValue(value);
          setIsLoading(false);
        }
      }
      getValue();

      return () => {
        // Do something when the screen is unfocused. Useful for cleanup functions
        setGetValue("");
        setIsLoading(true);
      };
    }, [])
  );
  return getValue;
}

// why??
