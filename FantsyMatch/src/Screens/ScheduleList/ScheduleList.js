import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScheduleListStyle} from './ScheduleListStyle';
import TopHeader from '../../components/Header/TopHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {_COLORS} from '../../Themes';
import {FlatList} from 'react-native';
const ScheduleList = () => {
  const ListData = [
    {
      SeriesName: 'World cup',
      firstTeam: 'India',
      secondTeam: 'Australia',
      Date: '28 aug',
      Time: '11:30 pm',
    },
    {
      SeriesName: 'World cup',
      firstTeam: 'India',
      secondTeam: 'Australia',
      Date: '28 aug',
      Time: '11:30 pm',
    },
    {
      SeriesName: 'World cup',
      firstTeam: 'India',
      secondTeam: 'Australia',
      Date: '28 aug',
      Time: '11:30 pm',
    },
    {
      SeriesName: 'World cup',
      firstTeam: 'India',
      secondTeam: 'Australia',
      Date: '28 aug',
      Time: '11:30 pm',
    },
    {
      SeriesName: 'World cup',
      firstTeam: 'India',
      secondTeam: 'Australia',
      Date: '28 aug',
      Time: '11:30 pm',
    },
  ];

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
          <Text style={ScheduleListStyle.teamText}>{'India'}</Text>
          <Text style={ScheduleListStyle.vsText}>vs</Text>
          <Text style={[ScheduleListStyle.teamText]}>{'Australia'}</Text>
        </View>
        <View style={ScheduleListStyle.dateTimeContainer}>
          <View style={ScheduleListStyle.dateTimeContainer}>
            <Octicons
              name="stopwatch"
              size={20}
              color={_COLORS.DVC_BlackColor}
            />
            <Text style={ScheduleListStyle.dateTimeText}>{'28 Aug'}</Text>
          </View>
          <Text style={ScheduleListStyle.dateTimeText}>{'11;30 pm'}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={ScheduleListStyle.container}>
        <TopHeader />
        <Text style={ScheduleListStyle.ScheduleText}>Matches List</Text>
        <ScrollView>
          <FlatList
            data={ListData}
            keyExtractor={(item, index) => item.id}
            renderItem={matchListRender}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ScheduleList;
