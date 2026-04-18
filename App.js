import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Question from './Question'; // Import Question component
import Summary from './Summary'; // Import Summary component

const Stack = createStackNavigator();

export default function App() {
  // Sample question data
  const questions = [
    {
      prompt: 'Is the sky blue?',
      type: 'true-false',
      choices: ['True', 'False'],
      correct: 0,
    },
    {
      prompt: 'What is the capital of France?',
      type: 'multiple-choice',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correct: 2,
    },
    {
      prompt: 'Select the primary colors',
      type: 'multiple-answer',
      choices: ['Red', 'Blue', 'Green', 'Yellow'],
      correct: [0, 1],
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Question">
        <Stack.Screen name="Question" component={Question} initialParams={{ questions, index: 0 }} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}