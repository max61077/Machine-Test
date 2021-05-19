import axios from 'axios';
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import {Image} from 'react-native-elements'
import { Octicons } from '@expo/vector-icons';
import {baseURL, appID} from '../App'

const UserScreen = ({navigation, route}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'User Details',
            headerTitleAlign: 'center',
            headerRight: () => (
                <View
                style={{marginRight: 20}}
                >
                    <Octicons name="three-bars" size={24} color="darkslategrey" />
                </View>
            )
        })
    }, [])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get(`${baseURL}/user/${route.params.id}`, {
            headers: {
                'app-id': appID
            }
        })
        .then(res => {
            setUser(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    return (
        !loading ? 
        <View style={styles.container}>
            <Image
            source={{uri: user?.picture}}
            style={styles.img}
            />
            <View style={styles.details}>
                <Text style={styles.user}>Name: {user?.firstName}</Text>
                <Text style={styles.user}>Email: {user?.email}</Text>
                <Text style={styles.user}>Phone: {user?.phone}</Text>
                <Text style={styles.user}>Gender: {user?.gender}</Text>
            </View>
        </View>
        : <View style={{
            marginTop: 30
        }}>
            <ActivityIndicator
            size="large"
            color="darkslategrey"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        marginTop: 50,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 3
    }, 
    details: {
        marginTop: 30,
        padding: 10
    },
    user: {
        borderWidth: 0.5,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
        borderColor: 'grey'
    }

})

export default UserScreen
