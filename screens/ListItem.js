import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ navigation, route, navigation: { goBack } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Image style={styles.headerIcon} source={require('../images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Pop</Text>
                <TouchableOpacity>
                    <Image style={styles.headerIcon} source={require('../images/share.png')} />
                </TouchableOpacity>
            </View>
            <Text>ListItem Screen / Màn hình {route.params.category} </Text>
            <Button
                title='Click me'
                onPress={() => navigation.navigate('Root', { screen: 'MyMusic', params: { idMusic: 1 } })}
            />
        </View>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    bar:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon:{
        height: 25,
        width: 25,
        marginLeft: 15,
        marginRight: 25
    }, 
    headerText:{
        fontSize: 25,
        fontWeight: "bold"
    }
})