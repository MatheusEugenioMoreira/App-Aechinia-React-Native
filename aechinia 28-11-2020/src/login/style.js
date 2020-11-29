import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#282828',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textos:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo:{
      fontSize: 22,
      color: '#D2EFF5',
      fontFamily: 'Roboto',
      marginRight: 200,
      marginTop: 10,
    },
    Imagem:{
      alignItems: 'center',
    },
    Img:{
      width: 200,
      height: 220,
      marginTop: 111,
    },
    Txt:{
      width: 300,
      height: 40,
      borderColor: '#000',
      borderWidth: 0,
      backgroundColor: '#D2EFF5',
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 50,
      textAlign: 'center',

    },
    esqueciSenha:{
      marginTop: 155,
      color:  '#5091F3', 
    },
    button:{
      width: 80,
      height: 40,
      borderWidth: 0,
      backgroundColor: '#64ABDE',
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 50,
    },
    textoB:{
      alignItems: 'center'
    },
    msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 20,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display: text
    })
  });