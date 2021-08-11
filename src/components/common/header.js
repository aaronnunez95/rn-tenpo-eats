import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppBar from '@components/common/app-bar'
import Reminder from '@components/common/reminder'
import SliderItem from '@components/common/slider/item'
import colors from '@lib/constants/colors'

const Header = () => {
  return (
    <React.Fragment>
      <AppBar/>
      <View style={styles.container}>
        <SliderItem/>
        <Reminder/>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight,
    marginBottom   : -32
  }
})

export default Header
