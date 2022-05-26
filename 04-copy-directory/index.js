const fs = require('fs');
const path = require('path');

const srcFolder = path.resolve(__dirname, 'files')

const copyFolder = path.resolve(__dirname, 'copy')


fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    console.log(files)
    if (!files.some((item) => {
        return item === 'copy'
    })) fs.mkdir(copyFolder, err => {
        if (err) throw  err
    })
})

fs.readdir(srcFolder, {withFileTypes: true}, (e, files) => {
    if (e) throw e
    files.forEach((item) => {
        const filePath = path.resolve(srcFolder, item.name)
        const copyPath = path.resolve(copyFolder, item.name)
        console.log(copyPath)
        fs.copyFile(filePath, copyPath, err => {
            if (e) throw e
        })
    })

})