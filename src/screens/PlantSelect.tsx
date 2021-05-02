import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../styles/colors'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import fonts from '../styles/fonts'
import api from '../services/api'

import { PlantCardPrimary } from '../components/PlantCardPrimary'

interface EnviromentProps {
  key: string,
  title: string
}

interface PlantProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: [string],
  frenquency: {
    times: number,
    repeat_every: string,
  }
}

export function PlantSelect() {
  const [environments, setEnviroments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')


  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment)
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
        .get(`plants_environments?_sort=title&_order=asc`)
      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnviroment()
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get(`plants?_sort=name&_order=asc`)
      setPlants(data)
    }

    fetchPlants()
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
                active={item.key === environmentSelected}
                onPress={() => handleEnvironmentSelected(item.key)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
          />
        </View>

        <View style={styles.plants}>
          <FlatList
            data={plants}
            renderItem={({ item }) => (
              <PlantCardPrimary data={item} />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
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
  },
  plants: {

  }
})