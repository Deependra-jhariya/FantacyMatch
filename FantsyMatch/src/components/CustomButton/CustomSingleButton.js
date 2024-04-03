import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { CustomButtonstyles } from "./CustomButtonCss";
import { _COLORS,FONTFAMILY } from "../../Themes";
const CustomSingleButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={[
        CustomButtonstyles.button,
        {
          backgroundColor: props?.backgroundColor,
          borderColor: props.borderColor,
          marginTop: props.marginTop,
          height: props.height,
          marginBottom: props.marginBottom,
          marginHorizontal: props.marginHorizontal,
          width: props.width ? props.width : "100%",
        },
      ]}
      disabled={props?.disabled}
    >
      {props.isLeftImage ? (
        <Image source={props.leftImage} style={CustomButtonstyles.leftIcon} />
      ) : null}
      <Text
        style={[
          CustomButtonstyles.buttonText,
          { color: props.Text_Color, fontSize: props.text_Size },
        ]}
        numberOfLines={1}
                ellipsizeMode="tail"
      >
        {props._ButtonText}
      </Text>
    </TouchableOpacity>
  );
};
CustomSingleButton.defaultProps = {
  isLeftImage: false,
  backgroundColor: _COLORS.DVC_BlackColor,
  Text_Color: _COLORS.DVC_BlackColor,
  borderColor: _COLORS.DVC_LightWhiteColor,
  marginTop: 10,
  height: 58,
};
export default CustomSingleButton;
