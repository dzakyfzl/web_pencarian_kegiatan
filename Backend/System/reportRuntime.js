const micros = require('microseconds')
const fs = require('fs')
var runtimeData = require('../../Runtime/runtime.json')
var data = {
    jumlahData:0,
    algoritma:"",
    runtime:{}
}

function timeStart(){
    return performance.now()
}

function timeEnd(start,jumlahData,algoritma){
    var data = {
        jumlahData:0,
        algoritma:"",
        runtime:{}
    }    
    const end = performance.now() + performance.timeOrigin
    var totalTime = end - (start + performance.timeOrigin)
    data.runtime = micros.parse(totalTime*1000)
    data.algoritma = algoritma
    data.jumlahData = jumlahData
    runtimeData.push(data)
    fs.writeFile('./Runtime/runtime.json',JSON.stringify(runtimeData),(err)=>{
        if(err){
            throw err
        }
    })
}



module.exports = {timeStart,timeEnd}