import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
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
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import ScheduleList from '../ScheduleList/ScheduleList';
const ScheduleMatch = props => {
  const isFocus = useIsFocused();
  const matchListData = useSelector(state => state?.UserDataReducer?.data);
  console.log('matchListData schedulematch.....', matchListData);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [firstTeam, setFirstTeam] = useState('');
  const [firstTeamError, setFirstTeamError] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const [secondTeamError, setSecondTeamError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateError, setSelectedDateError] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [currentTimeError, setCurrentTimeError] = useState('');
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    if (props.route.params.editMode == 'EditMode') {
      const itemId = props.route.params.itemId;
      // Find the item with the specified ID
      const selectedMatch = matchListData.find(item => item.id === itemId);
      console.log('selectedMatch....', selectedMatch);
      setFirstTeam(selectedMatch?.teamA);
      setSecondTeam(selectedMatch?.teamB);
      setSelectedDate(selectedMatch?.date);
      setCurrentTime(selectedMatch?.time);
    } else {
      props.route.params.CreateMode == 'CreateMode';
      setFirstTeam('');
      setSecondTeam('');
      setSelectedDate(null);
      setCurrentTime('');
    }
  }, [isFocus]);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
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
  // const handleSchedule = async () => {
  //   setIsLoading(true);

  //   try {
  //     const existingMatches = await AsyncStorage.getItem('matches');
  //     let matchesArray = [];
  //     if (existingMatches) {
  //       matchesArray = JSON.parse(existingMatches);
  //     }
  //     const newItem = {
  //       id: matchesArray.length + 1,
  //       teamA: firstTeam,
  //       teamB: secondTeam,
  //       date: selectedDate,
  //       time: currentTime,
  //     };

  //     if (props.route.params.editMode === 'EditMode') {
  //       const itemId = props.route.params.itemId;
  //       const indexToUpdate = matchesArray.findIndex(
  //         item => item.id === itemId,
  //       );
  //       if (indexToUpdate !== -1) {
  //         matchesArray[indexToUpdate] = newItem;
  //       } else {
  //         matchesArray.push(newItem);
  //         dispatch(fetchUserDataSuccess(matchesArray));
  //         props.navigation.navigate('ScheduleList');
  //       }
  //     } else {
  //       matchesArray.push(newItem);
  //     }
  //     await AsyncStorage.setItem('matches', JSON.stringify(matchesArray));
  //     dispatch(fetchUserDataSuccess(matchesArray));
  //     props.navigation.navigate('ScheduleList');
  //     setFirstTeam('');
  //     setSecondTeam('');
  //     setSelectedDate(null);
  //     setCurrentTime('');
  //   } catch (error) {
  //     console.error('Error saving match:', error);
  //   }

  //   setIsLoading(false);
  // };

  const handleSchedule = async () => {
    setIsLoading(true);

    try {
      const existingMatches = await AsyncStorage.getItem('matches');
      let matchesArray = [];
      if (existingMatches) {
        matchesArray = JSON.parse(existingMatches);
      }

      const isExistingMatch = matchesArray.some(
        match =>
          match.date === selectedDate &&
          match.time === currentTime &&
          match.id !== props.route.params.itemId,
      );

      if (isExistingMatch) {
        alert(
          'A match with the same date and time already exists. Please select a different date or time.',
        );
      } else {
        const newItem = {
          id: matchesArray.length + 1,
          teamA: firstTeam,
          teamB: secondTeam,
          date: selectedDate,
          time: currentTime,
        };

        if (props.route.params.editMode === 'EditMode') {
          const itemId = props.route.params.itemId;
          const indexToUpdate = matchesArray.findIndex(
            item => item.id === itemId,
          );

          if (indexToUpdate !== -1) {
            matchesArray[indexToUpdate] = newItem;
            alert('schedule edit successfully');
          } else {
            matchesArray.push(newItem);
            dispatch(fetchUserDataSuccess(matchesArray));
            props.navigation.navigate('ScheduleList');
          }
        } else {
          matchesArray.push(newItem);
          alert('Match schedule successfully');

        }
        await AsyncStorage.setItem('matches', JSON.stringify(matchesArray));
        dispatch(fetchUserDataSuccess(matchesArray));
        props.navigation.navigate('ScheduleList');
        setFirstTeam('');
        setSecondTeam('');
        setSelectedDate(null);
        setCurrentTime('');
      }
    } catch (error) {
      console.error('Error saving match:', error);
    }

    setIsLoading(false);
  };

  // Validation..

  const handleSchedulebtn = () => {
    if (firstTeam === '') {
      setFirstTeamError('First Team is Required.');
    } else if (secondTeam === '') {
      setSecondTeamError('Second Team is Required.');
    } else if (selectedDate === null) {
      setSelectedDateError('Request date is required.');
    } else if (currentTime === '') {
      setCurrentTimeError('Request time is required.');
    } else {
      handleSchedule();
    }
  };
  const validFirstTeam = text => {
    setFirstTeam(text);
    if (text.trim() === ' ') {
      setFirstTeamError('First Team is Required.');
    } else {
      setFirstTeamError('');
    }
  };
  const validSecondTeam = text => {
    setSecondTeam(text);
    if (text.trim() === ' ') {
      setSecondTeamError('Second Team is Required.');
    } else {
      setSecondTeamError('');
    }
  };
  const handleRequestDate = text => {
    setSelectedDate(text);
    if (text === null || text.trim() === '') {
      setSelectedDateError('Request date is required.');
    } else {
      setSelectedDateError('');
    }
  };
  const handleRequestTime = text => {
    setCurrentTime(text);
    if (text === null || text.trim() === '') {
      setCurrentTimeError('Request time is required.');
    } else {
      setCurrentTimeError('');
    }
  };

  return (
    <View style={ScheduleMatchStyle.container}>
      <TopHeader
      // onPressLeftButton={() => {
      //   goBack();
      // }}
      />
      <ScrollView>
        <View style={ScheduleMatchStyle.scheduleView}>
          <Text style={ScheduleMatchStyle.ScheduleText}>ScheduleMatch</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ScheduleList');
            }}>
            <Text style={ScheduleMatchStyle.ScheduleText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={ScheduleMatchStyle.card}>
          <View style={ScheduleMatchStyle.inputContainer}>
            <Text style={ScheduleMatchStyle.commontext}>{'First Team'}</Text>
            <TextInput
              style={ScheduleMatchStyle.input}
              value={firstTeam}
              onChangeText={validFirstTeam}
              onBlur={() => {
                validFirstTeam(firstTeam);
              }}
              placeholder="Enter Your First Team"
              placeholderTextColor="#999"
              keyboardType="ascii-capable"
            />
          </View>
          {firstTeamError ? (
            <Text style={ScheduleMatchStyle.error_text}>{firstTeamError}</Text>
          ) : null}
          <View style={ScheduleMatchStyle.inputContainer}>
            <Text style={ScheduleMatchStyle.commontext}>{'Second Team'}</Text>
            <TextInput
              style={ScheduleMatchStyle.input}
              value={secondTeam}
              onChangeText={validSecondTeam}
              onBlur={() => {
                validSecondTeam(secondTeam);
              }}
              placeholder="Enter Your First Team"
              placeholderTextColor="#999"
              keyboardType="ascii-capable"
            />
          </View>
          {secondTeamError ? (
            <Text style={ScheduleMatchStyle.error_text}>{secondTeamError}</Text>
          ) : null}
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
              // onDayPress={handleDayPress}
              onDayPress={day => handleRequestDate(day.dateString)}
              onChangeText={() => handleRequestDate(selectedDate)}
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
          {selectedDateError ? (
            <Text style={ScheduleMatchStyle.error_text}>
              {selectedDateError}
            </Text>
          ) : null}
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
              const formattedTime = moment(date).format('hh:mm A');
              setCurrentTime(formattedTime);
              handleRequestTime(formattedTime); // Call validation function here
            }}
          />
          {currentTimeError ? (
            <Text style={ScheduleMatchStyle.error_text}>
              {currentTimeError}
            </Text>
          ) : null}
        </View>
        <View style={{margin: 16}}>
          <CustomSingleButton
            _ButtonText={'Schedule'}
            backgroundColor={_COLORS.DVC_BlueColor}
            Text_Color={_COLORS.DVC_WhiteColor}
            //   disabled={isLoading ? true : false}
            onPress={() => {
              // handleSchedule();
              handleSchedulebtn();
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
