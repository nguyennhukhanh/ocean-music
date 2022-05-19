import React from "react"
import { ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import categories from "../database/Categories"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Slider = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[0].name, categorySrc: categories[0].src })}>
                    <Image style={styles.image} source={require('../images/img1.jpg')} />
                    <Text style={styles.text}>K-Walker, G-Dragon và hơn thế nữa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[1].name, categorySrc: categories[1].src })}>
                    <Image style={styles.image} source={require('../images/img3.jpg')} />
                    <Text style={styles.text}>Thiều Bảo Trâm và những người bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[2].name, categorySrc: categories[2].src })}>
                    <Image style={styles.image} source={require('../images/img4.jpg')} />
                    <Text style={styles.text}>Cháy với những bản nhạc Âu Mỹ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[3].name, categorySrc: categories[3].src })}>
                    <Image style={styles.image} source={require('../images/img5.jpg')} />
                    <Text style={styles.text}>Lo-fi một chút cùng tôi nhé</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[4].name, categorySrc: categories[4].src })}>
                    <Image style={styles.image} source={require('../images/img6.jpg')} />
                    <Text style={styles.text}>Nhảy cùng bữa tiệc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[5].name, categorySrc: categories[5].src })}>
                    <Image style={styles.image} source={require('../images/img7.jpg')} />
                    <Text style={styles.text}>Cảm hứng cho công việc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[6].name, categorySrc: categories[6].src })}>
                    <Image style={styles.image} source={require('../images/img8.jpg')} />
                    <Text style={styles.text}>Một thời đã xa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[7].name, categorySrc: categories[7].src })}>
                    <Image style={styles.image} source={require('../images/img9.jpg')} />
                    <Text style={styles.text}>Lạc Trôi và những bản nhạc triệu view của MTP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', { categoryName: categories[8].name, categorySrc: categories[8].src })}>
                    <Image style={styles.image} source={require('../images/img10.jpg')} />
                    <Text style={styles.text}>Nhạc Việt Tropical Hay Nhất</Text>
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