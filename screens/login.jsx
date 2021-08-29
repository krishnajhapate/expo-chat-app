import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements/dist/input/Input'
import { Button } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your email"
                onChangeText={value => setEmail(value)}
                value={email}
                label="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'gray', size: 20 }}
                labelStyle={styles.label}
                placeholderTextColor="gray"
                leftIconContainerStyle={styles.leftIcon}
            // errorMessage="ERROR"
            // errorStyle={{ color: 'red' }}


            />
            <Input
                placeholder="Enter you password"
                secureTextEntry
                value={password}
                label="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'gray', size: 25 }}
                labelStyle={styles.label}
                leftIconContainerStyle={styles.leftIcon}
                onChangeText={value=>setPassword(value)}

            />
            <Button title="Sign in" raised />
            <Button title="Register" onPress={()=>navigation.navigate('Register')} raised containerStyle={styles.btn} />
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
    ,btn:{
        marginTop:12,
    }
})