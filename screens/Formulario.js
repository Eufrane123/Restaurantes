import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





// ASSYNCRO STORRGE

export default function Formulario({ route }) {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [prato, setPrato] = useState('')

  async function salvar() {

    const usuario = {
      nome, preco, prato
    }

    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
  }

  async function mostrarUsuario() {
    const json = await AsyncStorage.getItem("usuario");

    const usuario = JSON.parse(json);
    console.log(usuario)

    Alert.alert(
      'Informações do Usuário',
      `Nome: ${usuario.nome} - Preco:${usuario.preco}- Prato:${usuario.prato} `

    );
  }


  return (<View style={styles.homepagecontainer}>
    < View style={styles.buycontainer}>

      <ScrollView>
        <Image style={{ width: 100, height: 100, margin: 20, padding: 70, right: -60 }} source={require('../assets/aa.png')} />
        <Text style={styles.botaoText2}>Formulario de Pedidos</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome "
          onChangeText={text => setNome(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Nome do prato " 
         onChangeText={text => setPrato(text)}
         />

        <TextInput
          style={styles.input}
          placeholder="Digite preço "
          onChangeText={text => setPreco(text)}
        />


        <TouchableOpacity
          style={styles.botao}
          onPress={salvar}
        >
          <Text style={styles.botaoText}>Registar Pedido</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}

        >
          <Text style={styles.botaoText}>Mostrar</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao1}
          onPress={mostrarUsuario}

        >
          {/* <Text style={styles.botaoText}>Fazer Cadastro</Text> */}


        </TouchableOpacity>

      </ScrollView>
    </View >
  </View>)


}

const styles = StyleSheet.create({
  homepagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 50

  },
  buycontainer: {
    flex: 2,
    padding: 30,
    backgroundColor: 'white',
    height: 50
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    width: 300,
    // backgroundColor: 'rgb(30, 30, 30)',
    fontSize: 16,
    marginBottom: 20,
    borderBottomColor: 'rgb(30, 30, 30)',
    color: 'black',
    borderBottomWidth: 1,
    //fontWeight: 'bold',
    borderRadius: 3,
    padding: 10
  },
  botao: {
    width: 300,
    height: 42,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: 'rgb(30, 30, 30)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  botao1: {
    width: 80,
    height: 80,
    borderColor: 'rgb(30, 30, 30)',
    backgroundColor: 'white',
    marginTop: 50 + "%",
    marginLeft: 50 + "%",
    borderRadius: 40,
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
    color: 'rgb(30, 30, 30)',


  }
})
