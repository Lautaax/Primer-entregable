import ProductsPrin from "./Manejodearchivos.js";
const Prin = new ProductsPrin();
const operacionesProductos = async () => {
try {
    let product1 = await Prin.addProduct(
    "1",
    "SANDIA",
    "verde y roja",
    200,
    "No Image",
    50
    );
    console.log(product1);
    let product2 = await Prin.addProduct(
    "5",
    "KIWI",
    "MARRON",
    100,
    "No Image",
    25
    );
    console.log(product2);
    let product3 = await Prin.addProduct(
    "2",
    "KIWI",
    "MARRON",
    100,
    "No Image",
    25
    );
    console.log(product3);

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
