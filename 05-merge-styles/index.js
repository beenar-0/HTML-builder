const fs = require('fs')
const path = require('path')

const bundlePath = path.resolve(__dirname, 'project-dist', 'bundle.css')
const cssPath = path.resolve(__dirname, 'styles')


const writeStream = fs.createWriteStream(bundlePath)

fs.readdir(cssPath, {withFileTypes: true}, (e, files) => {
    if (e) throw e
    files.forEach((item) => {
        if (item.isFile() && item['name'].replace(/[^.]+\./, '') === 'css') {
            let stylePath = path.join(cssPath, item.name)
            let readStream = fs.createReadStream(stylePath, 'utf-8')
            readStream.pipe(writeStream)
        }
    })
})

