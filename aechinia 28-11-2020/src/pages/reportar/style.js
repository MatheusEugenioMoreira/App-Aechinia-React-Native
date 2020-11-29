import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',

    },
    textos: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    titulo: {
        fontSize: 18,
        color: '#D2EFF5',
        fontFamily: 'Roboto',
    },
    dados: {
        color: '#D2EFF5',
        marginTop: 75,
        fontSize: 18,
    },
    Txt: {
        width: 300,
        height: 40,
        backgroundColor: '#D2EFF5',
        borderRadius: 8,
    },
    TxtS: {
        width: 300,
        height: 80,
        backgroundColor: '#D2EFF5',
        borderRadius: 8,
    },
    TxtO: {
        width: 300,
        height: 95,
        backgroundColor: '#D2EFF5',
        borderRadius: 8,
    },
    esqueciSenha: {
        marginTop: 155,
        color: '#5091F3',
    },
    button: {
        width: 105,
        height: 40,
        borderWidth: 0,
        backgroundColor: '#0FAD28',
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoB: {
        alignItems: 'center'
    },
    perguntas: {
        width: 81,
        height: 26,
        borderColor: '#000',
        borderWidth: 0,
        backgroundColor: '#D2EFF5',
        borderWidth: 1,
        borderRadius: 4,
    }
});