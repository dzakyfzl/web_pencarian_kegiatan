const WriteLog = require('./System/logging')
const data = require('./System/data')
const dataKegiatan = require('./Data/kegiatan.json')

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
        res.status(400)
        res.send(400)
    }else{
        WriteLog('cariKegiatan','Data berhasil masuk','BERHASIL')
        var responses = filterJumlahData(dataKegiatan,req.body)
        responses = prosesPencarian(req.body,responses)
        
        res.status(200)
        res.send(responses)
        WriteLog('cariKegiatan','Data kegiatan berhasil dikirim ke client','BERHASIL')
    }
}

function filterJumlahData(data,requests){
    var dataTerfilter = []
    var iR
    iF = 0
    if(requests.JumlahData === 10000){
        dataTerfilter = dataKegiatan
    }else if(requests.JumlahData === 7500){
        for(iR = 0;iR < data.length;iR++){
            if(data[iR].jenisKegiatan != 'Kompetisi'){
                dataTerfilter.push(data[iR])
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
    return dataTerfilter
}

function prosesPencarian(requests,data){
    if(requests.Recursive){
        return data //Recursive()
    }else{
        return data //Iterative()
    }
}

module.exports = {returnToSender,dataProdi,dataMinatBakat, cariKegiatan};