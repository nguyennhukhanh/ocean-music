import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


const MyMusic = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>My Music</Text>
            <Button
            title='Click me'
            onPress={()=>alert('Button Clicked!')}
            />
        </View>
    )
}
export default MyMusic

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff'
    }
})