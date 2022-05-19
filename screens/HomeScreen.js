import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import ScrollViews from '../components/ScrollViews'
import Slider from '../components/Slider';

const renderHeader = () =>{
    return(
        <View style={styles.renderHeader}>
            <Text style={styles.hello}>Chào buổi sáng</Text>
            <TouchableOpacity>
                <Image style={styles.headerIcon} source={require('../images/NotificationIcon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.headerIcon} source={require('../images/timequarterpast.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView  style={styles.container}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ScrollViews />
                <Text style={styles.textH1}>Tuyển tập hàng đầu của bạn</Text>
                <Slider />
                <Text style={styles.textH1}>Bản phát mới phổ biến nhất</Text>
                <Slider/>
                <Text style={styles.textH1}>Mới phát gần đây</Text>
                <Slider/>
                <Text style={styles.textH1}>Nhạc đang thịnh hành</Text>
                <Slider/>
                <Text style={styles.textH1}>Tâm trạng</Text>
                <Slider/>
                <Text style={styles.textH1}>Đề xuất cho hôm nay</Text>
                <Slider/>
                <Text style={styles.textH1}>Thêm nhạc bạn thích</Text>
                <Slider/>
                <Text style={styles.textH1}>Lựa chọn của K-TO Music</Text>
                <Slider/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container:{
        elevation: 1,
        justifyContent: 'space-around'
    },
    renderHeader:{
        flexDirection: 'row',
        height: 50,
        marginTop: 40
    },
    hello:{
        flex: 50,
        fontSize: 25,
        marginLeft: 20,
        fontWeight: "bold"
    },
    headerIcon:{
        height: 30,
        width: 30,
        marginRight: 20,
    },
    renderList:{
        padding: 20,
    },
    textH1:{
        marginTop: 10,
        fontSize: 25,
        marginLeft: 20,
        fontWeight: "bold"
    }
})