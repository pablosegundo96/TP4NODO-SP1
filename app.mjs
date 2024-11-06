import express from'express';

//crear una instancia de express
const app = express();
const PORT = 3000;

//ruta GET para el home 
//ruteo basico http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Pagina de inicio");
})

//ruta GET para recibir datos simples http://localhost:3000/data
//ruteo basico de datos
app.get('/data', (req, res) => {
    res.send("Datos recibidos");
})


//ruta GET con parametros  http://localhost:3000/user/123

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID es : ${userId}`)
})

//ruta GET con multiples parametros http://localhost:3000/product/pharmacy/63
app.get('/product/:category/:id', (req, res) =>{
    //const {category, id}=req.params;
    const categoria = req.params.category;
    const userID = req.params.id;

    res.send(`La categoria de producto es : ${categoria} y el producto es : ${userID}`);
})


//ruta GET de consulta ejemplo de uso http://localhost:3000/search?q=ejemplo
app.get('/search', (req, res)=>{
    const query = req.query.q;
    res.send(`El resultado para ${query} es : ${query}`);
})

//ruta GET multiples parametros de consulta http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50

app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por rango de precios ${type}, rango de precios ${minPrice} - ${maxPrice}`)
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT} en http://localhost:${3000}`);
})