import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from '../screens/HomeScreen'
import FindScreen from '../screens/FindScreen'
import LibraryScreeen from '../screens/LibraryScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MyMusic from '../screens/MyMusic'
import ListItem from '../screens/ListItem'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
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
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
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
            <Tab.Screen name='Find' component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
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
            <Tab.Screen name='Root' component={Root}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                            <Image
                                source={require('../images/music.png')}
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
            <Tab.Screen name='Library' component={LibraryScreeen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
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
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
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
const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyMusic" component={MyMusic} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FindScreen" component={FindScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LibraryScreeen" component={LibraryScreeen} options={{ headerShown: false }} />
            <Stack.Screen name="ListItem" component={ListItem} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Tabs

