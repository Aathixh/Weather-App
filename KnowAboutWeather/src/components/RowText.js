/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const {
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
    messageOne,
    messageTwo,
  } = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}
export default RowText
