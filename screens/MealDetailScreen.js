import React from 'react';
import {Image, Text, View} from 'react-native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <View>
        <Image source={{uri: selectedMeal.imageUrl}} />
        <Text>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredients => (
          <Text key={ingredients}>{ingredients}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal.steps.map(steps => (
          <Text key={steps}>{steps}</Text>
        ))}
      </View>
    </View>
  );
}

export default MealDetailScreen;
