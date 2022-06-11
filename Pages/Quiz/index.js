import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Questions from '../../Components/Questions';
import Options from '../../Components/Options';
import Button from '../../Components/Button';

const Quiz = ({navigation}) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [opt, setOpt] = useState([]);
  const [score, setScore] = useState(0);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=15&type=multiple&encode=url3986';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.results[0]);
    setQuestion(data.results);
    setOpt(generateOptAndShuffle(data.results[0]));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const nextQues = () => {
    setQues(ques + 1);
    setOpt(generateOptAndShuffle(question[ques + 1]));
  };

  const generateOptAndShuffle = _question => {
    const opt = [..._question.incorrect_answers];
    opt.push(_question.correct_answer);
    shuffleArray(opt);

    return opt;
  };

  const answer = _opt => {
    if (_opt === question[ques].correct_answer) {
      setScore(score + 1);
    }
    if (ques !== 14) {
      nextQues();
    } else {
      navigation.navigate('Result');
    }
    console.log(score);
  };

  return (
    <View style={styles.container}>
      {question && (
        <View style={styles.parent}>
          <View>
            <Questions text={decodeURIComponent(question[ques].question)} />
          </View>
          <View>
            <Options
              option={decodeURIComponent(opt[0])}
              onPress={() => answer(opt[0])}
            />
            <Options
              option={decodeURIComponent(opt[1])}
              onPress={() => answer(opt[1])}
            />
            <Options
              option={decodeURIComponent(opt[2])}
              onPress={() => answer(opt[2])}
            />
            <Options
              option={decodeURIComponent(opt[3])}
              onPress={() => answer(opt[3])}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title={'Previous'} />

            {ques !== 14 && (
              <Button
                title={'SKIP'}
                fontWeight={'bold'}
                onPress={() => nextQues()}
              />
            )}
            {ques === 14 && (
              <Button
                title={'Finish'}
                fontWeight={'bold'}
                onPress={() => navigation.navigate('Result')}
              />
            )}
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
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 25,
  },
});
