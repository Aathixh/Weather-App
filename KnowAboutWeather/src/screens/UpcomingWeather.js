/* eslint-disable react/prop-types */
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'
import ListItem from '../components/ListItem'
import backGroundImage from '../../assets/upcoming-weather.jpg'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles //styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={backGroundImage}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },

  image: {
    flex: 1,
  },
})
export default UpcomingWeather
