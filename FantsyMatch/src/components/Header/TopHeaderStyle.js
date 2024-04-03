import {StyleSheet} from 'react-native';
import { _COLORS,FONTFAMILY } from '../../Themes';
export const TopHeaderStyle = StyleSheet.create({
  mainView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: _COLORS.DVC_BlueColor,
  },
  middletext:{
    fontSize: 20,
    fontFamily: FONTFAMILY.DVC_Bold,
    color: _COLORS.DVC_BlackColor,
  },
});
