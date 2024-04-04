import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {ScheduleListStyle} from './ScheduleListStyle';
import TopHeader from '../../components/Header/TopHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {IMAGES, _COLORS} from '../../Themes';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchUserDataSuccess} from '../../redux/Actions/SetUserActionApi';
import {useFocusEffect} from '@react-navigation/native';
import CustomSingleButton from '../../components/CustomButton/CustomSingleButton';
import moment from 'moment/moment';

const ScheduleList = props => {
  const dispatch = useDispatch();
  // getItem...
  const matchListData = useSelector(state => state?.UserDataReducer?.data);
  console.log('matchListData in list.....', matchListData);
  // RemoveItem.
  const removeItemFromList = async itemIdToRemove => {
    try {
      const indexToRemove = matchListData.findIndex(
        item => item.id === itemIdToRemove,
      );
      if (indexToRemove !== -1) {
        const updatedList = matchListData.filter(
          (item, index) => index !== indexToRemove,
        );

        await AsyncStorage.setItem('matches', JSON.stringify(updatedList));
        dispatch(fetchUserDataSuccess(updatedList));
        console.log('Item removed successfully');
        alert("Match removed successfully")
      } else {
        console.log('Item not found in the list');
      }
    } catch (error) {
      console.error('Error removing item from list:', error);
    }
  };

  const matchListRender = ({item}) => {
    return (
      <TouchableOpacity
        style={ScheduleListStyle.card}
        onPress={() => {
          props.navigation.navigate('ScheduleMatch', {
            itemId: item.id,
            editMode: 'EditMode',
          });
        }}>
        <View style={ScheduleListStyle.WorldcupView}>
          <Text style={ScheduleListStyle.worldCupText}>{'World cup'}</Text>
          <TouchableOpacity
            style={ScheduleListStyle.crossIconView}
            onPress={() => {
              removeItemFromList(item?.id);
            }}>
            <Entypo name="cross" size={20} color={_COLORS.DVC_BlackColor} />
          </TouchableOpacity>
        </View>
        <View style={ScheduleListStyle.teamsContainer}>
          <Image source={IMAGES?.Mi} style={ScheduleListStyle.teamLogo} />
          <Text style={ScheduleListStyle.vsText}>vs</Text>
          <Image source={IMAGES?.csk} style={ScheduleListStyle.teamLogo} />
        </View>
        <View style={ScheduleListStyle.teamsContainer}>
          <Text style={ScheduleListStyle.teamText}>{item?.teamA}</Text>
          {/* <Text style={ScheduleListStyle.vsText}>vs</Text> */}
          <Text style={[ScheduleListStyle.teamText, {textAlign: 'right'}]}>
            {item?.teamB}
          </Text>
        </View>
        <View style={ScheduleListStyle.dateTimeContainer}>
          <View style={ScheduleListStyle.dateTimeContainer}>
            <Octicons
              name="stopwatch"
              size={20}
              color={_COLORS.DVC_BlackColor}
            />
            <Text style={ScheduleListStyle.dateTimeText}>{item?.time}</Text>
          </View>
          <Text style={ScheduleListStyle.dateTimeText}>
            {moment(item?.date).format('D MMM YYYY')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const goBack = () => {
    props.navigation.pop();
  };
  return (
    <>
      <View style={ScheduleListStyle.container}>
        <TopHeader
          onPressLeftButton={() => {
            goBack();
          }}
        />
        <Text style={ScheduleListStyle.ScheduleText}>Matches List</Text>
          <FlatList
            data={matchListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={matchListRender}
          />
      </View>
    </>
  );
};

export default ScheduleList;
