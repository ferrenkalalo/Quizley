import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Options = ({option, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
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
    width: 330,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FDFAF6',
  },
});
