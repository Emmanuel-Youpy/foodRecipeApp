import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES, FONTS } from "../constants";

import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBArShowLabel: "false",
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: COLORS.white,
            borderTopColor: "transparent",
            height: 100,
          },
        ],
      }}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
