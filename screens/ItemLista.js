import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import Item from "../componets/Item.js";
import { getItens } from "../services/cars.js";

export default function ItemLista({ navigation }) {
  function renderItem({ item: item }) {
      return (
      <Item
        {...item}
        onPress={() => {
          navigation.navigate("Detalhes", {
            ItemId: item.id,
          });
        }}
      />
    );
  }

  const [Itens, setItens] = useState([]);

  useEffect(() => {
    setItens(getItens());
  });

  return (
    <View>
      <FlatList
        style={styles.itemLista}
        contentContainerStyle={styles.itemListaContainer}
        keyExtractor={(item) => item.id.toString()}
        data={Itens}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemLista: {
    backgroundColor: "white",
  },
  itemListaContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "space-around",
  },
});
