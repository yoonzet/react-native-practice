import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function MealItem({id, title, affordability, complexity, imageUrl, duration}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
