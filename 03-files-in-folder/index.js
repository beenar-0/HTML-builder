const path = require('path')
const fs = require("fs");

const folder = path.resolve(__dirname, 'secret-folder')
fs.readdir(folder, {withFileTypes: true}, (e, files) => {
    if (e) throw e
    files.forEach((item) => {
        const name = item['name'].match(/[^.]+/)[0]
        const ext = item['name'].replace(/[^.]+\./, '')
        const filePath = path.join(__dirname, 'secret-folder', item.name)
        fs.stat(filePath, (e, stat) => {
            if (e) throw e
            const size = stat.size
            if (item.isFile()) console.log(`${name} - ${ext} - ${size/1000}kb`)
        })
    })
})

