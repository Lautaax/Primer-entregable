import ProductsPrin from "./src/Manejodearchivos.js";
const Prin = new ProductsPrin();
const operacionesProductos = async () => {
  try {
    let product1 = await Prin.addProduct(
      "1",
      "SANDIA",
      20,
      "verde y roja",
      50,
      "No Image"
    );
    console.log(product1);
    let product2 = await Prin.addProduct(
      "5",
      "KIWI",
      2,
      "VERDE",
      30,
      "No Image"
    );
    console.log(product2);
    let product3 = await Prin.addProduct(
      "2",
      "BANANA",
      5,
      "MARRON",
      14,
      "No Image"
    );
    console.log(product3);
    let product4 = await Prin.addProduct(
      "4",
      "manzana",
      5,
      "VERDE",
      14,
      "No Image"
    );
    console.log(product4);
    let product5 = await Prin.addProduct(
      "5",
      "manzana",
      5,
      "roja",
      14,
      "No Image"
    );
    console.log(product5);
    let product6 = await Prin.addProduct(
      "6",
      "mandarina",
      5,
      "Naranja",
      14,
      "No Image"
    );
    console.log(product6);
    let product7 = await Prin.addProduct(
      "7",
      "lechuga",
      5,
      "verde",
      14,
      "No Image"
    );
    console.log(product7);
    let product8 = await Prin.addProduct(
      "8",
      "palta",
      5,
      "verde",
      14,
      "No Image"
    );
    console.log(product8);
    let product9 = await Prin.addProduct(
      "9",
      "cebolla",
      5,
      "MARRON",
      14,
      "No Image"
    );
    console.log(product9);
    let product10 = await Prin.addProduct(
      "10",
      "papa",
      5,
      "MARRON",
      14,
      "No Image"
    );
    console.log(product10);

    let segundaConsulta = await Prin.getProductById(2);
    console.log(segundaConsulta);
    let productAct = await Prin.updateProduct(1, "Pera");
    console.log(productAct);
    let deleteproduct1 = await Prin.deleteProducts(3);
    console.log(deleteproduct1);
  } catch (error) {
    console.log(error);
  }
};
operacionesProductos();
