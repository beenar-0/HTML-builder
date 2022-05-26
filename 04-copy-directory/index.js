const fs = require('fs');
const path = require('path');

const srcFolder = path.resolve(__dirname, 'files')

const copyFolder = path.resolve(__dirname, 'copy')


fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    if (files.some((item) => {
        return item === 'copy'
    })) {
        fs.rm(copyFolder, {recursive: true, force: true}, err => {
            if (err) throw  err
            fs.mkdir(copyFolder, err => {
                if (err) throw  err
                fs.readdir(srcFolder, {withFileTypes: true}, (e, files) => {
                    if (e) throw e
                    files.forEach((item) => {
                        const filePath = path.resolve(srcFolder, item.name)
                        const copyPath = path.resolve(copyFolder, item.name)
                        console.log(copyPath)
                        fs.copyFile(filePath, copyPath, e => {
                            if (e) throw e
                        })
                    })

                })
            })
        })
    } else fs.mkdir(copyFolder, err => {
        if (err) throw  err
        fs.readdir(srcFolder, {withFileTypes: true}, (e, files) => {
            if (e) throw e
            files.forEach((item) => {
                const filePath = path.resolve(srcFolder, item.name)
                const copyPath = path.resolve(copyFolder, item.name)
                console.log(copyPath)
                fs.copyFile(filePath, copyPath, e => {
                    if (e) throw e
                })
            })

        })
    })
})

