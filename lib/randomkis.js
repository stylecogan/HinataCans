const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const randomkis = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/kiss`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = randomkis
