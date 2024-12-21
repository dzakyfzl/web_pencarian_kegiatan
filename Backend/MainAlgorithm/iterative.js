const runtime = require('../System/reportRuntime')
/*
isi requests = {
    "FakultasAktif":Boolean,
    "fakultas":String,
    "ProdiAktif":Boolean,
    "prodi":String,
    "MinatBakatAktif":Boolean,
    "MinatBakat":String,
    "Recursive":Boolean,
    "JumlahData":Int
}
isi data = {
    "namaKegiatan": String,
    "fakultasKegiatan": String,
    "minatBakatKegiatan": String,
    "prodiKegiatan": String,
    "jenisKegiatan": String
}
*/
function Iterative(requests,data){
    var dataHasil = data

    if(requests.FakultasAktif && !requests.ProdiAktif){
        //Fungsi Iteratif Fakultas
        dataHasil = IterativeFakultas(requests,dataHasil)
    }
    if(requests.ProdiAktif && requests.prodi != 'Semua Program Studi'){
        //Fungsi Iteratif Prodi
        dataHasil = IterativeProdi(requests,dataHasil)
    }
    if(requests.MinatBakatAktif){
        //Fungsi Iteratif Minat Bakat
        dataHasil = IterativeMinatBakat(requests,dataHasil)
    }

    return dataHasil;
}

function IterativeFakultas(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.fakultas === data[i].fakultasKegiatan){
            hasil.push(data[i])
        }
    } 
    return hasil;
}

function IterativeProdi(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.prodi === data[i].prodiKegiatan){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeMinatBakat(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.MinatBakat === data[i].minatBakatKegiatan){
            hasil.push(data[i])
        }
    }
    return hasil;
}

module.exports = {Iterative};