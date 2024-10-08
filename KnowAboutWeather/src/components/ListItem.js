import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment/moment'

const ListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles //styles destructuring
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
        <Text style={date}>{moment(dt_txt).format('MMM Do YY')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
})
export default ListItem
