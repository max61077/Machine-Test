import axios from 'axios'
import React, {useLayoutEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard } from 'react-native'
import {baseURL, appID} from '../App'

const LandingScreen = ({navigation}) => {

    const [id, setId] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Test App',
            headerTitleAlign: 'center'
        })
    }, [])

    const getUser = () => {
        if(id !== '')
            axios.get(`${baseURL}/user/${id}`, {
                headers: {
                    'app-id': appID
                }
            })
            .then(res => {
                if(res)
                    navigation.navigate('User', {id: id})
            })
            .catch(err => navigation.navigate('Error'))
        else
            alert('Please Enter User ID')
        
        Keyboard.dismiss()
        setId('')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate('Users')}>
                <Text>Users</Text>
            </TouchableOpacity>
            <View style={styles.inpContainer}>
                <TextInput
                style={styles.inp}
                placeholder="User ID"
                value={id}
                onChangeText={text => setId(text)}
                />
                <TouchableOpacity style={styles.goBtn} onPress={getUser}>
                    <Text>Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 50
    },
    userBtn: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        borderColor: 'orange',
        backgroundColor: '#eba234'
    },
    inpContainer: {
        marginTop: '30%',
        width: '95%',
        borderWidth: 0.5,
        alignItems: 'center',
        padding: 10
    },
    inp: {
        margin: 10,
        borderWidth: 0.7,
        width: '80%',
        padding: 10,
        borderColor: 'black'
    },
    goBtn: {
        borderRadius: 3,
        borderWidth: 1,
        padding: 5,
        borderColor: 'green',
        width: 60,
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    }
  });

export default LandingScreen
