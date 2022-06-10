import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Questions = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Questions Here</Text>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
  },
  container: {
    width: 320,
    height: 200,
    borderColor: '#064420',
    borderRadius: 1,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#064420',
  },
});
