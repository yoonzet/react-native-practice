import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoryScreen} />
      </Stack.Navigator>
      {/* <CategoryScreen /> */}
    </NavigationContainer>
  );
};

export default App;
