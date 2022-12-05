import React from 'react';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

function CategoryScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      //   navigation.navigate('이동하고자 하는 화면의 이름', (선택사항){params(매개변수)});
      navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
    }
    return (
      <>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </>
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
