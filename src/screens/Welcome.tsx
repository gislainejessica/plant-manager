import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import wateringimg from "../../assets/watering.png"
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma  fácil
      </Text>

      <Image
        source={wateringimg}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}>
        <Text style={styles.textButton}>
          >
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
    // width: 292
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56
  },
  textButton: {
    color: colors.white,
    fontSize: 24,
  },
});
