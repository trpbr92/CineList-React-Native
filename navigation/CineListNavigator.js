import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";

const Navigator = createStackNavigator({
  Home: Home,
});

export default createAppContainer(Navigator);
