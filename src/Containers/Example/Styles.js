import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'src/Theme'

export default StyleSheet.create({
  error: {
    ...Fonts.medium,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.h3,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.medium,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.medium,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
})
