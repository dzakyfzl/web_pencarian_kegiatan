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
{
    "namaKegiatan": String,
    "fakultasKegiatan": String,
    "minatBakatKegiatan": String,
    "prodiKegiatan": String,
    "jenisKegiatan": String
}
*/

function Recursive(requests,data){
    var dataHasil = data
    if(requests.FakultasAktif && !requests.ProdiAktif){
        //Fungsi Rekursif Fakultas
        dataHasil = rekursifFakultas(requests,dataHasil,dataHasil.length-1)
    }
    if(requests.ProdiAktif && requests.prodi != 'Semua Program Studi'){
        //Fungsi Rekursif Prodi
        dataHasil = rekursifProdi(requests,dataHasil,dataHasil.length-1)
    }
    if(requests.MinatBakatAktif){
        //Fungsi Rekursif Minat Bakat
        dataHasil = rekursifMinatBakat(requests,dataHasil,dataHasil.length-1)
    }
    return dataHasil
}

function rekursifFakultas(requests,data,n){
    var arrayData = []
    if(n >= 0){
        if(requests.fakultas == data[n].fakultasKegiatan){
            var arrayRecursion = rekursifFakultas(requests,data,n-1)
            for(let i = 0;i < arrayRecursion.length;i++){
                arrayData.push(arrayRecursion[i])
            }
            arrayData.push(data[n])
            return arrayData
        }else{
            return rekursifFakultas(requests,data,n-1)
        }
    }else{
        return 0;
    }
}

function rekursifProdi(requests,data,n){
    var arrayData = []
    if(n >= 0){
        if(requests.prodi === data[n].prodiKegiatan){
            var arrayRecursion = rekursifProdi(requests,data,n-1)
            for(let i = 0;i < arrayRecursion.length;i++){
                arrayData.push(arrayRecursion[i])
            }
            arrayData.push(data[n])
            return arrayData
        }else{
            return rekursifProdi(requests,data,n-1)
        }
    }else{
        return 0;
    }
}

function rekursifMinatBakat(requests,data,n){
    var arrayData = []
    if(n >= 0){
        if(requests.MinatBakat == data[n].minatBakatKegiatan){
            var arrayRecursion = rekursifMinatBakat(requests,data,n-1)
            for(let i = 0;i < arrayRecursion.length;i++){
                arrayData.push(arrayRecursion[i])
            }
            arrayData.push(data[n])
            return arrayData
        }else{
            return rekursifMinatBakat(requests,data,n-1)
        }
    }else{
        return 0;
    }
}

module.exports = {Recursive}