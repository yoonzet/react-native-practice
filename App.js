import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#287798'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#292000'},
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{title: 'All Categories'}}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {title: catId};
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}

            //MealDetailScreen.js에 직접 써줌
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
