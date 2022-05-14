import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const LibraryScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Library Screen</Text>
            <Button
            title='Click me'
            onPress={()=>alert('Button Clicked!')}
            />
        </View>
    )
}
export default LibraryScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff'
    }
})