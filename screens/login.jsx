import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'

export default function LoginScreen() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your email"

            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})