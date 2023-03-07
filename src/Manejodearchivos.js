import fs from "fs";

export default class ProductsPrin {
  constructor() {
    this.products = [];
    this.path = "./productos.json";
  }
  addProduct = async (id, usuario, stock, descript, precio, foto) => {
    const productIndex = this.products.findIndex(
      (product) => product.i === id
    );
    if (!id || !usuario || !stock || !descript || !precio || !foto) {
      console.log("Error datos iguales");
      return;
    }
    if (productIndex === -1) {
      const product = {
        id: this.products.length + 1,
        usuario, 
        stock,
        descript,
        precio,
        foto,
      };
      this.products.push(product);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );
    } else {
      product.id = product[product.length - 1].id + 1
      console.log(`Producto con mismo  ${id}`);
    }
  };
  getProducts = async () => {
    try {

        const data = await fs.promises.readFile(this.path, 'utf-8');
        
        const result = JSON.parse(data);
        return result;


    } catch (error) {
        console.error(`Error al leer el ${this.path} ${error}`);
        return [];
    }}

    getProductById = async (id) => {
      try {
          if (fs.existsSync(this.path)) {
              const result = await this.getProducts();

              let indexValue = result.find((event) => event.id === id);
              if (!indexValue) {

                  return "No existe ningun archivo que tenga ese en el archivo ";
              } else {

                  return indexValue;
              }
          }
      } catch (error) {
          console.log(error);
      }}

  deleteProducts = async (id) => {
    if (fs.existsSync(this.path)) {
      let productFounded = this.products.find((product) => product.id === id);
      if (productFounded) {
        try {
          const valor = this.products.filter((event) => event.id != id);

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
        return `El producto fue eliminado por id: ${id} NO EXISTE EN LA LISTA`;
      }
    }
  };

  updateProduct = async (id, usuario, stock, descript, precio, foto)  => {
    try {
        const products = await this.getProducts();

        if (products === "error") {
            return "El archivo esta vacio";
        }


        let productExists = products.find((product) => product.id === id)
        if (productExists != undefined) {

            const productoAmodificar = products.filter((product) => product.id === id);

            const productoModificado = {

              id: id ?? productoAmodificar[0].id,
              usuario: usuario ?? productoAmodificar[0].usuario,
              stock: stock ?? productoAmodificar[0].stock,
              descript: descript ?? productoAmodificar[0].descript,
              precio: precio ?? productoAmodificar[0].precio,
              foto: foto ?? productoAmodificar[0].foto,
            }

            products[id - 1] = productoModificado;

            //console.log(this.products)
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
            return "Producto actualizado";

        } else {
            return `El producto a actualizar con el id ${id} no existe en la lista`;
        }
    } catch (error) {
        console.log(error)
    }

}
}

