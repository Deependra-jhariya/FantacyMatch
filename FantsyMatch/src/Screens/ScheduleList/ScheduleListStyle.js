import {StyleSheet} from 'react-native';
import {FONTFAMILY, _COLORS} from '../../Themes';
export const ScheduleListStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  WorldcupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crossIconView: {alignSelf: 'center'},
  worldCupText: {
    fontSize: 15,
    color: _COLORS.DVC_BlackColor,
    fontFamily: FONTFAMILY.DVC_Bold,
  },
  ScheduleText: {
    fontSize: 25,
    color: _COLORS.DVC_BlueColor,
    fontFamily: FONTFAMILY.DVC_Bold,
    paddingVertical: 10,
    marginLeft: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5,
    // padding:20,
    marginVertical: 10,
    elevation: 5, // for Android shadow
    shadowColor: _COLORS.DVC_BlueColor,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    marginHorizontal: 16,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginVertical: 10,
  },
  teamText: {
    // flex: 1,
    fontSize: 18,
    color: _COLORS.DVC_ExtraLightGrayColor,
    fontFamily: FONTFAMILY.DVC_Medium,
  },
  vsText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 20,
    color: _COLORS.DVC_BlackColor,
    fontFamily: FONTFAMILY.DVC_Medium,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  dateTimeText: {
    fontSize: 14,
    color: '#999999',
    color: _COLORS.DVC_BlackColor,
    fontFamily: FONTFAMILY.DVC_Medium,
    marginLeft:20
  },
});
