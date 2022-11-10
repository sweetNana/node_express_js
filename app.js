const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.send('Contoh Express 1, URL Utama')
})

app.get('/contoh2', function(req, res){
    res.send('Ini URL contoh2')
})

app.get('/contoh3', function(req, res){
    res.render('ui_contoh3', {
        nama: 'Nadia',
        alamat: 'Yogyakarta',
    });
})

app.get('/contoh4/:number1/:number2', function(req, res){
    let number1 = parseInt(req.params.number1)
    let number2 = parseInt(req.params.number2)
    let hasil = number1 + number2
    res.render('ui_contoh4',{
        num1: number1,
        num2: number2,
        hasil: hasil 
    })
})

app.listen(port, function(){
    console.log('Server jalan di port ' + port)
})