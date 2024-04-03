import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';
import {IMAGES} from '../../Themes/CommonVectors/Images';
import {_COLORS} from '../../Themes/CommonColors/CommonColor';
import {SplashStyles} from './SplashStyle';

const Splash = props => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={[SplashStyles.container]}>
      <View style={SplashStyles.logoView}>
        <Image source={IMAGES?.Splash} style={SplashStyles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
