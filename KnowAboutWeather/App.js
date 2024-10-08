/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'grey'} />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})
export default App
