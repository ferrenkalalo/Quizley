import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../Assets/Images/QuizleyLogo.png')}
          style={{width: 350, height: 350}}
        />
      </View>
      <View style={styles.startContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EFE7',
  },
  logo: {
    alignItems: 'center',
    marginTop: 150,
  },
  startContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  startButton: {
    width: 120,
    height: 120,
    backgroundColor: '#064420',
    borderLeftRadius: 200,
    borderTopStartRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 15,
  },
  startText: {
    fontSize: 25,
    color: '#FAF1E6',
    fontWeight: 'bold',
  },
});
