import React from 'react'
import { Image, View, Pressable, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-elements'

import colors from '@lib/constants/colors'

const RestaurantItem = ({ containerStyle, data }) => {
  return (
    <View style={[ styles.container, containerStyle ]}>
      <Pressable
        android_ripple={{ color: colors.grey + '30' }}
        onPress={() => {}}
        style={styles.pressable}>

        {/* Body */}
        <Image
          source={data.image_src}
          style={styles.logo}/>
        <Text style={styles.name}>{data.name}</Text>

        {/* Footer (Rating & Duration) */}
        <View style={styles.footer}>
          <View style={styles.rating}>
            <Icon
              color={colors.yellow}
              containerStyle={styles.ratingIconContainer} name='star'
              size={16} type='ionicon'/>
            <Text>{data.rating.toFixed(1)}</Text>
          </View>
          <Text>{data.duration_str}</Text>
        </View>

        {/* Discount Badge */}
        {
          data.discount_percent && (
            <View style={styles.discount}>
              <Text style={styles.discountText}>{data.discount_percent}%</Text>
              <Text style={[ styles.discountText, styles.discountSubText ]}>DCTO</Text>
            </View>
          )
        }
      </Pressable>
    </View>
  )
}

RestaurantItem.defaultProps = {
  containerStyle: {}
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius   : 20,
    borderTopRightRadius  : 20,
    overflow              : 'hidden'
  },
  discount: {
    backgroundColor: colors.teal,
    borderRadius   : 38,
    height         : 38,
    paddingTop     : 8,
    position       : 'absolute',
    right          : 0,
    top            : 0,
    width          : 38
  },
  discountSubText: {
    fontSize  : 9,
    lineHeight: 9
  },
  discountText: {
    color     : colors.white,
    fontSize  : 13,
    lineHeight: 13,
    textAlign : 'center'
  },
  footer: {
    flexDirection    : 'row',
    justifyContent   : 'space-between',
    paddingHorizontal: 2
  },
  logo: {
    height      : 120,
    marginBottom: 8,
    width       : 120
  },
  name: {
    fontSize    : 16,
    fontWeight  : 'bold',
    marginBottom: 4,
    textAlign   : 'center'
  },
  pressable: {
    padding      : 6,
    paddingBottom: 8
  },
  rating: {
    flexDirection: 'row'
  },
  ratingIconContainer: {
    marginRight: 4
  }
})

export default RestaurantItem
