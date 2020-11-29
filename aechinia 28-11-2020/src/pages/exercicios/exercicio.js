import React, { useState, useCallback, useRef } from "react";
import { KeyboardAvoidingView, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from './style';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';

export default function Exercicio({navigation}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("O video terminou, de seu feedback!");
    }
  }, []);



  return (
    <KeyboardAvoidingView style={styles.containerT}>
      <View>
        <MenuAreaRestrita title='Exercícos' navigation={navigation} />
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          height={214}
          width={344}
          play={playing}
          videoId={"A4tkULKy7RY"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={214}
          width={344}
          play={playing}
          videoId={"KCkOCxPSlKE"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={214}
          width={344}
          play={playing}
          videoId={"zTX9sWHwDZI"}
          onChangeState={onStateChange}
        />
      </View>
    </KeyboardAvoidingView>

  );
}