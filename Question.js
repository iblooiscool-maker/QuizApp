import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

const Question = ({ route, navigation }) => {
  const { questions, index } = route.params;
  const currentQuestion = questions[index];
  const [selected, setSelected] = useState(null);

  const handleSelection = (selectedIndex) => {
    setSelected(selectedIndex);
  };

  const handleNext = () => {
    
    questions[index].selected = selected;

    
    if (index + 1 < questions.length) {
      navigation.navigate('Question', {
        questions,
        index: index + 1,
      });
    } else {
      navigation.navigate('Summary', { questions });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{currentQuestion.prompt}</Text>
      <ButtonGroup
        buttons={currentQuestion.choices}
        selectedIndex={selected}
        onPress={handleSelection}
        containerStyle={styles.buttonGroup}
        selectedButtonStyle={styles.selectedButton}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        testID="choices"
      />
      {/* Center the "Next Question" button */}
      <TouchableOpacity onPress={handleNext} style={styles.nextButton} testID="next-question">
        <Text style={styles.nextButtonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 20,
  },
  buttonGroup: {
    width: '100%',
    marginBottom: 30,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '60%',  
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Question;