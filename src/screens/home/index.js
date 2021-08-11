import React from 'react'
import { FlatList, SafeAreaView, SectionList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import Header from '@components/common/header'
import RestaurantItem from '@components/restaurant/item'
import RestaurantCategoryItem from '@components/restaurant/category/item'
import RestaurantProductItem from '@components/restaurant/product/item'
import colors from '@lib/constants/colors'
import { DATA } from '@lib/constants/restaurant'

const SectionHeader = ({ section }) => (
  <Text style={[ styles.sectionHeader, section.first && styles.sectionHeaderFirst ]}>{section.title}</Text>
)

const SectionItem = ({ item: { kind, items } }) => (
  <FlatList
    ItemSeparatorComponent={() => <View style={{ width: kind === 'restaurant' ? 0 : 10 }}/>}
    data={items}
    horizontal
    keyExtractor={(item, index) => index}
    renderItem={({ item, index }) => {
      const containerStyle = {
        marginLeft : index === 0 ? 16 : 0,
        marginRight: index === items.length - 1 ? 16 : 0
      }

      if(kind === 'restaurant')
        return (
          <RestaurantItem containerStyle={containerStyle} data={item}/>
        )
      else if(kind === 'restaurant-category')
        return (
          <RestaurantCategoryItem containerStyle={containerStyle} data={item}/>
        )
      else if(kind === 'restaurant-product')
        return (
          <RestaurantProductItem containerStyle={containerStyle} data={item}/>
        )
    }}
    style={{ backgroundColor: colors.white }}/>
)

const HomeIndex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={
          <Header/>
        }
        keyExtractor={(item, index) => item + index}
        renderItem={SectionItem}
        renderSectionHeader={SectionHeader}
        sections={DATA}
        style={styles.sectionList}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight
  },
  sectionHeader: {
    backgroundColor  : colors.white,
    fontSize         : 20,
    fontWeight       : 'bold',
    paddingBottom    : 8,
    paddingHorizontal: 16,
    paddingTop       : 32,
    textTransform    : 'uppercase'
  },
  sectionHeaderFirst: {
    borderTopLeftRadius : 24,
    borderTopRightRadius: 24
  },
  sectionList: {
    borderTopLeftRadius : 24,
    borderTopRightRadius: 24
  }
})

export default HomeIndex
