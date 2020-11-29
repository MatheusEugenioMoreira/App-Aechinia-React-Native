import React from 'react';

import { Text, View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import MenuAreaRestrita from "../../../assets/components/MenuAreaRestrita";


export default function Monitoramento({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <MenuAreaRestrita title='Monitoramento' navigation={navigation} />
            </View> 
            <View>
                <TouchableOpacity style={styles.buttonM}>
                    <Text style={styles.textButtons}>Batimento cardiaco    <Image style={styles.Img}
            source={require('../../assets/Icones/heart.png')} /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonR} >
                    <Text style={styles.textButtons}>Qualidade de sono     <Image style={styles.Img}
            source={require('../../assets/Icones/dormir.png')} /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonE} >
                    <Text style={styles.textButtons} >Oxigenação                 <Image style={styles.Img}
            source={require('../../assets/Icones/pulmao.png')} /></Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}