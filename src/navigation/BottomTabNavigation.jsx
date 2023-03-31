import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Lecturas from "../screens/Lecturas";
import Sensor from "../screens/Sensor";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#003"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sensor"
        component={Sensor}
        options={{
          tabBarLabel: "Sensores",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lecturas"
        component={Lecturas}
        options={{
          tabBarLabel: "Lecturas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-box" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
