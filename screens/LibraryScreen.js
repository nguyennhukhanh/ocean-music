import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import {TYPE_SONG_CONFIG} from '../database/ipconfig'

var lyricSong = 'Lời bài hát chưa được cập nhật ! Xin lỗi vì sự bất tiện này ! 💔'

const LibraryScreen = ({ navigation, route, navigation: { goBack } }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);

    useEffect(() => {
        fetch(TYPE_SONG_CONFIG)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const song = () => {
        return data.map((element, index) => {
            return (
                <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('MyMusic', {
                    idMusic: element.id, nameMusic: element.title, author: element.artist,
                    url: element.url, artwork: { uri: element.artwork }, lyricS: lyricSong
                })}>
                    <Image style={styles.songImage} source={{ uri: element.artwork }} />
                    <View style={{ justifyContent: 'center', marginLeft: -50 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, width: 150 }}>{element.title}</Text>
                        <Text>{element.artist}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.songLike} source={require('../images/check.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>


            )
        })
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
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {song()}
                </View>
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
        width: 370,
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