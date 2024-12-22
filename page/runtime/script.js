const xValues = [2520,5040,7560,10080];
const I25  = document.getElementById('2500-I')
const R25  = document.getElementById('2500-R') 
const I50  = document.getElementById('5000-I') 
const R50  = document.getElementById('5000-R') 
const I75  = document.getElementById('7500-I') 
const R75  = document.getElementById('7500-R') 
const I100 = document.getElementById('10000-I') 
const R100 = document.getElementById('10000-R') 

function ambilDataRuntime(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requests = {
        headers:myHeaders,
        method:"GET",
        redirect:"follow"
    }
    fetch('/api/dataRuntime',requests).then(response => response.json()).then(result => masukkanDataRuntime(result))
}
/*
isi data = {
    "jumlahData":10000,
    "algoritma":"Iteratif",
    "runtime":{
        "microseconds":122,
        "milliseconds":1,
        "seconds":0,
        "minutes":0,
        "hours":0,
        "days":0
    }
}
*/
//Memasukkan dataRuntime
ambilDataRuntime()
function masukkanDataRuntime(data) {
    var dataRecursive = [0, 0, 0, 0];
    var dataIterative = [0, 0, 0, 0];
    var dataRecursiveCount = [0, 0, 0, 0];
    var dataIterativeCount = [0, 0, 0, 0];
    for (let i = 0; i < data.length; i++) {
        let waktuEksekusi = jumlahkanWaktu(data[i].runtime);
        if (data[i].jumlahData === 2500) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[0] = (waktuEksekusi+dataIterative[0])
                dataIterativeCount[0] = dataIterativeCount[0] + 1
            } else {
                dataRecursive[0] = (waktuEksekusi+dataRecursive[0])
                dataRecursiveCount[0] = dataRecursiveCount[0] + 1
            }
        } else if (data[i].jumlahData === 5000) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[1] = (waktuEksekusi+dataIterative[1])
                dataIterativeCount[1] = dataIterativeCount[1] + 1
            } else {
                dataRecursive[1] = (waktuEksekusi+dataRecursive[1])
                dataRecursiveCount[1] = dataRecursiveCount[1] + 1
            }
        } else if (data[i].jumlahData === 7500) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[2] = (waktuEksekusi+dataIterative[2])
                dataIterativeCount[2] = dataIterativeCount[2] + 1
            } else {
                dataRecursive[2] = (waktuEksekusi+dataRecursive[2])
                dataRecursiveCount[2] = dataRecursiveCount[2] + 1
            }
        } else if (data[i].jumlahData === 10000) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[3] = (waktuEksekusi+dataIterative[3])
                dataIterativeCount[3] = dataIterativeCount[3] + 1
            } else {
                dataRecursive[3] = (waktuEksekusi+dataRecursive[3])
                dataRecursiveCount[3] = dataRecursiveCount[3] + 1
            }
        } 
    }
    dataRecursive[3] = dataRecursive[3]/dataRecursiveCount[3]
    dataRecursive[2] = dataRecursive[2]/dataRecursiveCount[2]
    dataRecursive[1] = dataRecursive[1]/dataRecursiveCount[1]
    dataRecursive[0] = dataRecursive[0]/dataRecursiveCount[0]
    dataIterative[3] = dataIterative[3]/dataIterativeCount[3]
    dataIterative[2] = dataIterative[2]/dataIterativeCount[2]
    dataIterative[1] = dataIterative[1]/dataIterativeCount[1]
    dataIterative[0] = dataIterative[0]/dataIterativeCount[0]
    I25.innerHTML = `Iterative : ${dataIterative[0]}ms`
    R25.innerHTML = `Recursive : ${dataRecursive[0]}ms`
    I50.innerHTML = `Iterative : ${dataIterative[1]}ms`
    R50.innerHTML = `Recursive : ${dataRecursive[1]}ms`
    I75.innerHTML = `Iterative : ${dataIterative[2]}ms`
    R75.innerHTML = `Recursive : ${dataRecursive[2]}ms`
    I100.innerHTML = `Iterative : ${dataIterative[3]}ms`
    R100.innerHTML = `Recursive : ${dataRecursive[3]}ms`
    new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{ 
              label:'Recursive runtime (ms)',
              data: dataRecursive,
              borderColor: "cyan",
              fill: false
          }, { 
              label:'Iterative Runtime (ms)',
              data: dataIterative,
              borderColor: "blue",
              fill: false
          }]
        },
        options: {
          legend: {
            display: true
        }
        }
      })
}

function jumlahkanWaktu(runtime){
    const micros = runtime.microseconds
    const millis = runtime.milliseconds*1000
    return (millis+micros)/1000
}