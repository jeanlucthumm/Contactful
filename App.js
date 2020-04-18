import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <EyeInfo side='left'/>
    </View>
  );
}

function EyeInfo(props) {
  return (
    <View style={styles.eyeInfo}>
      <Text style={styles.eyeHeading}>{capital(props.side)}</Text>
      <View style={styles.horizontalDivider}/>

      <Date type='start' />
      <Date type='end' />
    </View>
  );
}

function Date(props) {
  return (
    <View style={styles.date}>
      <Text style={styles.subheading}>{capital(props.type)}</Text>
      <View style={styles.dateBackground}>
        <Text style={styles.dateText}>04/20</Text>
      </View>
    </View>
  );
}

function capital(word) {
  return word.charAt(0).toUpperCase() +
    word.slice(1);
}
