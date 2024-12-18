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
    var dataHasil
    if(requests.FakultasAktif && !requests.ProdiAktif){
        //Fungsi Rekursif Fakultas
    }
    if(requests.ProdiAktif && requests.prodi != 'Semua Program Studi'){
        //Fungsi Rekursif Prodi
    }
    if(requests.MinatBakatAktif){
        //Fungsi Rekursif Minat Bakat
    }
    return dataHasil
}

module.exports = {Recursive}