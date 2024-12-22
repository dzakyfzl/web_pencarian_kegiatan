const body = document.body
const datadiri = document.getElementById('DataDiri')
const vito = document.getElementById('vito')
const dzaky = document.getElementById('dzaky')
const checkFakultas = document.getElementById('enable-fakultas')
const inputFakultas = document.getElementById('input-fakultas')
const checkProdi = document.getElementById('enable-prodi')
const inputProdi = document.getElementById('input-prodi')
const checkMinatBakat = document.getElementById('enable-minat-bakat')
const inputMinatBakat = document.getElementById('input-minat-bakat')
const Iterative = document.getElementById('iterative')
const Recursive = document.getElementById('recursive')
const slideSwitch = document.getElementById('iter-recur-switch')
var FakultasAktif, ProdiAktif, MinatBakatAktif, RekursifAktif
var lastDataIndex, dataLength
const maxData = 100;
var dataKegiatan = []
const opsiFakultas = document.getElementsByClassName('opsi-fakultas')
const sumbission = document.getElementById('submit')
const tableBody = document.getElementById('table-body')
const tableContainer = document.getElementById('table-container')


//Headers
vito.addEventListener('mouseover',()=>{
    datadiri.classList.remove('hidden')
    datadiri.innerHTML = `<h1>Nurvito Dwi Yudha Laksono</h1>`
})
dzaky.addEventListener('mouseover',()=>{
    datadiri.classList.remove('hidden')
    datadiri.innerHTML = `<h1>Muhammad Dzaky Fazli</h1>`
})
vito.addEventListener('mouseout',()=>{
    datadiri.classList.add('hidden')
    datadiri.innerHTML = `<h1>Nurvito Dwi Yudha Laksono</h1>`
})
dzaky.addEventListener('mouseout',()=>{
    datadiri.classList.add('hidden')
    datadiri.innerHTML = `<h1>Muhammad Dzaky Fazli</h1>`
})



//Logical Fakultas
FakultasAktif = true

for(i = 0; i < opsiFakultas.length;i++){
    opsiFakultas[i].addEventListener('click',()=>{
        ambilDataProdi()
    })
}

checkFakultas.addEventListener('click',()=>{
    for(let x of checkFakultas.classList.values()){
        if(x == 'bg-blue-400'){
            checkFakultas.classList.replace('bg-blue-400','bg-transparent')
            inputFakultas.disabled = true
            FakultasAktif = false
            inputFakultas.classList.replace('text-white','text-gray-400')
            ambilDataProdi()
        }else if(x == 'bg-transparent'){
            checkFakultas.classList.replace('bg-transparent','bg-blue-400')
            inputFakultas.disabled = false
            FakultasAktif = true
            inputFakultas.classList.replace('text-gray-400','text-white')
            ambilDataProdi()
        }
    }
})



//Logical Prodi
ProdiAktif = true
ambilDataProdi()
checkProdi.addEventListener('click',()=>{
    for(let y of checkProdi.classList.values()){
        if(y == 'bg-blue-400'){
            checkProdi.classList.replace('bg-blue-400','bg-transparent')
            inputProdi.disabled = true
            ProdiAktif = false
            inputProdi.classList.replace('text-white','text-gray-400')
        }else if(y == 'bg-transparent'){
            checkProdi.classList.replace('bg-transparent','bg-blue-400')
            inputProdi.disabled = false
            ProdiAktif = true
            inputProdi.classList.replace('text-gray-400','text-white')
        }
    }
})

function tambahProdi(data){
    inputProdi.innerHTML = ''
    for(var i = 0;i < data.prodi.length;i++){
        inputProdi.innerHTML += `<option class="text-white bg-slate-900" value="${data.prodi[i]}">${data.prodi[i]}</option>`
    }
}



//Logical Minat Bakat
MinatBakatAktif = true
ambilDataMinatBakat()
checkMinatBakat.addEventListener('click',()=>{
    for(let z of checkMinatBakat.classList.values()){
        if(z == 'bg-blue-400'){
            checkMinatBakat.classList.replace('bg-blue-400','bg-transparent')
            inputMinatBakat.disabled = true
            MinatBakatAktif = false
            inputMinatBakat.classList.replace('text-white','text-gray-400')
        }else if(z == 'bg-transparent'){
            checkMinatBakat.classList.replace('bg-transparent','bg-blue-400')
            inputMinatBakat.disabled = false
            MinatBakatAktif = true
            inputMinatBakat.classList.replace('text-gray-400','text-white')
        }
    }
})

