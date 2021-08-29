import React, { useCallback } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, db } from '../firebase'

export default function ChatScreen({ navigation }) {
    const [messages, setMessages] = useState()

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        }).catch(error => {
            alert(error.message)
        })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 10 }} >
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL,
                        }}
                    />
                </View>
            )
            ,
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 10 }}
                    onPress={signOut}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello develoe",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                }
            }
        ])
    },[])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {_id,createdAt,text,user} = messages[0]
        db.collection('chats').add({_id,createdAt,text,user})
    },[])

    useLayoutEffect(()=>{
        const unsubscribe = db.collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
            snapshot.docs.map(doc=> ({
                _id:doc.data()._id,
                createdAt:doc.data().createdAt.toDate(),
                text:doc.data().text,
                user:doc.data().user,
            }))
        ))
    })
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL,

            }}


        />
    )
}
