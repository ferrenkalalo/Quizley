import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../Assets/Images/HomeIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/Images/SignOutIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.emotContainer}>
        <Image
          source={require('../../Assets/Images/SmileEmot.png')}
          style={{width: 100, height: 100}}
        />
        <Image
          source={require('../../Assets/Images/SadEmot.png')}
          style={{width: 100, height: 100}}
        />
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
  emotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
