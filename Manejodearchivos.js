import fs from "fs";

export default class ProductsPrin {
  constructor() {
    this.products = [];
    this.path = "./productos.json";
  }

  addProduct = async (Id, Name, Stock, Descript, Precio, Foto) => {
    const productIndex = this.products.findIndex(
      (product) => product.Id === Id
    );
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
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );
    } else {
      console.log(`Producto con mismo  ${Id}`);
    }
  };
  getProducts = () => {
    console.log(this.products);
    return this.products;
  };

  getProductById = async (productId) => {
    const productsIdFound = this.products.findIndex(
      (prod) => prod.Id === productId
    );
    if (productsIdFound === -1) {
      console.log(`Su producto ${productId} No se encuentra `);
    } else {
      console.log(
        `Le suministramos los datos de su producto con ID ${productId}`
      );
      console.log(this.products[productsIdFound]);
    }
  };

  deleteProducts = async (Id) => {
    if (fs.existsSync(this.path)) {
      let productFounded = this.products.find((product) => product.Id === Id);
      if (productFounded) {
        try {
          const valor = this.products.filter((event) => event.id != Id);

          this.products = valor;

          await fs.promises.writeFile(
            this.path,
            JSON.stringify(valor, null, "\t")
          );
          return "Producto eliminado";
        } catch (error) {
          console.log(error);
        }
      } else {
        return `El producto fue eliminado por id: ${Id} NO EXISTE EN LA LISTA`;
      }
    }
  };

  updateProduct = async (Id, Name, Stock, Descript, Precio, Foto) => {
    try {
        const products = await this.getProducts();

        if (products === "error") {
            return "The file is empty";
        }


        let productExists = products.find((product) => product.Id === Id)
        if (productExists != undefined) {

            const productoAmodificar = products.filter((product) => product.Id === Id);

            const productoModificado = {

              Id: Id ?? productoAmodificar[0].Id,
              Name: Name ?? productoAmodificar[0].Name,
              Stock: Stock ?? productoAmodificar[0].Stock,
              Descript: Descript ?? productoAmodificar[0].Descript,
              Precio: Precio ?? productoAmodificar[0].Precio,
              Foto: Foto ?? productoAmodificar[0].Foto,
            }

            products[Id - 1] = productoModificado;

            //console.log(this.products)
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
            return "Product updated";


        } else {
            return `The product to update with the id ${Id} does not exist in the list`;
        }
    } catch (error) {
        console.log(error)
    }

}
}
