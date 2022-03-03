import React, { useEffect, useState,  } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-web";
import { getItem } from "../services/cars";
import Product from '../componets/Product'

export default function ItemDetalhes({ route, navigation }) {
  const { ItemId } = route.params;
  const [item, setItem] = useState({});

  const StaticProductImage = "https://upload.wikimedia.org/wikipedia/commons/0/03/Devonshire_tea.jpg";
  const imge = "../assets/img/kfcImage.jpg";

  const products = [
    { brand: "Arroz com feijão", preco: 1500, producTmage: StaticProductImage },
    { brand: "Massa com Frango", preco: 4000, producTmage: StaticProductImage },
    { brand: "Lazanha", preco: 6000, producTmage: StaticProductImage },
    { brand: "Mariscos ", preco: 2450, producTmage: StaticProductImage },

  ];



  useEffect(() => {
    setItem(getItem(ItemId));
  });

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <Image source={item.imge} style={styles.imagem}></Image>
        <View>
          <Text style={styles.nome}>
            {item.marca} {item.nome}
          </Text>
          <Text>
            {item.localizacao} {item.distancia}
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.containerPreco}>
            <Text>Faça suas encomendas a apartir de:</Text>
            <Text style={styles.preco}>
              {"\t"}KZ {item.preco}
            </Text>
          </Text>
        
            <FlatList
            numColumns={2}
              data={products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (<Product product={item}/>)}>
                        
            </FlatList>
         

            <Button
            title="Fazer pedidos "
            color={"red"}
            onPress={() => {

              navigation.navigate("Formulario");
            }}
          />
          
        </View>

      </ScrollView>
    </SafeAreaView>
   

  );
}

const styles = StyleSheet.create({
  area: {
    height: "100%",
    backgroundColor: 'white'
  },

  imagem: {
    height: 300,
    width: "100%",
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold'
    ,
  },
  preco: {
    fontSize: 16,
    display: "flex",
    justifyContent: 'flex-end',
    marginHorizontal: 5,
  },
  containerPreco: {
    marginTop: 30,
  },
  textoSmall: {
    fontSize: 12,
  }
});

