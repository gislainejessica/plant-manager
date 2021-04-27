import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../styles/colors'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import perfile from '../../assets/perfil.png'
import fonts from '../styles/fonts'

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}> Olá,  </Text>
        <Text style={styles.userName}> Jéssica </Text>
      </View>

      <Image style={styles.picture} source={perfile} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: colors.red,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    // paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  picture: {
    width: 70,
    height: 70,
    borderRadius: 35
  },

})