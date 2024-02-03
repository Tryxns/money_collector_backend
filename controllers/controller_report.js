const axios = require('axios')
const fs = require('fs')

const getReport = (async(req, res) => {
    const req_params = req.body

    json = JSON.stringify(req_params);
    fs.writeFile(`./output/${Date.now()}.json`, json, (err) => {
        if (!err) {
            console.log('done')
        }else{
            console.log(err)
        }
    });
    res.send(json)
})

module.exports = {
    getReport
}