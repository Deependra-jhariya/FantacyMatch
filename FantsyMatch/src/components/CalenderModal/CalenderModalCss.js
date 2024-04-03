import { StyleSheet } from "react-native";
import { _COLORS,FONTFAMILY } from "../../Themes";
export const CalenderCss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  calenderView: {
    backgroundColor: _COLORS.DVC_WhiteColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: _COLORS.DVC_GrayColor,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    // flex: 1,
    paddingVertical: 10,

  },
  textInputStyle: {
    alignSelf: "center",
    fontSize: 14,
    paddingLeft: 10,
    flex: 1,
    color: _COLORS.DVC_LightGrayColor,
    fontFamily: FONTFAMILY.DVC_Medium,
  },
  Select_date_text: {
    color: _COLORS.DVC_BlackColor,
    fontSize: 20,
    fontFamily: FONTFAMILY.DVC_Bold,
  },
  calenderSty: { alignSelf: "center", marginHorizontal: 5 },
  headingView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  closeText: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
    fontSize: 14,
    fontFamily: FONTFAMILY.DVC_SemiBold,
    alignSelf: "center",
  },
  applyText: {
    backgroundColor: _COLORS.DVC_BlackColor,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
  },
  text: {
    color: _COLORS.DVC_WhiteColor,
  },
  commontext: {
    // flex: 1,
    fontSize: 14,
    color: _COLORS.DVC_BlackColor,
    fontFamily: FONTFAMILY.DVC_SemiBold,
    letterSpacing: 0.3,
  },
});
