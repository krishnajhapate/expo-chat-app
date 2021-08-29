import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'

export default function RegisterScreen() {
    const [values,setValues] = useState({
        email:'',
        password:'',
        avatar:'',
        name:'',
    })
    return (
        <View>
            <Input 
                placeholder="Enter your name"
                value={values.name}
                label="Name"

                onChangeText={value=>setValues({...values,name:value})}
            />
            <Input 
                placeholder="Enter your email"
                value={values.email}
                label="Email"
                onChangeText={value=>setValues({...values,email:value})}
            />
            <Input 
                placeholder="Enter your password"
                value={values.password}
                label="Password"
                onChangeText={value=>setValues({...values,password:value})}
                secureTextEntry
            />
            <Input 
                placeholder="Enter your avatar"
                value={values.avatar}
                label="Avatar"
                onChangeText={value=>setValues({...values,avatar:value})}
            />
            <Button title="Register" />
        </View>
    )
}
