import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const ListItem = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>ListItem Screen</Text>
            <Button
            title='Click me'
            onPress={()=>navigation.navigate('Root', { screen: 'MyMusic' })}
            />
        </View>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff'
    }
})