import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ route }) => {
  const { questions } = route.params; // Getting the questions from route.params
  let totalScore = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Summary</Text>
      {questions && questions.length > 0 ? (
        questions.map((question, index) => {
          const isCorrect =
            Array.isArray(question.correct)
              ? question.correct.includes(question.selected)
              : question.correct === question.selected;

          if (isCorrect) totalScore++;

          return (
            <View key={index} style={styles.question}>
              <Text style={styles.questionText}>{question.prompt}</Text>
              {question.choices.map((choice, i) => {
                const isSelected = question.selected === i;
                const isCorrectChoice = Array.isArray(question.correct)
                  ? question.correct.includes(i)
                  : question.correct === i;
                const style = isSelected
                  ? isCorrectChoice
                    ? styles.correct
                    : styles.incorrect
                  : null;

                return (
                  <Text key={i} style={[styles.choiceText, style]}>
                    {choice}
                  </Text>
                );
              })}
            </View>
          );
        })
      ) : (
        <Text>No questions found</Text> 
      )}
      <Text style={styles.total} testID="total">
        Total Score: {totalScore} / {questions.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  question: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  choiceText: {
    fontSize: 16,
    paddingVertical: 5,
  },
  correct: {
    fontWeight: 'bold',
    color: '#28a745', // Green for correct answers
  },
  incorrect: {
    textDecorationLine: 'line-through',
    color: '#dc3545', // Red for incorrect answers
  },
  total: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Summary;