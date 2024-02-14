import { Stack } from 'expo-router'
import React from 'react'
import { LogBox } from 'react-native'

const _layout = () => {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack
        screenOptions={{
            headerShown: false
        }} 
    >
      <Stack.Screen
       name='exercises'
        options={{presentation: 'fullScreenModal'}} 
        />
        <Stack.Screen
       name='exerciseDetails'
        options={{presentation: 'modal'}} 
        />
    </Stack>
  )
}

export default _layout