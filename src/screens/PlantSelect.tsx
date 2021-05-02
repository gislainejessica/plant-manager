import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../styles/colors'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import fonts from '../styles/fonts'
import api from '../services/api'

interface EnviromentProps {
  key: string,
  title: string
}

export function PlantSelect() {
  const [environments, setEnviroments] = useState<EnviromentProps[]>()

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(`plants_environments`)
      setEnviroments(data)
      console.log("data")

      console.log(data)
    }
    fetchEnviroment()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}> Em qual ambiente</Text>
        <Text style={styles.subtitle}> Você quer colocar sua planta?</Text>

        <View >
          <FlatList
            data={environments}
            renderItem={({ item }) => (
              <EnviromentButton
                key={item.key}
                title={item.title}
                active
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
          />
        </View>

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
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    // marginLeft: 32,
    marginVertical: 32,
  }
})