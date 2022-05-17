import React from "react"
import { ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

//Database
const listItems = [
    {
        id: 1,
        image: '../images/background.jpg',
        name: 'K-POP'
    },
    {
        id: 2,
        image: '../images/background.jpg',
        name: 'Thiên Hạ Nghe Gì'
    }
]
//Database

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Slider = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { category: 1 })}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { category: 2 })}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { category: 3 })}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { category: 4 })}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { category: 5 })}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Slider

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 5,
        marginHorizontal: 10
    },
    touchContainer: {
        height: screenWidth / 2.1,
        width: screenWidth / 2.7,
        // backgroundColor: '#f08080',
        borderRadius: 5,
        marginHorizontal: 5
    },
    image: {
        height: screenWidth / 2.7,
        width: screenWidth / 2.7,
        borderRadius: 5
    },
    text: {
        fontWeight: '500',
        paddingHorizontal: 1
    }
})