const fs = require('fs');
const path = require('path')
const {stdout, stdin, exit} = process


const writeStream = fs.createWriteStream(path.resolve(__dirname, 'data.txt'))

stdout.write('введите свои данные: \n')

stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        stdout.write('exit. Выход');
        exit();
    } else {
        writeStream.write(data);
    }
})

process.on('SIGINT', () => {
    stdout.write('ctl+c. Выход')
    exit()
})

