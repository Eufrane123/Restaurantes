import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemLista from './screens/ItemLista';
import ItemDetalhes from './screens/ItemDetalhes';
import Formulario from './screens/Formulario';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bem-vindo a App de Restaurantes'
          component={ItemLista} style={styles.botaoText2}
        />
        <Stack.Screen
          name='Detalhes'
          component={ItemDetalhes}
        />
        <Stack.Screen
          name='Formulario'
          component={Formulario}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(30, 30, 30)',


  }
});
