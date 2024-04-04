import {StyleSheet,Platform} from 'react-native';
import { FONTFAMILY, _COLORS} from '../../Themes';
export const ScheduleMatchStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScheduleText:{
    alignSelf:"center",
    fontSize:25,
    color:_COLORS.DVC_BlueColor,
    fontFamily:FONTFAMILY.DVC_Bold,
    paddingVertical:10
  },
  card: {
    width: "100%",
    // backgroundColor: _COLORS.DVC_WhiteColor,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS == "android" ? 0.2 : null,
    shadowRadius: 2,
    padding: 20,
    // marginBottom: 250,
  },
  inputContainer: {
    marginTop: 15,
  },
  commontext: {
    // flex: 1,
    fontSize: 14,
    color: _COLORS.DVC_BlackColor,
    fontFamily: FONTFAMILY.DVC_Medium,
    letterSpacing: 0.3,
  },
  input: {
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: _COLORS.DVC_GrayColor,
    color: "#333",
    paddingLeft: 10,
    fontFamily: FONTFAMILY.DVC_Medium,
    marginTop: 10,
  },
  datePickerView: {
    flexDirection: "row",
  },
  error_text: { color: "red", marginLeft: 10 },
});
