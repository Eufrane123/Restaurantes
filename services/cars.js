const ITENS = [
  {
    id: 1,
    nome: "KFC-Johar Town  \n" ,
    distancia: "5 km",
    localizacao: "Morro Bento",
    img: require("../assets/img/kfcLogo.png"),
    imge: require("../assets/img/kfcImage.jpg"),
    preco: 10000,
  },
  {
    id: 2,
    nome: "Pizza Hurt  \n",
    localizacao: "Nova Vida",
    distancia: "3 km",
    img: require("../assets/img/pizzaHurtLogo.jpg"),
    imge: require("../assets/img/pizzaHurtImage.jpg"),
    preco: 8000,
  },
  {
    id: 3,
    nome: "H3  \n",
    localizacao: "Talatona",
    distancia: "300 m",
    imge: require("../assets/img/pizzaHurtCardapio.jpg"),
    img: require("../assets/img/pizzaHurtImage.jpg"),
    preco: 5000,
  },
];
export function getItens() {
  return ITENS;
}
export function getItem(id) {
  return ITENS.find((item) => item.id == id);
}
