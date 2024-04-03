import { StyleSheet } from "react-native";
import { _COLORS,FONTFAMILY,IMAGES } from "../../Themes";
export const CustomSingleButtonStyle = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "100%",
    height: 58,
    backgroundColor:_COLORS.DVC_BlackColor,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
  },
  buttonText: {
    color: _COLORS.DVC_WhiteColor,
    fontSize: 16,
    fontFamily: FONTFAMILY.DVC_ExtraBold,
    letterSpacing:1.65
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
    alignSelf: "center",
  },
});
