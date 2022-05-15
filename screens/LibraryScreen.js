import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const LibraryScreen = ({ navigation, route, navigation: { goBack } }) => {
    const song = () => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Root', { screen: 'MyMusic', params: { idMusic: 1, nameMusic: 'Em Của Ngày Hôm Qua' } })}>
                <Image style={styles.songImage} source={require('../images/emcuangayhomqua.png')} />
                <View style={{ marginLeft: -50, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Em Của Ngày Hôm Qua</Text>
                    <Text>Sơn Tùng</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.songLike} source={require('../images/check.png')} />
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
                <Text style={styles.headerText}>Thư Viện</Text>
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
        </View>
    )
}
export default LibraryScreen

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
        flex: 1
        // backgroundColor: '#ff7f50',
    },
    songImage: {
        height: 65,
        width: 65,
        borderRadius: 50,
        marginVertical: 7.5,

    },
    songLike: {
        height: 22,
        width: 22,
        marginVertical: 30,
        tintColor: 'black'
    }
})