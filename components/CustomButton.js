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
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...buttonContainerStyle }} onPress={onPress}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            ...FONTS.h3,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
