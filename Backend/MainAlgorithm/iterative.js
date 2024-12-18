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
function Iterative(requests,data){
    var dataHasil;
    if(requests.FakultasAktif && !requests.ProdiAktif){
        //Fungsi Iteratif Fakultas
    }
    if(requests.ProdiAktif && requests.prodi != 'Semua Program Studi'){
        //Fungsi Iteratif Prodi
    }
    if(requests.MinatBakatAktif){
        //Fungsi Iteratif Minat Bakat
    }
    return dataHasil
}

module.exports = {Iterative}