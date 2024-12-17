const body = document.body
const datadiri = document.getElementById('DataDiri')
const vito = document.getElementById('vito')
const dzaky = document.getElementById('dzaky')

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