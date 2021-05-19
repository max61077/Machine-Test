import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Error = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Error',
            headerTitleAlign: 'center'
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Not Found</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.ret}>Return</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 35,
        color: 'tomato'
    },
    ret: {
        marginTop: '30%',
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 5
    }
})

export default Error
