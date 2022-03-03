import React from "react";
import { Text, Image, View} from "react-native";


class Product extends React.Component {
  
  render() {

    const { brand, preco, producTmage, producTmage2 } = this.props.product
    return (
      <View style= {{width: '49%', alignItems: 'center', padding: 5}}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: producTmage }} />
        <Text> Prato: {brand} </Text>
        <Text> Preço: {preco} Kz  </Text>

      </View >

    )
  }
}

export default Product;