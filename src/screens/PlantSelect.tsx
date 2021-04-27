import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import fonts from '../styles/fonts'

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}> Em qual ambiente</Text>
        <Text style={styles.subtitle}> Você quer colocar sua planta?</Text>

        <EnviromentButton title='cosinha' />
        <EnviromentButton title='cosinha' active />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
})