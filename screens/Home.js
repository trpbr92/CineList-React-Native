import React from "react";
import { FlatList, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <View>
      <Text>CineList Home!</Text>
      <SearchBar />
    </View>
  );
}

export default Home;
