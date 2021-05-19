import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'react-native-elements'

const Card = ({uri, name}) => {
    return (
        <View style={styles.container}>
            <Image
            source={{uri: uri}}
            style={styles.img}
            />
            <Text style={{marginTop: 10}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        padding: 15,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        marginTop: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginLeft: 2
    },
    img: {
        width: 150,
        height: 150
    }
})

export default Card
