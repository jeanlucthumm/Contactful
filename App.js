import React, {useState} from 'react';
import {Text, View} from 'react-native';
import * as Font from 'expo-font';
import styles from './styles';
import {AppLoading} from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    cursive: require('./assets/fonts/cursive.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactful</Text>
      <View style={styles.content}>
        <EyeInfo side='left'/>
        <View style={styles.verticalDivider}/>
        <EyeInfo side='right'/>
      </View>
    </View>
  );
}

function EyeInfo(props) {
  return (
    <View style={styles.eyeInfo}>
      <Text style={styles.eyeHeading}>{capital(props.side)}</Text>
      <View style={styles.horizontalDivider}/>

      <View style={{marginTop: 20}}>
        <Date type='start'/>
        <Date type='end'/>
      </View>
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
