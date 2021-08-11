import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Icon, Image } from 'react-native-elements'

import colors from '@lib/constants/colors'

const AppBar = () => (
  <React.Fragment>
    <StatusBar backgroundColor={colors.greyLight} barStyle='dark-content'/>
    <View style={styles.container}>
      <Image
        containerStyle={[ styles.avatarImage, styles.avatarImageContainer ]}
        onPress={() => {}}
        source={{ uri: 'https://img.freepik.com/free-photo/playful-hot-african-american-with-afro-hairstyle-pulling-hands-towards-make-selfie-winking-joyfully-smiling-broadly-making-new-profile-pic-social-network_176420-23120.jpg?size=626&ext=jpg' }}
        style={styles.avatarImage}/>
      <Icon
        color={colors.teal}
        name='search'
        onPress={() => {}}
        size={28}
        type='ionicon'/>
    </View>
  </React.Fragment>
)

const styles = StyleSheet.create({
  avatarImage: {
    height: 40,
    width : 40
  },
  avatarImageContainer: {
    borderColor : colors.teal,
    borderRadius: 100,
    borderWidth : 2
  },
  container: {
    alignItems       : 'center',
    flexDirection    : 'row',
    justifyContent   : 'space-between',
    paddingBottom    : 20,
    paddingHorizontal: 20,
    paddingTop       : 4
  }
})

export default AppBar
