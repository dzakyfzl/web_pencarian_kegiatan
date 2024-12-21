const xValues = [2520,5040,7560,10080];

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
    for (let i = 0; i < data.length; i++) {
        let waktuEksekusi = jumlahkanWaktu(data[i].runtime);
        if (data[i].jumlahData === 2500) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[0] = (waktuEksekusi+dataIterative[0])/2;
            } else {
                dataRecursive[0] = (waktuEksekusi+dataRecursive[0])/2;
            }
        } else if (data[i].jumlahData === 5000) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[1] = (waktuEksekusi+dataIterative[1])/2;
            } else {
                dataRecursive[1] = (waktuEksekusi+dataRecursive[1])/2;
            }
        } else if (data[i].jumlahData === 7500) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[2] = (waktuEksekusi+dataIterative[2])/2;
            } else {
                dataRecursive[2] = (waktuEksekusi+dataRecursive[2])/2;
            }
        } else if (data[i].jumlahData === 10000) {
            if (data[i].algoritma === 'Iteratif') {
                dataIterative[3] = (waktuEksekusi+dataIterative[3])/2;
            } else {
                dataRecursive[3] = (waktuEksekusi+dataRecursive[3])/2;
            }
        }
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
}

function jumlahkanWaktu(runtime){
    const micros = runtime.microseconds
    const millis = runtime.milliseconds*1000
    return (millis+micros)/1000
}