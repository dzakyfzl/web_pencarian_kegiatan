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
    var dataHasil = []
    dataHasil = data
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

function rekursifFakultas(requests,data,n,result = []){
    if(n >= 0){
        if(requests.fakultas === data[n].fakultasKegiatan){
            result.push(data[n])
        }
        return rekursifFakultas(requests,data,n-1,result)
    }else{
        return result;
    }
}

function rekursifProdi(requests,data,n,result = []){
    if(n >= 0){
        if(requests.prodi === data[n].prodiKegiatan){
            result.push(data[n])
        }
        return rekursifProdi(requests,data,n-1,result)
    }else{
        return result;
    }
}

function rekursifMinatBakat(requests,data,n,result = []){
    if(n >= 0){
        if(requests.MinatBakat === data[n].minatBakatKegiatan){
            result.push(data[n])
        }
        return rekursifMinatBakat(requests,data,n-1,result)
    }else{
        return result;
    }
}

module.exports = {Recursive}