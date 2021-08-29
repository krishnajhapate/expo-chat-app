import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input ,Button } from 'react-native-elements'
import { auth } from '../firebase'

export default function RegisterScreen() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        avatar: '',
        name: '',
    })

    const register = () => {
        auth.createUserWithEmailAndPassword(values.email, values.password).then(userCredential => {
            // Signin in
            var user = userCredential.user;
            alert(user.uid)
            user.updateProfile({
                displayName: values.name,
                photoUrl: values.avatar ? values.avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x"
            }).catch((error) => {
                alert(error.message)
            })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message

            alert(errorMessage)
        })
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                value={values.name}
                label="Name"

                onChangeText={value => setValues({ ...values, name: value })}
            />
            <Input
                placeholder="Enter your email"
                value={values.email}
                label="Email"
                onChangeText={value => setValues({ ...values, email: value })}
            />
            <Input
                placeholder="Enter your password"
                value={values.password}
                label="Password"
                onChangeText={value => setValues({ ...values, password: value })}
                secureTextEntry
            /> 
            <Input
                placeholder="Enter your avatar"
                value={values.avatar}
                label="Avatar"
                onChangeText={value => setValues({ ...values, avatar: value })}
            />
            <Button title="Register" onPress={()=>register()} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    label: {
        fontSize: 11, color: 'rgba(0,0,0,.7)'
    },
    leftIcon: {
        paddingRight: 10,
    }
    , btn: {
        marginTop: 12,
    }
})