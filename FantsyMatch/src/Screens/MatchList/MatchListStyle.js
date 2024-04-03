import {StyleSheet} from 'react-native';
import { _COLORS } from '../../Themes';
export const MatchListStyle = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        elevation: 2, // for Android shadow
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      teamText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      vsText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      dateTimeText: {
        fontSize: 14,
        color: '#999999',
      },
});
