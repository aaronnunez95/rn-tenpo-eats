import React from 'react'
import { Image, View, Pressable, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-elements'

import colors from '@lib/constants/colors'

const RestaurantProductItem = ({ containerStyle, data }) => {
  return (
    <View style={[ styles.container, containerStyle ]}>
      <Pressable
        android_ripple={{ color: colors.grey + '40' }}
        onPress={() => {}}
        style={styles.pressable}>

        {/* Body */}
        <Image
          source={data.image_src}
          style={styles.image}/>

        {/* Footer (Rating & Duration) */}
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.rating}>
              <Icon
                color={colors.yellow}
                containerStyle={styles.ratingIconContainer} name='star'
                size={16} type='ionicon'/>
              <Text>{data.rating}</Text>
            </View>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.brandName}>{data.restaurant.name}</Text>
            <Text>{data.duration_str}</Text>
          </View>
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

RestaurantProductItem.defaultProps = {
  containerStyle: {}
}

const styles = StyleSheet.create({
  brandName: {
    color     : colors.teal,
    fontWeight: 'bold'
  },
  container: {
    borderBottomLeftRadius : 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius    : 14,
    borderTopRightRadius   : 14,
    elevation              : 2,
    marginBottom           : 32,
    overflow               : 'hidden'
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
    paddingBottom    : 16,
    paddingHorizontal: 12,
    paddingTop       : 8
  },
  footerSection: {
    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginBottom  : 4
  },
  image: {
    borderTopLeftRadius : 10,
    borderTopRightRadius: 10,
    height              : 100,
    width               : 100 * 3
  },
  name: {
    fontSize: 16
  },
  pressable: {
    backgroundColor: colors.white
  },
  rating: {
    flexDirection: 'row'
  },
  ratingIconContainer: {
    marginRight: 4
  }
})

export default RestaurantProductItem
