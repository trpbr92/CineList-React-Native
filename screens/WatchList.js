import React from "react";
import { FlatList, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const WatchList = () => {
  return (
    <View>
      <SearchBar />
      <Text>Watchlist</Text>
    </View>
  );
};

export default WatchList;
