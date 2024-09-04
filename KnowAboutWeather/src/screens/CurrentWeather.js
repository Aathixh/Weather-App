import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="white" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        <RowText
          messageOne={"It's Sunny"}
          messageTwo={'Its perfect t-shirt weather'}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
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
