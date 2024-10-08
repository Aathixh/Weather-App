import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
const Counter = () => {
  const [count, setCount] = useState(0) //useState understanding
  const [newcount, setNewCount] = useState(0) //useState understanding
  useEffect(
    () => {
      console.log(`Our count changed`)
      console.log(`useEffect CleanUp`)
    },
    [count], //dependency array
  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count : ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
          setCount(count - 1)
        }}
      />
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setNewCount(count + 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
          setNewCount(count - 1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25,
  },
})
export default Counter
