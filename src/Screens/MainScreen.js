import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../Store/Actions/counterAction';

const MainScreen = () => {
  const currentCount = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  const incrementHandler = useCallback(() => {
    dispatch(increment(1));
  }, [dispatch]);

  const decrementHandler = useCallback(() => {
    dispatch(decrement(1));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{currentCount}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            incrementHandler();
          }}>
          <Text style={styles.buttonTitle}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            decrementHandler();
          }}>
          <Text style={styles.buttonTitle}>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fed049',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fed049',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fed049',
  },
  button: {
    backgroundColor: '#282846',
    borderRadius: 5,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007580',
  },
  title: {
    fontSize: 70,
    fontWeight: '600',
    color: '#007580',
  },
});

export default MainScreen;
