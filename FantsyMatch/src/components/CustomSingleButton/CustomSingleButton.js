import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { CustomSingleButtonStyle } from "./CustomSingleButtonStyle";
import { _COLORS} from "../../Themes/CommonColors/CommonColor";

const CustomSingleButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={[
        CustomSingleButtonStyle.button,
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
        <Image source={props.leftImage} style={CustomSingleButtonStyle.leftIcon} />
      ) : null}
      <Text
        style={[
            CustomSingleButtonStyle.buttonText,
          { color: props.Text_Color, fontSize: props.text_Size },
        ]}
      >
        {props._ButtonText}
      </Text>
    </TouchableOpacity>
  );
};
CustomSingleButton.defaultProps = {
  isLeftImage: false,
  backgroundColor: _COLORS.DVC_TransparentColor,
  Text_Color: _COLORS.DVC_BlackColor,
  borderColor: _COLORS.DVC_LightWhiteColor,
  marginTop: 10,
  height: 58,
};
export default CustomSingleButton;
