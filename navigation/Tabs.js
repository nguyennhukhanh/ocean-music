import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen'
import FindScreen from '../screens/FindScreen'
import LibraryScreeen from '../screens/LibraryScreen'
import SettingsScreen from '../screens/SettingsScreen'

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
                    {
                        height: 60
                    }
                ],
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
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }} >Trang Chủ</Text>
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
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }} >Tìm Kiếm</Text>
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
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }} >Thư Viện</Text>
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
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }} >Cài Đặt</Text>
                        </View>
                    ),
                }} />
        </Tab.Navigator>

    )
}


export default Tabs

