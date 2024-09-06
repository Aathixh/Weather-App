/* eslint-disable react/prop-types */
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
import IconText from '../components/IconText'
import moment from 'moment'
const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imageLayout,
  } = styles
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={cityBackground} style={imageLayout}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'black'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'black'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'black'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
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
    color: 'black',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 8,
    color: 'black',
  },
  riseSetWrapper: {
    marginTop: 25,
    justifyContent: 'space-around',
  },
  riseSetText: {
    color: 'black',
    fontSize: 20,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default City
