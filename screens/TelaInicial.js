import React from "react";
import { View, TextInput, Button, StyleSheet,Text } from "react-native";

export default function TelaInicial({ navigation }) {
  let dateP, dateD;

  return (
    <View style={styles.view}>
      <Text>Pick-Up location</Text>
      <TextInput placeholder="New York" on></TextInput>
      <Text>Pick-Up Time</Text>
      <TextInput
        placeholder="23:12:2021 12:00"
        keyboardType="numbers-and-punctuation"
      />
      <Text>Drop-Off Time</Text>
      <TextInput
        placeholder="24:12:2021 9:00"
        keyboardType="numbers-and-punctuation"
      />
      <Button
        title="GET A QUOTE"
        onPress={() => {
          navigation.navigate("Lista");
        }}
        color={'orange'}        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: '100%',
  },
  input:
  {
      marginVertical: 8,
  },
   
});