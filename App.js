import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

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
            name="Drawer"
            component={DrawerNavigator}
            // options={{title: 'All Categories'}}
          />
          <Stack.Screen
            name="MealsOverview" //식별자로 쓰임
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
