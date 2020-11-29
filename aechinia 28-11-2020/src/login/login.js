import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

import styles from './style';



export default function Login({navigation}) {

    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(false);
     

    useEffect( ()=> {
        verifyLogin();
    }, []);

    useEffect( ()=> {
        if( login === true ) {
            biometric();
        }
    }, [login]);

    //Verificar se o usuario tem cadastro no sistema
    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userData');
        let json = await JSON.parse(response);
        if( json !== null ){
            setUser(json.name);
            setPassword(json.password);
            setLogin(true);
        }
    }


    //Biometria

    async function biometric(){
        let compatible = await LocalAuthentication.hasHardwareAsync();
        if (compatible){
            let biometricRecords = await LocalAuthentication.isEnrolledAsync();
            if(!biometricRecords){
                alert('Biometria não cadastrada');
            }else {
                let result = await LocalAuthentication.authenticateAsync();
                if(result.success){
                    sendForm();
                }else{
                    setUser(null);
                    setPassword(null);
                }
            }
        }
    }


    async function sendForm() {
        let response = await fetch('http://192.168.0.105:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json = await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
            await AsyncStorage.clear();
        }else{
             await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Home');
        }

    }

    return (

        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.Imagem}>
                <Image style={styles.Img}
                    source={require('../../assets/Logo.png')}
                />

            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={styles.msg(display)}>Login ou senha inválidos!</Text>
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo}>Login:</Text>
                <TextInput style={styles.Txt} placeholder="Login" onChangeText={text => setUser(text)} />
                <Text style={styles.titulo}>Senha:</Text>
                <TextInput style={styles.Txt} placeholder='Senha' secureTextEntry={true} onChangeText={text => setPassword(text)} />
                <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                    <Text style={{ textAlign: "center", marginTop: 5 }}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
                </TouchableOpacity>


            </View>
        </KeyboardAvoidingView>



    );
}