function tambahMinatBakat(data){
    inputMinatBakat.innerHTML = ''
    for(var i = 0;i < data.MinatBakat.length;i++){
        inputMinatBakat.innerHTML += `<option class="text-white bg-slate-900" value="${data.MinatBakat[i]}">${data.MinatBakat[i]}</option>`
    }
}



//Logical Iterative and Recursive Switch
RekursifAktif = false
function recursiveSwitch(isRec){
    if(isRec){
        Iterative.classList.replace('font-bold','font-extralight')
        Recursive.classList.replace('font-extralight','font-bold')
        slideSwitch.classList.replace('translate-x-0','translate-x-full')
        RekursifAktif = true
    }else{
        Recursive.classList.replace('font-bold','font-extralight')
        Iterative.classList.replace('font-extralight','font-bold')
        slideSwitch.classList.replace('translate-x-full','translate-x-0')
        RekursifAktif = false
    }
}



//Logical Submit
sumbission.addEventListener('click',()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var JumlahData
    var Data2500 = document.getElementById('data25').checked
    var Data5000 = document.getElementById('data50').checked
    var Data7500 = document.getElementById('data75').checked
    var Data10000 = document.getElementById('data100').checked
    if(Data10000 === true){
        JumlahData = 10000
    }else if(Data7500 === true){
        JumlahData = 7500
    }else if(Data5000 === true){
        JumlahData = 5000
    }else if(Data2500 === true){
        JumlahData = 2500
    }else{
        JumlahData = 0
    }
    var bodyRequest = JSON.stringify({
        FakultasAktif:FakultasAktif,
        fakultas:inputFakultas.value,
        ProdiAktif:ProdiAktif,
        prodi:inputProdi.value,
        MinatBakatAktif:MinatBakatAktif,
        MinatBakat:inputMinatBakat.value,
        Recursive:RekursifAktif,
        JumlahData:JumlahData
    })

    var requests = {
        headers:myHeaders,
        method:"POST",
        body:bodyRequest,
        redirect:"follow"
    }

    fetch('/api/cariKegiatan',requests).then(response => response.json()).then(result => buatTabelKegiatan(result))
})


//Logical Table
function buatTabelKegiatan(data){
    tableBody.innerHTML = ` `
    var divider = Math.floor(data.length / maxData)
    var dataLength = 0
    if(data.length <= maxData){
        dataLength = data.length
    }else if(data.length >= maxData){
        dataLength = Math.floor(data.length / divider)
    }
    for(let i = 0;i < dataLength;i++){
        if(data[i] === 0){
            i++
        }
        tableBody.innerHTML += `<tr class="text-center">
                                  <td class="px-4 py-2">${data[i].namaKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].fakultasKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].prodiKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].minatBakatKegiatan}</td>
                                 </tr>`
        
    }
    lastDataIndex = dataLength - 1
    dataKegiatan = data
    console.log(data)
}


//Data Berangsur-angsur ditampilkan pada HTML
tableContainer.addEventListener('scroll',scrollHandler)

function scrollHandler(){
    if(tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight - 10){
        tambahTabelKegiatan(dataKegiatan)
    }
}

function tambahTabelKegiatan(data){
    let i
    if(data.length - lastDataIndex <= maxData){
        dataLength = data.length - lastDataIndex
    }else if(data.length - lastDataIndex > maxData && lastDataIndex <= data.length){
        dataLength = maxData
    }

    for(i = lastDataIndex;i < lastDataIndex + dataLength;i++){
        if(data[i] === 0){
            i++
        }
        if(lastDataIndex == data.length-1){
            i++
        }
        tableBody.innerHTML += `<tr class="text-center">
                                  <td class="px-4 py-2">${data[i].namaKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].fakultasKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].prodiKegiatan}</td>
                                  <td class="px-4 py-2">${data[i].minatBakatKegiatan}</td>
                                 </tr>`
        
    }
    lastDataIndex = i
}



//Frontend to Backend Mengambil Data
function ambilDataProdi(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var bodyRequest = JSON.stringify({
        isActive:FakultasAktif,
        fakultas:inputFakultas.value
    })

    const requests = {
        headers:myHeaders,
        method:"POST",
        body:bodyRequest,
        redirect:"follow"
    }
    fetch('/api/dataProdi',requests).then(response => response.json()).then(result => tambahProdi(result))
}

function ambilDataMinatBakat(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const requests = {
        headers:myHeaders,
        method:"GET",
        redirect:"follow"
    }
    fetch('/api/dataMinatBakat',requests).then(response => response.json()).then(result => tambahMinatBakat(result))
}