import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import WatchList from "../screens/WatchList";

const Navigator = createStackNavigator({
  Home: Home,
  WatchList: WatchList,
});

export default createAppContainer(Navigator);
