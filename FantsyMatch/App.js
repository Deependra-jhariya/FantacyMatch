import {View, Text} from 'react-native';
import React from 'react';
import MainPage from './src';
import store,{persistor} from './src/redux/Store/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  );
};

export default App;
