import {StyleSheet} from "react-native";

// Color scheme
const colors = {
  background: '#3D5467',
  foreground: '#F1EDEE',
  secondary: '#8AA29E',
  accent: '#426581',
  highlight: '#db5461',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeInfo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  eyeHeading: {
    color: colors.foreground,
    fontSize: 30,
  },
  horizontalDivider: {
    marginTop: 6.5,
    backgroundColor: colors.foreground,
    width: 86,
    height: 1,
  },

  dateBackground: {
    padding: 4,
    backgroundColor: colors.accent,
  },
  dateText: {
    color: colors.foreground,
    fontSize: 23,
  },
  subheading: {
    marginTop: 12,
    color: colors.secondary
  }
})
