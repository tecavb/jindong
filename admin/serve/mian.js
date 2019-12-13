const express = require('express'),
    app = express();
const {
    readFile
} = require('../utils/promiseFS');
let qs = require('qs');
app.listen(8000, () => {
    console.log(`当前服务 起于8000端口`);
});
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:8080')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Headers',"Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    req.method == 'OPTIONS' ? res.send('OK') : next();
})
app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})
app.use((req, res, next) => {
    readFile('../json/miaosha.json').then(data => {
        req.data = JSON.parse(data);
        next()
    }).catch(err => {
        res.status(500);
        res.send('');
    })
})
app.get('/miao',(req, res) => {
    res.send({
        code: 0,
        data: req.data
    })
})