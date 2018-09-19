const shell = require('node-powershell')


let ps = new shell({
    executionPolicy: 'Bypass',
    noProfile: true
})

var fullpath = "C:/Users/f1608101/Desktop/myPath"
ps.addCommand('GET-ACL '+ fullpath +' | select Owner')
ps.invoke().then(output=>{
    console.log(output)
    ps.dispose()
}).catch(err=>{
    console.log(err)
    ps.dispose()
})
console.log(fullpath) 