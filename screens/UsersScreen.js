import axios from 'axios';
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { View, FlatList, ActivityIndicator } from 'react-native'
import Card from './Card'
import { Octicons } from '@expo/vector-icons';
import {baseURL, appID} from '../App'

const UsersScreen = ({navigation}) => {

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Users',
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
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get(`${baseURL}/user?page=${page}&limit=6`, {
            headers: {
                'app-id': appID
            }
        })
        .then(res => 
            {
                setUserList([...userList, ...res.data.data])
                setLoading(false)
                setPage(page + 1)
            })
        .catch(err => alert('Something went wrong'))
        .finally(() => setLoading(false))
    }

    

    return (
        !loading ?
        <View
        style={{
            alignItems: 'center'
        }}
        >
            <FlatList
            data={userList}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('User', {id: item.id})}>
                    <Card uri={item.picture} name={item.firstName} />
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            onEndReached={fetchUsers}
            numColumns={2}
            />
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

export default UsersScreen
