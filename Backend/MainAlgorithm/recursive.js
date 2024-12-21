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
    if(n >= 0){
        if(requests.fakultas == data[n].fakultasKegiatan){
            return [...rekursifFakultas(requests,data,n-1),data[n]]
        }else{
            return rekursifFakultas(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function rekursifProdi(requests,data,n){
    if(n >= 0){
        if(requests.prodi === data[n].prodiKegiatan){
            return [...rekursifProdi(requests,data,n-1),data[n]]
        }else{
            return rekursifProdi(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function rekursifMinatBakat(requests,data,n){
    if(n >= 0){
        if(requests.MinatBakat == data[n].minatBakatKegiatan){
            return [...rekursifProdi(requests,data,n-1),data[n]]
        }else{
            return rekursifMinatBakat(requests,data,n-1)
        }
    }else{
        return [];
    }
}

module.exports = {Recursive}