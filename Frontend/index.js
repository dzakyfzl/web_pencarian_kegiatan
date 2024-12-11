const express = require('express') //Express
const path = require('path')
const app = express()
const port = '3000'//Port Localhost

//Menyediakan semua image pada folder src ke online
app.use('/src',express.static(path.join(__dirname, 'src')))
//Menambahkan folder css termasuk index html
app.use('/',express.static(path.join(__dirname, 'page')))


//Memulai Server
app.listen(port,()=>{
    console.log(`server start in http://localhost:${port}`)
})