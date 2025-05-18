const express = require('express')
const app = express()
require('dotenv').config();

const productRoutes = require("../ProductCrud/routes/productRoutes")
const brandRoutes = require("./routes/brandRoute")
const categoryRoutes = require('./routes/categoryRoutes')

const port = process.env.PORT

app.use(express.json());

app.use('/api/product',productRoutes)

app.use ('/api/category',categoryRoutes)

app.use('/api/brand', brandRoutes);




app.listen(port,()=> console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/api/products