import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

import colors from '@lib/constants/colors'

const RestaurantCategoryItem = ({ containerStyle, data }) => {
  return (
    <View style={[ styles.container, containerStyle ]}>
      <ImageBackground
        source={data.image_src}
        style={styles.portlet}>
        <View style={styles.portletLayer}/>
        <Text style={styles.name}>{data.name}</Text>
      </ImageBackground>
    </View>
  )
}

RestaurantCategoryItem.defaultProps = {
  containerStyle: {}
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow    : 'hidden'
  },
  name: {
    alignSelf    : 'center',
    color        : colors.white,
    fontSize     : 16,
    fontWeight   : 'bold',
    letterSpacing: 2,
    position     : 'absolute',
    textTransform: 'uppercase',
    top          : 30
  },
  portlet: {
    height    : 80,
    resizeMode: 'contain',
    width     : 80 * 2.5
  },
  portletLayer: {
    backgroundColor: '#000000a0',
    height         : '100%'
  }
})

export default RestaurantCategoryItem
