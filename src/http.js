import Express from "express";
import ProductsPrin from "./Manejodearchivos.js";

const app = Express();

const manager = new ProductsPrin();

app.use(Express.urlencoded({ extended: true }));


app.get("/products", async (req, res) => {
  try {
    const consulta = await manager.getProducts();
    let limit = Number.parseInt(req.query.limit);

    if (limit) {
      const resultado = await consulta.slice(0, limit);
      res.send(resultado);
    } else {
      res.send(consulta);
    }
  } catch (error) {
    console.log(error);
  }
});


app.get("/products/", async (req, res) => {
  const productos = await manager.getProducts();
  res.send(productos);
});

app.get("/products/:id", async (req, res) => {
  let id = req.params.id;
  const consultaId = await manager.getProductById(Number.parseInt(id));
  res.send(consultaId);
});


app.listen(8080, () => console.log("Escuchando"));
