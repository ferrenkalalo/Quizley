import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Questions from '../../Components/Questions';
import Options from '../../Components/Options';
import Button from '../../Components/Button';

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Questions />
      </View>
      <View>
        <Options option={'Option 1'} />
        <Options option={'Option 2'} />
        <Options option={'Option 3'} />
        <Options option={'Option 4'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Skip'} />
        <Button
          title={'Next'}
          fontWeight={'bold'}
          onPress={() => navigation.navigate('Result')}
        />
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EFE7',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 25,
  },
});
