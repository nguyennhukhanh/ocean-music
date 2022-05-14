import React from "react"
import {ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity} from 'react-native'

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

const Slider = () =>{
    return(
        <View style={styles.container}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
                <View style={styles.touchContainer}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </View>
                <View style={styles.touchContainer}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </View>
                <View style={styles.touchContainer}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </View>
                <View style={styles.touchContainer}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </View>
                <View style={styles.touchContainer}>
                    <Image style={styles.image} source={require('../images/background.jpg')} />
                    <Text style={styles.text}>K-Walker, Sơn Tùng M-TP và hơn thế nữa</Text>
                </View>
            </ScrollView>
      </View>
    )
}
export default Slider

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        borderRadius: 5,
        marginHorizontal: 10
    },
    touchContainer:{
        height: screenWidth/2.1,
        width: screenWidth/2.7,
        // backgroundColor: '#f08080',
        borderRadius: 5,
        marginHorizontal: 5
    },
    image:{
        height: screenWidth/2.7,
        width: screenWidth/2.7,
        borderRadius: 5
    },
    text:{
        fontWeight: '500',
        paddingHorizontal: 1
    }
})