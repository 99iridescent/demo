// var express = require('express');
// var app = express();
// //  主页输出 "Hello World"
// app.get('/', function (req, res) {
//     console.log("主页 GET 请求");
//     res.send('邱能能狗儿');
// })
// var server = app.listen(8081, function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("应用实例，访问地址为 http://%s:%s，本机ip：http://172.17.195.54:8081", host, port)

// })
var express = require('express');
var app = express();
var fs = require("fs");
const pathLib = require('path')
var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './img' }).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    // var newName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext
    var newName =req.files[0].path.split('\\')[0]+'\\'+req.files[0].originalname
    console.log(req.files[0].path.split('\\'),req.files[0].path.split('\\')[0],req.files[0].path.split('\\')[0]+'\\'+req.files[0].originalname)
    console.log(des_file,req.files[0].path,pathLib.parse(req.files[0].originalname).ext,req.files[0].originalname,newName)
    fs.rename(req.files[0].path, newName, function (err) {
        if (err) {
            res.send('失败')
        } else {
            res.send('成功')
        }
    })

    //    fs.readFile( req.files[0].path, function (err, data) {
    //         fs.writeFile(des_file, data, function (err) {
    //          if( err ){
    //               console.log( err );
    //          }else{
    //                response = {
    //                    message:'File uploaded successfully', 
    //                    filename:req.files[0].   
    //               };
    //           }
    //           console.log( response );
    //           res.end( JSON.stringify( response ) );
    //        });
    //    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
