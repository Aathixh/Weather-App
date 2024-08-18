import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="white" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  temp: {
    color: 'white',
    fontSize: 48,
  },
  wrapper: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highLowWrapper: { flexDirection: 'row' },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: 'white',
  },
  message: {
    fontSize: 30,
    color: 'white',
  },
})
export default CurrentWeather
