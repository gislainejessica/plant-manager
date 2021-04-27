import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { Button } from '../components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  const navigation = useNavigation()

  function handleMoveOn() {
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar {'\n'}
          das suas plantinhas com todo cuidado
        </Text>

        <View style={styles.footer}>
          <Button
            title="Começar"
            onPress={handleMoveOn}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 38,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.heading,
    fontSize: 17,
    paddingBottom: 20,
    paddingTop: 5,
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  emoji: {
    fontSize: 78,
  },

  footer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 50,
  }
});
