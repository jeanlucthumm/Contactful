import {StyleSheet} from "react-native";

// Color scheme
export const colors = {
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
    paddingBottom: '10%',
  },
  overlay: {
    backgroundColor: colors.background,
    width: '80%',
    height: '30%',
  },
  settingsSvg: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  eyeSvg: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 40,
    width: '100%',
    fontFamily: 'cursive',
    fontSize: 40,
    color: colors.foreground,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  eyeInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  eyeHeading: {
    color: colors.foreground,
    fontSize: 25,
    paddingTop: 0,
    marginTop: 0,
  },
  horizontalDivider: {
    marginTop: 6.5,
    backgroundColor: colors.foreground,
    width: '100%',
    height: 1,
  },
  verticalDivider: {
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: colors.foreground,
    width: 1,
    height: '100%',
  },

  dateBackground: {
    marginTop: 6,
    marginBottom: 20,

    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 15,
    paddingRight: 15,

    backgroundColor: colors.accent,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  dateText: {
    color: colors.foreground,
    fontSize: 30,
  },
  subheading: {
    color: colors.secondary,
    fontSize: 11,
  },

  buttonContainer: {
    // flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 50/2,
    margin: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetSvg: {
    width: '100%',
    height: '100%',
  },
  skipSvg: {
    marginBottom: 8,
  },
})

export const overlayStyles = StyleSheet.create({
  container: {
  },
  text: {
    color: colors.foreground,
  },
  button: {
    backgroundColor: colors.accent,
  },
  cancelButton: {
    backgroundColor: colors.highlight,
  },
  buttonContainer: {
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  },
  buttonTopContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
