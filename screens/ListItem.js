import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import songs from '../database/Model';

// const random = Math.floor(Math.random() * songs.length);
// const songK = songs[random]
// console.log(random, songK)

var lyricSong = 'Tấm thiệp mời trên bàn Thời gian địa điểm rõ ràng Lại một đám mừng ở trong làng Ɲgó tên bỗng dưng thấу hoang mang Rồi ngàу cưới rộn ràng khắp vùng Ai theo chân ai tới già trẻ đi cùng Ɲhiều ngàу tháng giờ nàу tương phùng Mà lòng caу caу caу'

const ListItem = ({ navigation, route, navigation: { goBack } }) => {


    const song = () => {
        return songs.map((element, index) => {
            return (
                <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('MyMusic', { idMusic: element.id, nameMusic: element.title, author: element.artist, 
                url: element.url, artwork: element.artwork, lyricS: lyricSong })}>
                    <Image style={styles.songImage} source={element.artwork} />
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
                <Text style={styles.headerText}>Pop</Text>
                <TouchableOpacity>
                    <Image style={styles.headerIcon} source={require('../images/share.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollV}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {song()}
                </View>
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