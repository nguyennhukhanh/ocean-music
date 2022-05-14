import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen'
import Findcreen from '../screens/FindScreen'
import LibraryScreeen from '../screens/LibraryScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
            padding: 0,
            marginBottom: 20
        },
        tabBarStyle: [
            {
            display: "flex"
            },
        ]
        }}
>
            <Tab.Screen name='Home' component={HomeScreen}
            options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}} >
                        <Image
                            source={require('../images/HomeIcon.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }} />
                        {/* <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}} >HOME</Text> */}
                    </View>
                ),
            }} />
            <Tab.Screen name='Find' component={Findcreen}
            options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}} >
                        <Image
                            source={require('../images/SearchIcon.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }} />
                        {/* <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}} >SEARCH</Text> */}
                    </View>
                ),
            }} />
            <Tab.Screen name='Library' component={LibraryScreeen}
            options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}} >
                        <Image
                            source={require('../images/FlameIcon.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }} />
                        {/* <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}} >LIBRARY</Text> */}
                    </View>
                ),
            }} />
            <Tab.Screen name='Settings' component={SettingsScreen}
            options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}} >
                        <Image
                            source={require('../images/SettingsIcon.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }} />
                        {/* <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}} >SETTINGS</Text> */}
                    </View>
                ),
            }} />
        </Tab.Navigator>

    )
}

export default Tabs

