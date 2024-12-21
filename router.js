const backend = require('./Backend/backend.js')
const WriteLog = require('./Backend/System/logging.js')


const express = require('express')
const path = require('path')
const app = express()
const port = '3000'//Port Localhost


//Middleware
app.use('/api',express.json())

//Import src
app.use('/src',express.static(path.join(__dirname, 'src')))

//Open Frontend
app.use('/',express.static(path.join(__dirname, 'page')))

//API Gateway
app.post('/api/returnToSender',backend.returnToSender)

app.post('/api/dataProdi',backend.dataProdi)

app.get('/api/dataMinatBakat',backend.dataMinatBakat)

app.post('/api/cariKegiatan',backend.cariKegiatan)

app.get('/api/dataRuntime',backend.dataRuntime)

//Memulai Server
app.listen(port,()=>{
    WriteLog('Router',`Server Dimulai pada http://localhost:${port}`,'BERHASIL')
})