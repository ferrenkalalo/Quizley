import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Questions from '../../Components/Questions';
import Options from '../../Components/Options';
import Button from '../../Components/Button';

const Quiz = ({navigation}) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [opt, setOpt] = useState([]);
  const [score, setScore] = useState(0);
  const [Loading, setLoading] = useState(false);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getQuiz = async () => {
    setLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const response = await fetch(url);
    const data = await response.json();
    setQuestion(data.results);
    setOpt(generateOptAndShuffle(data.results[0]));
    setLoading(false);
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
    if (ques !== 9) {
      nextQues();
    } else {
      showResult();
    }
  };

  const showResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {Loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Images/LoadingIcon.png')}
            style={{width: 200, height: 200}}
          />
        </View>
      ) : (
        question && (
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
              <Button title={'PREV'} />

              {ques !== 9 && (
                <Button
                  title={'SKIP'}
                  fontWeight={'bold'}
                  onPress={() => nextQues()}
                />
              )}
              {ques === 9 && (
                <Button
                  title={'Finish'}
                  fontWeight={'bold'}
                  onPress={() => showResult()}
                />
              )}
            </View>
          </View>
        )
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
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 25,
  },
});
