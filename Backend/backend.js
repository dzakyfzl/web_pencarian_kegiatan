const WriteLog = require('./System/logging')
const data = require('./System/data')
const dataKegiatan = require('./Data/kegiatan.json')
const Recursive = require('./MainAlgorithm/recursive')
const Iterative = require('./MainAlgorithm/iterative.js')
const runtime = require('./System/reportRuntime')
const dataRunningTime = require('../Runtime/runtime.json')

const returnToSender = (req,res)=>{
    res.status(200)
    res.send(req.body)
    WriteLog('returnToSender',`${JSON.stringify(req.body)} diterima oleh fungsi`,'DEBUG')
}

const dataProdi = (req,res) =>{
    WriteLog('dataProdi','data ' + `${JSON.stringify(req.body)} masuk kedalam fungsi`,'BERHASIL')
    var request = {
        isActive : true,
        fakultas:''
    }
    var response = {
        prodi:[]
    }
    request = req.body
    if(request.isActive === true){
        if(request.fakultas === 'FIF'){
            response.prodi = data.prodiFIF
        }else if(request.fakultas === 'FRI'){
            response.prodi = data.prodiFRI
        }else if(request.fakultas === 'FTE'){
            response.prodi = data.prodiFTE
        }else if(request.fakultas === 'FEB'){
            response.prodi = data.prodiFEB
        }else if(request.fakultas === 'FKS'){
            response.prodi = data.prodiFKS
        }else if(request.fakultas === 'FIK'){
            response.prodi = data.prodiFIK
        }else if(request.fakultas === 'FIT'){
            response.prodi = data.prodiFIT
        }
        res.status(200)
        res.send(response)
        WriteLog('dataProdi','mengirim data prodi dari fakultas ' + request.fakultas ,'BERHASIL')
    }else if(request.isActive === false){
        response.prodi[0] = 'Semua Program Studi'
        res.status(200)
        res.send(response)
        WriteLog('dataProdi','mengirim data prodi semua fakultas','BERHASIL')
    }
}

const dataMinatBakat = (req,res) =>{
    const responses = {
        MinatBakat:data.MinatBakat
    } 
    res.status(200)
    res.send(responses)
    WriteLog('dataMinatBakat',`Data minat bakat dikirim oleh fungsi`,'BERHASIL')
}

const cariKegiatan = (req,res) =>{
    WriteLog('cariKegiatan',`Data permintaan ${JSON.stringify(req.body)} telah diterima pada fungsi`,'BERHASIL')
    const requests = req.body
    if(requests.JumlahData === 0){
        WriteLog('cariKegiatan',`Data tidak lengkap`,'ERROR')
        res.sendStatus(400)
    }else{
        WriteLog('cariKegiatan','Data berhasil masuk','BERHASIL')
        var responses = prosesPencarian(req.body,dataKegiatan)
        
        res.status(200)
        res.send(responses)
        WriteLog('cariKegiatan','Data kegiatan berhasil dikirim ke client','BERHASIL')
    }
}

function prosesPencarian(requests,data){
    var dataTerfilter = []
    var dataTerfilter2 = []
    var dataHasilPencarian = []
    var iR
    var startRuntime
    if(requests.JumlahData === 10000){
        for(iR = 0;iR < data.length/2;iR++){
            dataTerfilter.push(data[iR])
        }
        for(iR = data.length/2;iR < data.length;iR++){
            dataTerfilter2.push(data[iR])
        }
    }else if(requests.JumlahData === 7500){
        for(iR = 0;iR < data.length/2;iR++){
            if(data[iR].jenisKegiatan != 'Kompetisi'){
                dataTerfilter.push(data[iR])
            }
        }
        for(iR = data.length/2;iR < data.length;iR++){
            if(data[iR].jenisKegiatan != 'Kompetisi'){
                dataTerfilter2.push(data[iR])
            }
        }
    }else if(requests.JumlahData === 5000){
        for(iR = 0;iR < data.length;iR++){
            if(data[iR].jenisKegiatan === 'Webinar' || data[iR].jenisKegiatan === 'Seminar'){
                dataTerfilter.push(data[iR])
            }
        }
    }else if(requests.JumlahData === 2500){
        for(iR = 0;iR < data.length;iR++){
            if(data[iR].jenisKegiatan === 'Lomba'){
                dataTerfilter.push(data[iR])
            }
        }
    }
    if(requests.Recursive){
        const dibagi = dataTerfilter2.length
        startRuntime = runtime.timeStart()
        if(dibagi != 0){
            dataTerfilter2 = Recursive.Recursive(requests,dataTerfilter2)
            console.log(dataTerfilter2.length)
        }
        dataTerfilter =  Recursive.Recursive(requests,dataTerfilter)
        dataHasilPencarian = dataTerfilter.concat(dataTerfilter2)
        runtime.timeEnd(startRuntime,requests.JumlahData,'Rekursif')
    }else{
        const dibagi = dataTerfilter2.length
        startRuntime = runtime.timeStart()
        if(dibagi != 0){
            dataTerfilter2 = Iterative.Iterative(requests,dataTerfilter2)
        }
        dataTerfilter =  Iterative.Iterative(requests,dataTerfilter)
        dataHasilPencarian = dataTerfilter.concat(dataTerfilter2)
        runtime.timeEnd(startRuntime,requests.JumlahData,'Iteratif')
    }
    return dataHasilPencarian
}

function dataRuntime(req,res){
    res.status(200)
    res.send(dataRunningTime)
    WriteLog('dataRuntime','Data runtime berhasil dikirimkan ke cilent','BERHASIL')
}

module.exports = {returnToSender,dataProdi,dataMinatBakat, cariKegiatan,dataRuntime};