import React from 'react';
import {Text, View} from 'react-native';

function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
