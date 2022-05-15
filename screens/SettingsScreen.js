import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';

const SettingsScreen = ({ navigation: { goBack } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Image style={styles.headerIcon} source={require('../images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Quản lý tài khoản</Text>
            </View>
            <ScrollView style={styles.scrollV}>
                <View>
                    <Title style={styles.title}>THÔNG TIN TÀI KHOẢN</Title>
                    <TouchableOpacity>
                        <Text style={styles.text}>Số điện thoại: 0921234***</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Email: k***k@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Ngày sinh: 04/01/2002</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Mật khẩu: ******</Text>
                    </TouchableOpacity>




                </View>
                <View style={{ marginTop: 30 }}>
                    <Title style={styles.title}>KIỂM SOÁT TÀI KHOẢN</Title>
                    <TouchableOpacity>
                        <Text style={styles.text}>Chuyển Sang Tài Khoản Doanh Nghiệp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('Bạn muốn xóa tài khoản phải không ?')}>
                        <Text style={styles.text}>Xóa Tài Khoản</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default SettingsScreen

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
        fontWeight: "bold",
        marginRight: 100,
        marginTop: -5

    },
    scrollV: {
        flex: 1,
        marginTop: 10,

    },
    title: {
        marginLeft: 20
    },
    text: {
        marginLeft: 20,
        fontSize: 18,
        marginTop: 15
    }
})