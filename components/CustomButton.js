import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomButton = ({
  onPress,
  buttonText,
  colors,
  buttonContainerStyle,
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.lightGreen,
            ...FONTS.h2,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
