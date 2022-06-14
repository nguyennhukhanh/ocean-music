import React, { useState, useEffect } from "react"
import { ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {TYPE_ALBUM_CONFIG} from '../database/ipconfig'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Slider = () => {
    const navigation = useNavigation()

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);

    useEffect(() => {
        fetch(TYPE_ALBUM_CONFIG)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const isSlider = () => {
        return data.map((element, index) => {
            // console.log(element)
            return (
                <TouchableOpacity key={index} style={styles.touchContainer} onPress={() => navigation.navigate('ListItem', {albumID: element.album_id, albumName: element.album_name, albumImage: element.album_image })}>
                    <Image style={styles.image} source={{ uri: element.album_image }} />
                    <Text style={styles.text}>{element.album_name}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {isSlider()}
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