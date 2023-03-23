import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterScreen from './src/screen/counter_screen/CounterScreen'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})