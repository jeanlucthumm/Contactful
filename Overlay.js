import {overlayStyles as styles} from "./styles";
import {Text, View} from "react-native";
import React from "react";
import {Button} from "react-native-elements";

export const ActionType = {
  RESET: 'reset',
  SKIP: 'skip',
}

// Props taken:
//    actionType: one of ActionType enum
//    onCancel:   function to run when cancel is pressed
export default function ConfirmOverlay(props) {
  let infoText;
  if (props.actionType === ActionType.RESET) {
    infoText = 'Are you sure you want to reset?';
  } else if (props.actionType === ActionType.SKIP) {
    infoText = 'Are you sure you want to skip?';
  }

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{infoText}</Text>
      {props.actionType === ActionType.RESET &&
      <Text style={styles.text}> What was the reason? </Text>
      }
      <View style={styles.buttonTopContainer}>
        <Button title='Cancel'
                type='solid'
                raised={true}
                onPress={props.onCancel}
                titleStyle={styles.text}
                buttonStyle={styles.cancelButton}
                containerStyle={styles.buttonContainer}
        />
        <Button title='Confirm'
                type='solid'
                raised={true}
                titleStyle={styles.text}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
        />
      </View>
    </View>
  );
}
