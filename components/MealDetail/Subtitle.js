import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Subtitle({children}) {
  return (
    <View>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 1,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
