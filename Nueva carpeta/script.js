import fs from "fs";

class ProductsPrin {
  constructor() {
    this.products = [];
    this.path = "./productos.json";
  }

  


addProduct = async (Id, Name, Stock, Descript, Precio, Foto) => {
  const productIndex = this.products.findIndex((product) => product.Id === Id);
  if (!Id || !Name || !Stock || !Descript || !Precio || !Foto) {
    console.log("Error datos iguales");
    return;
  }
  if (productIndex === -1) {
    const product = {
      Id: this.products.length + 1,
      Name,
      Stock,
      Descript,
      Precio,
      Foto,
    };
    this.products.push(product);
    await fs.promises.writeFile(this.path, JSON.stringify(this.products,null,"\t"))
  } else {
    console.log(`Producto con mismo  ${Id}`);
  }
}
  getProducts = () => {
    console.log(this.products);
    return this.products;
  };

  getProductById = (productId) => {
    const productsIdFound = this.products.findIndex(
      (prod) => prod.Id === productId
    );
    if (productsIdFound === -1) {
      console.log(`Su producto ${ productId} No se encuentra `);
    } else {
      console.log(`Le suministramos los datos de su producto con ID ${productId}`);
      console.log(this.products[productsIdFound]);
    }
  };

}



//Productos
let products = new ProductsPrin();

products.getProducts();

products.addProduct("PRUEBA");
products.addProduct(1, "Anana", 10, "Es amarilla adentro", "Nohay", "Sin foto");
products.addProduct(2, "MANZANA", "Nohay", 150, "Sin foto");
products.addProduct(3, "Sin foto");
products.addProduct(4, "Mandarina", 30, "Es naranja", 10, "Sin foto");
products.addProduct(4, "Mandarina", 30, "Es naranja", 10, "Sin foto");
products.addProduct(5, "Uva", 8, "Son bolitas", 20, "Sin foto");
products.addProduct(6, "Papa", 3, "Es Puro Almidon", 16, "Sin foto");
products.addProduct(7, "Banana", 15, "Es amarilla", 10, "Sin foto");
products.getProducts();
products.getProducts(1, "Anana", 10, "Es amarilla adentro", "Nohay", "Sin foto");
products.getProducts();
products.getProductById(8);
products.getProductById(1);
products.getProductById(4);
products.getProductById(15);