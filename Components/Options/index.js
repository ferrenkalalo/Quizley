import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Options = ({option}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>{option}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#4B8673',
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FDFAF6',
  },
});
