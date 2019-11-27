import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import { Helpers } from 'src/Theme'

export default class SplashScreen extends PureComponent {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
        </View>
      </View>
    )
  }
}
