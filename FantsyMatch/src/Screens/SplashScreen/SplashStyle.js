import {StyleSheet} from 'react-native';
import { _COLORS } from '../../Themes';
export const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:_COLORS.DVC_BlueColor
  },
  logoView: {
    flex:1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  logo: {height: 60, width: 180},
});
