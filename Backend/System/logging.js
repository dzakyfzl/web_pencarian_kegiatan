const fs = require('fs')

//Time


//Logs
const WriteLog = (from, message,logStatus) =>{
    var nowdate = new Date()
    var millis = nowdate.getMilliseconds().toString()
    var second = nowdate.getSeconds().toString()
    var minute = nowdate.getMinutes().toString()
    var hour = nowdate.getHours().toString()
    var date = nowdate.getDate().toString()
    var month = nowdate.getMonth().toString()
    var year = nowdate.getFullYear().toString()
    var currentTime = hour + ':' + minute + ':' + second + '.' + millis
    var currentDate = date + '-' + month + '-' + year 
    var logTemplate = `${currentDate} ${currentTime} [${from}] ${logStatus}    ${message}`
    fs.appendFile(`./Logs/${currentDate}.log`,logTemplate+'\n',(err)=>{
        if(err){
            fs.writeFile(`./Logs/${currentDate}.log`,logTemplate+'\n',(err2)=>{
                if(err2) throw err2
            })
        }
    })
    console.log(logTemplate)
}

module.exports = WriteLog