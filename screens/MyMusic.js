import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const MyMusic = ({ navigation, route, navigation: { goBack } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Image style={styles.headerIcon} source={require('../images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{route.params?.nameMusic}</Text>
                <TouchableOpacity>
                    <Image style={styles.headerIcon} source={require('../images/menu-dots-vertical.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollV} showsVerticalScrollIndicator={false}>
                <Image style={styles.songBackground} source={require('../images/background.jpg')} />
                <TouchableOpacity style={styles.packAge}>
                    <Text style={styles.song}>{route.params?.nameMusic}</Text>
                    <Text style={styles.author}>{route.params?.author}</Text>
                </TouchableOpacity>
                <ProgressBar progress={0.5} color={Colors.red800} style={{ marginHorizontal: 15, marginTop: 20 }} />
                <View style={styles.time}>
                    <Text>0:00</Text>
                    <Text>2:41</Text>
                </View>
                <View style={styles.process}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../images/rewind.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../images/play.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../images/forward.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.connect}>
                    <TouchableOpacity>
                        <Image style={styles.uicon} source={require('../images/data-transfer.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.uicon} source={require('../images/share.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lyrics}>
                    <Text style={{fontWeight: '700', marginBottom: 10, marginHorizontal: 15, marginTop: 10, color: '#fff0f5'}}>Lời bài hát</Text>
                    <Text style={styles.lyric}>{route.params?.lyricS}</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default MyMusic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        width: screenWidth - 40,
        marginHorizontal: 20
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: screenHeight / 8
    },
    headerIcon: {
        height: 25,
        width: 25,

    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    scrollV: {
        flex: 1,

    },
    songBackground: {
        width: screenWidth / 1.3,
        height: screenWidth / 1.3,
        marginHorizontal: 27

    },
    packAge: {
        marginTop: 70,
        marginLeft: 15
    },
    song: {
        fontSize: 22,
        fontWeight: "bold"
    },
    author: {
        fontWeight: '600'
    },
    time: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    process: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    icon: {
        height: 30,
        width: 30,
    },
    connect: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    uicon: {
        height: 20,
        width: 20
    },
    lyrics:{
        marginHorizontal: 15,
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: '#f08080',
        borderRadius: 5,
        shadowOffset: 5
    },
    lyric:{
        fontFamily:'sans-serif-light',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 10
    }
})