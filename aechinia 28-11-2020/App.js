import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login/login';
import Home from './src/pages/Home';
import Exercicio from './src/pages/exercicios/exercicio';
import ReportarC from './src/pages/reportar/ReportarC';
import Monitoramento from './src/pages/Monitoramento/monitoramento';






function App() {

  const Stack = createStackNavigator();

  



  return (
    <NavigationContainer>
      <Stack.Navigator>

        

        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" options={{headerShown: false }} component={Home}  />
        <Stack.Screen name="Monitoramento" options={{ headerShown: false }} component={Monitoramento} />
        <Stack.Screen name="Exercicio" options={{headerShown: false }} component={Exercicio} />
        <Stack.Screen name="ReportarC" options={{headerShown: false }} component={ReportarC} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


