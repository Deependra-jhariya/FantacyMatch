import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FONTFAMILY, _COLORS} from '../../Themes';
import {TopHeaderStyle} from './TopHeaderStyle';
import {IMAGES} from '../../Themes';
const TopHeader = () => {
  return (
    <View style={TopHeaderStyle.mainView}>
      <TouchableOpacity>
        <Icon name="ios-menu" size={30} color="#000" />
      </TouchableOpacity>
      {/* <Text
        style={TopHeaderStyle.middletext}>
        {'Header'}
      </Text> */}
      <Image
        source={IMAGES.Splash}
        style={{width: 100, height: 40}}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => {
          /* Handle bell icon press */
        }}>
        <Icon name="ios-notifications-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default TopHeader;
const styles = StyleSheet.create({});
