import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ListItem = ({ navigation, route, navigation: { goBack } }) => {
    const song = () => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Root', { screen: 'MyMusic', params: { idMusic: 1, nameMusic: 'Vợ Người Ta' } })}>
                <Image style={styles.songImage} source={require('../images/song-background.png')} />
                <View style={{ marginLeft: -80, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Vợ Người Ta</Text>
                    <Text>Phan Mạnh Quỳnh</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.songLike} source={require('../images/heart.png')} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
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
            <ScrollView style={styles.scrollV}>
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
                {song()}
            </ScrollView>
            <Text>ListItem Screen / Màn hình {route.params.category} </Text>
        </View>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon: {
        height: 25,
        width: 25,
        marginLeft: 15,
        marginRight: 25
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    scrollV: {
        flex: 1,
        marginTop: 10,

    },
    item: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: '#ff7f50',
    },
    songImage: {
        height: 65,
        width: 65,
        borderRadius: 15,
        marginVertical: 7.5,

    },
    songLike: {
        height: 22,
        width: 22,
        marginVertical: 30,
        tintColor: 'black'
    }
})