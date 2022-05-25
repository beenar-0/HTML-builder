const fs = require('fs');
const path = require('path')
const {stdout, stdin} = process


const writeStream = fs.createWriteStream(path.resolve(__dirname, 'data.txt'))

stdout.write('введите свои данные: \n')

stdin.on('data', (data)=>{
    writeStream.write(data)
})

