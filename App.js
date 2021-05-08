import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MainScreen from './src/Screens/MainScreen';
import counterReducer from './src/Store/Reducers/counterReducer';

const App = () => {
  const rootReducer = combineReducers({
    counter: counterReducer,
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fed049'}}>
        <StatusBar barStyle={'dark-content'} />
        <MainScreen style={styles.mainScreen} />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
});

export default App;
