import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I wonder how quickly this new text will appear</Text>
      <EyeInfo side="left"/>
    </View>
  );
}

function EyeInfo(props) {
  let side = props.side.charAt(0).toUpperCase() +
    props.side.slice(1);
  return (
    <View>
      <Text>{side}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
