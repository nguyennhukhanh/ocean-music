import React, { useState, useEffect } from 'react';
import { View, Text, ToastAndroid, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import {TYPE_SONG_CONFIG} from '../database/ipconfig'

var lyricSong = 'Lời bài hát chưa được cập nhật ! Xin lỗi vì sự bất tiện này ! 💕'

const ListItem = ({ navigation, route, navigation: { goBack } }) => {

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
                        <Image style={styles.songLike} source={require('../images/heart.png')} />
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
                <Text style={styles.headerText}>Danh Sách</Text>
                <TouchableOpacity>
                    <Image style={styles.headerIcon} source={require('../images/share.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollV}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.backgound} source={{ uri: route.params.albumImage }} />
                </View>
                <View style={{ marginHorizontal: 40 }}>
                    <Text style={styles.titleX}>{route.params?.albumName}</Text>
                    <Text style={{ marginBottom: 5, fontWeight: '600' }}>Tuyển tập 2022</Text>
                    <View style={{ flexDirection: 'row', width: 75, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { ToastAndroid.show("Bạn đã thả tim bộ sưu tập này !", ToastAndroid.SHORT); }}>
                            <Image style={{ tintColor: 'red', height: 22, width: 22, marginVertical: 10 }} source={require('../images/heart2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert('Bạn muốn chia sẻ bộ sưu tập này cho ai hả? Xin lỗi, nhưng tính năng này đang cập nhật ! 💖💖💖') }}>
                            <Image style={{ tintColor: 'red', height: 22, width: 22, marginVertical: 10 }} source={require('../images/menu-dots-vertical.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {song()}
                </View>
            </ScrollView>
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
    },
    backgound: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    titleX: {
        fontSize: 20,
        fontWeight: '900',
        marginVertical: 10
    }
})