import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import * as Font from 'expo-font';
import styles, {colors} from './styles';
import {AppLoading} from 'expo';
import {Overlay} from 'react-native-elements';
import ConfirmOverlay, {ActionType} from "./Overlay";

import Reset from './assets/svg/reset.svg';
import Skip from './assets/svg/skip.svg';
import Eye from './assets/svg/london-eye.svg';
import Settings from './assets/svg/settings.svg';

const fetchFonts = () => {
  return Font.loadAsync({
    cursive: require('./assets/fonts/cursive.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayType, setOverlayType] = useState(ActionType.RESET);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}/>
    )
  }

  return (
    <View style={styles.container}>
      <Overlay isVisible={overlayVisible}
               overlayStyle={styles.overlay}
               onBackdropPress={() => {
                 setOverlayVisible(false)
               }}>
        <ConfirmOverlay actionType={overlayType}
                        onCancel={() => setOverlayVisible(false)}/>
      </Overlay>
      <Settings
        style={styles.settingsSvg}
        fill={colors.foreground}
        stroke={colors.foreground}
        width='35'
        height='35'
        strokeWidth='0.2'
      />
      <Eye
        style={styles.eyeSvg}
        width='50'
        height='50'
      />
      <Text style={styles.title}>Contactful</Text>
      <View style={styles.content}>
        <EyeInfo side='left'
                 onResetPress={() => {
                   setOverlayType(ActionType.RESET)
                   setOverlayVisible(true)
                 }}
                 onSkipPress={() => {
                   setOverlayType(ActionType.SKIP)
                   setOverlayVisible(true)
                 }}/>
        <View style={styles.verticalDivider}/>
        <EyeInfo side='right'
                 onResetPress={() => {
                   setOverlayType(ActionType.RESET)
                   setOverlayVisible(true)
                 }}
                 onSkipPress={() => {
                   setOverlayType(ActionType.SKIP)
                   setOverlayVisible(true)
                 }}/>
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

      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button}
                            onPress={props.onResetPress}>
          <Reset
            style={styles.resetSvg}
            fill='black'
            stroke='black'
            width='35'
            height='35'
            strokeWidth='0.2'
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                            onPress={props.onSkipPress}>
          <Skip
            style={styles.skipSvg}
            fill='black'
            stroke='black'
            width='35'
            height='35'
            strokeWidth='0.2'
          />
        </TouchableHighlight>
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
