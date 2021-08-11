import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { animated, useSpring, useSprings } from '@react-spring/native'
import { APP_SLOGAN } from '@env'

import Bike from '@assets/img/app-bar-image-secondary.svg'
import Hand from '@assets/img/app-bar-image-primary.svg'
import Plus from '@assets/img/plus-icon.svg'
import colors from '@lib/constants/colors'

const AnimatedView = animated(View)

const topDict = {
  0: 28,
  1: -25,
  2: -40,
  3: -10
}

const SliderItem = () => {
  const [ springs ] = useSprings(4, () => {
    return {
      config: {
        duration: 2000
      },
      deg : 360,
      from: { deg: 0, o: 0 },
      loop: true,
      o   : 1
    }
  })

  const { x, y } = useSpring({
    config: {
      duration: 800
    },
    from: { x: 50, y: 0 },
    x   : 110,
    y   : 20
  })

  return (
    <View style={styles.sliderItem}>
      <Text style={styles.sliderTitle}>Tenpo</Text>
      <Text style={[ styles.sliderTitle, styles.sliderTitleAlt ]}>Eats</Text>
      <Text style={styles.sliderSlogan}>{APP_SLOGAN}</Text>

      <AnimatedView style={[
        styles.svgBike,
        {
          right: x,
          top  : y
        }
      ]}>
        <Bike/>
      </AnimatedView>
      <View style={styles.svgHand}>
        <Hand/>
      </View>
      {
        springs.map(({ deg, o }, index) => {
          const top = topDict[index]

          return (
            <AnimatedView
              key={index}
              style={[
                styles.svgPlus,
                {
                  opacity  : o.to([ 0.1, 0.2, 0.6, 1 ], [ 1, 0.1, 0.5, 1 ]),
                  right    : index * 40 + 24,
                  top,
                  transform: [
                    { rotate: deg.to(value => `${value}deg`) }
                  ]
                }
              ]}>
              <Plus/>
            </AnimatedView>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  sliderItem: {
    paddingBottom    : 48,
    paddingHorizontal: 16,
    paddingTop       : 16
  },
  sliderSlogan: {
    fontWeight   : 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  sliderTitle: {
    fontSize  : 38,
    fontWeight: 'bold',
    lineHeight: 42
  },
  sliderTitleAlt: {
    color: colors.teal
  },
  svgBike: {
    position: 'absolute'
  },
  svgHand: {
    bottom  : -16,
    position: 'absolute',
    right   : 32
  },
  svgPlus: {
    alignItems    : 'center',
    justifyContent: 'center',
    position      : 'absolute'
  }
})

export default SliderItem
