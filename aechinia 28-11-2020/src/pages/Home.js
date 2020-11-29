import React from 'react';

import { Text, View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import styles from './Css';

import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";


export default function Home({ navigation }) {

  function sendExercicio() {
    navigation.navigate('Exercicio');

  }

  function sendReport() {
    navigation.navigate('ReportarC');

  }

  function sendMonitoramento() {
    navigation.navigate('Monitoramento');
  }
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <MenuAreaRestrita title='Home' navigation={navigation} />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonM} onPress={() => sendMonitoramento()}>
          <Text style={styles.textButtons}>Monitoramento         <Image style={styles.Img}
            source={require('../assets/Icones/painel-de-controle.png')} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => sendReport()}>
          <Text style={styles.textButtons}>Reportar Crise            <Image style={styles.Img}
            source={require('../assets/Icones/alerta.png')} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonE} onPress={() => sendExercicio()}>
          <Text style={styles.textButtons} >Exercicios                    <Image style={styles.Img}
            source={require('../assets/Icones/run.png')} /></Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}