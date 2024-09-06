/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition].message}
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
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  wrapper: {
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
    fontSize: 43,
    color: 'white',
  },
  message: {
    fontSize: 25,
    color: 'white',
  },
})
export default CurrentWeather
