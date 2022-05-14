import React from "react"
import {ScrollView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import { Searchbar } from 'react-native-paper'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Categories = ()=>{
 return(
    <ScrollView contentContainerStyle={{flex: 1, marginHorizontal: 10}}
    horizontal={true} 
    >
        <TouchableOpacity style={styles.touch} onPress={()=>alert('Album của K-Walker')}>
            <Image style={styles.image} source={require('../images/category.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={()=>alert('Album của Khánh')}>
            <Image style={styles.image} source={require('../images/category.png')} />
        </TouchableOpacity>
    </ScrollView>
    )
}
const FindScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = query => setSearchQuery(query)

  return (
      <SafeAreaView>
        <Searchbar
        placeholder="Nghệ sĩ, bài hát, hoặc podcast"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{marginTop: 40, marginHorizontal: 20, marginBottom: 10}}
        />
        <Text style={{fontWeight:'bold', fontSize: 18, marginHorizontal: 20}}>Duyệt tất cả</Text>
        {Categories()}
        {Categories()}
        {Categories()}
        {Categories()}
        {Categories()}
        {Categories()}
        {Categories()}
        {/* Lỡ set cuộn ngang rồi@@ */}
      </SafeAreaView>
  )
}

export default FindScreen;

const styles = StyleSheet.create({
    touch:{
        backgroundColor: '#d3d3d3',
        flex: 1,
        width: screenWidth/2.2,
        height: screenHeight/9,
        flexDirection: 'row',
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10
    },
    image:{
        width: screenWidth/2.2,
        height: screenHeight/9,
        borderRadius: 5,
    },

})