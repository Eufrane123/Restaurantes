import React from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from 'react-native-web'

export default function Item({ marca, nome, localizacao, distancia, props, img, preco, onPress }) {
  const navega = props.navega
  return (
    <View style={styles.cartao}>

      <TouchableOpacity
        onPress={() => navega.navigation.navigate('ItemLista', navega)}
      >
        <Image source={img} style={styles.imagem} />
      </TouchableOpacity>
      <Text>
        Nome: {nome} Distancia: {distancia}
      </Text>
      <View>
        <Text>Localizacao: {localizacao} </Text>
        <Button title="VISITAR O RESTAURANTE" color={"red"} onPress={onPress} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "white",
    marginVertical: 4,

  },
  imagem: {
    alignItems: "center",
    right: -60,
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "60%",
    alignItems: "center",
  },
  infoContainer: {
    padding: 16,
  },
  nome: {
    fontSize: "100%",
    fontWeight: "bold",
  },
  preco: {},
});
