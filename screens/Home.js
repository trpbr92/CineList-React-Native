import React from "react";
import { FlatList, Text, View, Button } from "react-native";

import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View>
      <SearchBar />
      <Text>CineList Home!</Text>
    </View>
  );
};

export default Home;
