import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-elements'

import colors from '@lib/constants/colors'

const Reminder = () => {
  return (
    <View style={styles.container}>
      <Icon
        color={colors.tealDark}
        name='location-outline'
        size={24}
        type='ionicon'/>
      <View>
        <Text style={[ styles.message, styles.messageSub ]}>Enviaremos tus pedidos a</Text>
        <Text style={styles.message}>Agustinas 546, Santiago, Región...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems          : 'center',
    backgroundColor     : colors.tealLight,
    borderTopLeftRadius : 24,
    borderTopRightRadius: 24,
    flexDirection       : 'row',
    justifyContent      : 'center',
    paddingBottom       : 48,
    paddingHorizontal   : 16,
    paddingTop          : 24
  },
  message: {
    color     : colors.tealDark,
    fontSize  : 18,
    marginLeft: 8
  },
  messageSub: {
    fontSize  : 15,
    lineHeight: 15
  }
})

export default Reminder
