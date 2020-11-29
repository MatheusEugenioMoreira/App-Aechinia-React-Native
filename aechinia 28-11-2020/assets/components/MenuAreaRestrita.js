import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../src/pages/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default function MenuAreaRestrita(props) {
    async function logout() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return (
        <View style={styles.area_menu}>
            <TouchableOpacity style={styles.button_home} onPress={() => props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#D2EFF5" />
            </TouchableOpacity>

            <Text style={styles.area_title}>{props.title}</Text>

            <TouchableOpacity style={styles.button_logout} onPress={() => logout()}>
                <Icon name="sign-out" size={20} color="#D2EFF5" />
            </TouchableOpacity>
        </View>
    )


}