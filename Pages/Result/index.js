import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackHandler} from 'react-native';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>RESULTS</Text>
          {score > 5 && (
            <Image
              source={require('../../Assets/Images/champion.png')}
              style={{width: 200, height: 200}}
            />
          )}
          {score < 5 && (
            <Image
              source={require('../../Assets/Images/fail.png')}
              style={{width: 200, height: 200}}
            />
          )}
          <Text style={styles.resultText}>
            YOUR SCORES: {(score / 10) * 100} POINTS
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../Assets/Images/HomeIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Image
            source={require('../../Assets/Images/SignOutIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EFE7',
  },
  iconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 25,
  },
  resultContainer: {
    backgroundColor: '#FDFAF6',
    width: 330,
    height: 495,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  resultText: {
    marginVertical: 40,
    fontSize: 22,
    fontWeight: '900',
    color: '#064420',
  },
});
