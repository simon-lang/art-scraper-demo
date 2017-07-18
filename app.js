const imageToAscii = require('image-to-ascii')
const argv = require('yargs').argv
const fs = require('fs')

const files = fs.readdirSync('./').filter(f => f.includes('.jpg') || f.includes('.png'))

let index = 0
const tick = () => {
    imageToAscii(files[index], (err, converted) => console.log(err || converted))
    if (++index >= files.length) {
        index = 0
    }
    setTimeout(tick, 2000)
}

tick()
