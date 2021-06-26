import { StatusBar } from 'expo-status-bar'
import React, { VFC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SwrRoot } from './src/SwrRoot'

const App: VFC = () => {
  return (
    <SwrRoot>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SwrRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
