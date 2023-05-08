import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {
  Dashboard,
  Huruf,
  Angka,
  Buah,
  Hewan
} from '../screen'

const Main = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        InitialRouteName="DASHBOARD">
        <Main.Screen
          name="DASHBOARD"
          component={ Dashboard }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="HURUF"
          component={ Huruf }
        // options={ {
        //   headerShown: false,
        // } }
        />
        <Main.Screen
          name="ANGKA"
          component={ Angka }
        // options={ {
        //   headerShown: false,
        // } }
        />
        <Main.Screen
          name="HEWAN"
          component={ Hewan }
        // options={ {
        //   headerShown: false,
        // } }
        />
        <Main.Screen
          name="BUAH"
          component={ Buah }
        // options={ {
        //   headerShown: false,
        // } }
        />

        {/* <Main.Screen
          name="ExampleScreen"
          component={ ExampleScreen }
        options={ {
          headerShown: false,
        } }
        /> */}

      </Main.Navigator>
    </NavigationContainer>
  )
}

export default index
