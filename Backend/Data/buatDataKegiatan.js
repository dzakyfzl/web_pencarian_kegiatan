const runtime = require('../System/reportRuntime')
const fs = require('fs')
const data = require('../System/data.js')
const WriteLog = require('../System/logging.js')
const { timeEnd } = require('console')
const fakultas = ['FIF','FRI','FTE','FEB','FKS','FIK','FIT']
const jenisKegiatan = ['Lomba','Seminar','Webinar','Kompetisi']
let dataKegiatan = []
var count = 0
var kegiatan = {
    namaKegiatan:"", 
    fakultasKegiatan:"", 
    prodiKegiatan:"", 
    minatBakatKegiatan:"",
    jenisKegiatan:""
};


WriteLog('BuatData','data mulai dibuat','START')
const start = runtime.timeStart()
//Proses data Prodi
for(let i = 0;i < data.prodiFIF.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFIF[i]}`
            kegiatan.fakultasKegiatan = 'FIF'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFIF[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFRI.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFRI[i]}`
            kegiatan.fakultasKegiatan = 'FRI'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFRI[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFTE.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFTE[i]}`
            kegiatan.fakultasKegiatan = 'FTE'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFTE[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFEB.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFEB[i]}`
            kegiatan.fakultasKegiatan = 'FEB'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFEB[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFKS.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFKS[i]}`
            kegiatan.fakultasKegiatan = 'FKS'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFKS[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFIK.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFIK[i]}`
            kegiatan.fakultasKegiatan = 'FIK'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFIK[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan)
            count++
        }
    }
}
for(let i = 0;i < data.prodiFIT.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0; k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${data.prodiFIT[i]}`
            kegiatan.fakultasKegiatan = 'FIT'
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = data.prodiFIT[i]
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan) 
            count++
        }
    }
}

//Proses data Fakultas
for(let i = 0;i < fakultas.length;i++){
    for(let j = 0;j < data.MinatBakat.length;j++){
        for(let k = 0;k < jenisKegiatan.length;k++){
            let kegiatan = {}
            kegiatan.namaKegiatan = `${jenisKegiatan[k]} ${data.MinatBakat[j]} ${fakultas[i]}`
            kegiatan.fakultasKegiatan = fakultas[i]
            kegiatan.minatBakatKegiatan = data.MinatBakat[j]
            kegiatan.prodiKegiatan = 'Semua Program Studi'
            kegiatan.jenisKegiatan = jenisKegiatan[k]
            dataKegiatan.push(kegiatan) 
            count++
        }
    }
}
runtime.timeEnd(start)
WriteLog('BuatData','data berhasil dibuat','FINISH')

fs.appendFile('./Backend/Data/kegiatan.json',JSON.stringify(dataKegiatan),(err)=>{
        if(err){
            throw err
        }
    })