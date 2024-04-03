import {StyleSheet, Text, View, TextInput, ScrollView,BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopHeader from '../../components/Header/TopHeader';
import {ScheduleMatchStyle} from './ScheduleMatchStyle';
import CalendarModal from '../../components/CalenderModal/CalenderModal';
import {_COLORS} from '../../Themes';
import TimePicker from '../../components/ClockPicker/TimePicker';
import moment from 'moment';
import CustomSingleButton from '../../components/CustomButton/CustomSingleButton';
import {CommonLoader} from '../../components/CommonLoader/CommonLoader';
import {fetchUserDataSuccess} from '../../redux/Actions/SetUserActionApi';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const ScheduleMatch = props => {
  const matchListData = useSelector(state => state?.UserDataReducer?.data);
  console.log('matchListData.....', matchListData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [firstTeam, setFirstTeam] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [matches, setMatches] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        refRBSheet.current.close();
        setIsClick(0);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  const goBack = () => {
    props.navigation.pop();
  };
  // Calender..
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleDayPress = day => {
    setSelectedDate(day.dateString);
  };
  const handleSchedule = async () => {
    setIsLoading(true);
    const newMatch = {
      teamA: firstTeam,
      teamB: secondTeam,
      date: selectedDate,
      time: currentTime,
    };
    try {
      const existingMatches = await AsyncStorage.getItem('matches');
      let matchesArray = [];
      if (existingMatches) {
        matchesArray = JSON.parse(existingMatches);
      }
      matchesArray.push(newMatch);
      await AsyncStorage.setItem('matches', JSON.stringify(matchesArray));
      dispatch(fetchUserDataSuccess(matchesArray));
      props.navigation.navigate('ScheduleList');
      setFirstTeam('');
      setSecondTeam('');
      setSelectedDate(null);
      setCurrentTime('');
    } catch (error) {
      console.error('Error saving match:', error);
    }
    setIsLoading(false);
  };
  return (
    <View style={ScheduleMatchStyle.container}>
      <TopHeader
      />
      <ScrollView>
        <Text style={ScheduleMatchStyle.ScheduleText}>ScheduleMatch</Text>
        <View style={ScheduleMatchStyle.card}>
          <View style={ScheduleMatchStyle.inputContainer}>
            <Text style={ScheduleMatchStyle.commontext}>{'First Team'}</Text>
            <TextInput
              style={ScheduleMatchStyle.input}
              value={firstTeam}
              onChangeText={setFirstTeam}
              placeholder="Enter Your First Team"
              placeholderTextColor="#999"
              keyboardType="ascii-capable"
            />
          </View>
          <View style={ScheduleMatchStyle.inputContainer}>
            <Text style={ScheduleMatchStyle.commontext}>{'Second Team'}</Text>
            <TextInput
              style={ScheduleMatchStyle.input}
              value={secondTeam}
              onChangeText={setSecondTeam}
              placeholder="Enter Your First Team"
              placeholderTextColor="#999"
              keyboardType='ascii-capable'
            />
          </View>
          <Text style={[ScheduleMatchStyle.commontext, {marginTop: 15}]}>
            {'Select Date'}
          </Text>
          <View style={ScheduleMatchStyle.datePickerView}>
            <CalendarModal
              SelectDate={
                selectedDate ? selectedDate : 'Start date of the lease'
              }
              _textInputStyle={{
                color: selectedDate
                  ? _COLORS.DVC_BlackColor
                  : _COLORS.DVC_GrayColor,
              }}
              calenderIcon={toggleModal}
              onDayPress={handleDayPress}
              Visible={isModalVisible}
              onRequestClose={toggleModal}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: _COLORS.DVC_GrayColor,
                  selectedTextColor: _COLORS.DVC_BlackColor,
                },
              }}
              _closeButton={toggleModal}
              _ApplyButton={toggleModal}
            />
          </View>
          <Text style={[ScheduleMatchStyle.commontext, {marginTop: 15}]}>
            {'Select Time'}
          </Text>
          <TimePicker
            selectedTime={
              currentTime && currentTime != ''
                ? String(currentTime)
                : 'Select time'
            }
            _TextTimeColor={
              currentTime ? _COLORS.DVC_BlackColor : _COLORS.DVC_GrayColor
            }
            data={new Date()}
            getData={date => {
              setCurrentTime(moment(date).format('hh:mm A'));
            }}
          />
        </View>
        <View style={{margin: 16}}>
          <CustomSingleButton
            _ButtonText={'Schedule'}
            backgroundColor={_COLORS.DVC_BlueColor}
            Text_Color={_COLORS.DVC_WhiteColor}
            //   disabled={isLoading ? true : false}
            onPress={() => {
              // selectDoc();
              handleSchedule();
            }}
          />
        </View>
        {isLoading ? <CommonLoader /> : null}
      </ScrollView>
    </View>
  );
};

export default ScheduleMatch;

const styles = StyleSheet.create({});
