import React from "react"
import {ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'

//Database
const listItems = [
    {
        id: 1,
        image: '../images/background.jpg',
        name: 'K-POP'
    },
    {
        id: 2,
        image: '../images/img2.jpg',
        name: 'Thiên Hạ Nghe Gì'
    }
]
//Database

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const scrollView = () =>{
    return(
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'space-around', marginHorizontal: 10}}
        horizontal={true}
        >
            <TouchableOpacity style={styles.touch} onPress={()=>{ToastAndroid.show("Chúng tôi đang thêm mới tính năng này trong tương lai 💜", ToastAndroid.SHORT);}}>
                <Image style={styles.image} source={require('../images/background.jpg')} />
                <View style={styles.text}><Text>{listItems[0].name}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={()=>{ToastAndroid.show("Bạn xếp hạng chưa được cập nhật 💔", ToastAndroid.SHORT);}}>
                <Image style={styles.image} source={require('../images/img2.jpg')} />
                <View style={styles.text}><Text>{listItems[1].name}</Text></View>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default scrollView

const styles = StyleSheet.create({
    image:{
        width: screenHeight/14,
        height: screenHeight/14,
        flex: 33,
        borderRadius: 5,
    },
    text:{
        flex: 67,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500'
    },
    touch:{
        backgroundColor: '#d3d3d3',
        flex: 1,
        width: screenWidth/2.3,
        height: screenHeight/14,
        flexDirection: 'row',
        borderRadius: 5,
        marginHorizontal: 5
    }

})