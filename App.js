import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View>
      <View>
        <TextInput placeholder="text input" />
        <Button title="add" />
      </View>
      <View>
        <Text>hello </Text>
      </View>
    </View>
  );
};

export default App;
