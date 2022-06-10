import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress, fontWeight = 'normal'}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text(fontWeight)} onPress={onPress}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: fontWeight => ({
    fontSize: 22,
    fontWeight: fontWeight,
    color: '#064420',
    marginBottom: 30,
  }),
});
