import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {ScheduleListStyle} from './ScheduleListStyle';
import TopHeader from '../../components/Header/TopHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {_COLORS} from '../../Themes';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
const ScheduleList = (props) => {
  const matchListData = useSelector(state => state?.UserDataReducer?.data);
  console.log('matchListData in list.....', matchListData);

  const matchListRender = ({item}) => {
    return (
      <View style={ScheduleListStyle.card}>
        <View style={ScheduleListStyle.WorldcupView}>
          <Text style={ScheduleListStyle.worldCupText}>{'World cup'}</Text>
          <TouchableOpacity style={ScheduleListStyle.crossIconView}>
            <Entypo name="cross" size={20} color={_COLORS.DVC_BlackColor} />
          </TouchableOpacity>
        </View>
        <View style={ScheduleListStyle.teamsContainer}>
          <Text style={ScheduleListStyle.teamText}>{item?.teamA}</Text>
          <Text style={ScheduleListStyle.vsText}>vs</Text>
          <Text style={[ScheduleListStyle.teamText]}>{item?.teamB}</Text>
        </View>
        <View style={ScheduleListStyle.dateTimeContainer}>
          <View style={ScheduleListStyle.dateTimeContainer}>
            <Octicons
              name="stopwatch"
              size={20}
              color={_COLORS.DVC_BlackColor}
            />
            <Text style={ScheduleListStyle.dateTimeText}>{item?.date}</Text>
          </View>
          <Text style={ScheduleListStyle.dateTimeText}>{item?.time}</Text>
        </View>
      </View>
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
        <ScrollView>
          <FlatList
            data={matchListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={matchListRender}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ScheduleList;
