import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native'
import cityBackground from '../../assets/CityBg.jpg'
import { Feather } from '@expo/vector-icons'
const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={cityBackground} style={styles.imageLayout}>
        <Text style={[styles.cityName, styles.cityText]}>Trivandrum</Text>
        <Text style={[styles.countryName, styles.cityText]}>India</Text>
        <View style={styles.populationWrapper}>
          <Feather name="users" size={24} color="white" />
          <Text style={styles.populationText}>150000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={24} color="white" />
          <Text style={styles.riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={24} color="white" />
          <Text style={styles.riseSetText}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    flexDirection: 'column',
    marginTop: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  riseSetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
export default City
