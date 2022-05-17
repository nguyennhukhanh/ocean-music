import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import MyMusic from '../screens/MyMusic'
import ListItem from '../screens/ListItem'
import Tabs from './Tabs'
const Stack = createNativeStackNavigator()

const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="MyMusic" component={MyMusic} options={{ headerShown: false }} />
            <Stack.Screen name="ListItem" component={ListItem} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Root