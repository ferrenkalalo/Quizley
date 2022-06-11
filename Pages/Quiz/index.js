import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Questions from '../../Components/Questions';
import Options from '../../Components/Options';
import Button from '../../Components/Button';

const Quiz = ({navigation}) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=15&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.results[0]);
    setQuestion(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const nextQues = () => {};

  return (
    <View style={styles.container}>
      {question && (
        <View style={styles.parent}>
          <View>
            <Questions text={question[ques].question} />
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
              onPress={() => nextQues()}
            />
            <Button
              title={'Finish'}
              fontWeight={'bold'}
              onPress={() => navigation.navigate('Result')}
            />
          </View>
        </View>
      )}
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
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 25,
  },
});
