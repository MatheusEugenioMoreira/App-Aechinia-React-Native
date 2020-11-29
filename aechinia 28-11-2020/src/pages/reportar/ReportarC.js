import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import MenuAreaRestrita from "../../../assets/components/MenuAreaRestrita";
import config from '../../../config/config.json';
import styles from './style';





export default function ReportarC({ navigation }) {

    const [sintomas, setSintomas] = useState(null);
    const [data, setData] = useState(null);
    const [observacoes, setObservacoes] = useState(null);
    const [usuario_id, setUsuarioId] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        getUsuarioID();
    }, []);



    async function getUsuarioID() {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUsuarioId(json.id);
    }

    async function sendForm() {

        let response = await fetch(config.urlRoot + 'create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario_id: usuario_id,
                sintomas: sintomas,
                observacoes: observacoes,
            })

        });
    }

    return (

        <KeyboardAvoidingView style={styles.container}>
            <View>
                <MenuAreaRestrita title='Reportar' navigation={navigation} />
            </View>
            <View style={styles.textos}>
                <Text style={styles.titulo}>Preencha os campos:</Text>
            </View>
            <View style={styles.textos}>

                <Text style={styles.dados}>
                    Data da Crise
                </Text>
                <TextInput
                    style={styles.Txt}
                    placeholder="Data da crise"
                />
                <Text style={styles.dados}>
                    Sintomas
                </Text>
                <TextInput
                    style={styles.TxtS}
                    placeholder="Sintomas"
                    onChangeText={text => setSintomas(text)}
                />
                <Text style={styles.dados}>
                    Observações
                </Text>
                <TextInput
                    style={styles.TxtO}
                    placeholder={"Observações "}
                    onChangeText={text => setObservacoes(text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                    <Text style={styles.textoB}>Cadastrar</Text>
                </TouchableOpacity>
            </View>



        </KeyboardAvoidingView>




    );


}