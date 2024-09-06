import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtonTest = () => {
  const onPress = () => {
    console.log('pressed')
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.ButtonText}>Hello</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
  },
  ButtonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
})
export default ButtonTest
