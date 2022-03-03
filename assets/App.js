import React from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'


export default class App extends React.Component {
  render() {
    return (<View style={styles.container}>


      <Text style={styles.botaoText2}>Bem-Vindo ao NetCommerce</Text>


      <Image style={{ width: 100, height: 100, margin: 30 }} source={require('./assets/aa.png')} />


      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a sua senha " />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { this.clicou() }}
      >
        <Text style={styles.botaoText}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao1}
        onPress={() => { this.clicou() }}
      >
        <Text style={styles.botaoText}>Cadastra-se aqui</Text>

      </TouchableOpacity>


    </View>)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'

  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    padding: 10
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botao1: {
    width: 250,
    height: 42,
    backgroundColor: '#f00',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'

  },
  botaoText2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'

  }
})

