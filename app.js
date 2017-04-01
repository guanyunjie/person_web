/**
 * Created by Guanyunjie on 2017/4/1.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.post('/web/query',function (req,res) {
    var data = {
        service : req.body.service,
        data : req.body.data
    };
    data = JSON.stringify(data);

    var proxyconf = require('./app-proxyconfig').proxy;
    if(!(proxyconf.host || proxyconf.port || proxyconf.path)){
        console.warn('app-proxyconfig error');
    }

    var proxyRequest = {
        method: "POST",
        host: proxyconf.host,
        port: proxyconf.port,
        path: proxyconf.path
    };

    var proxy = http.request(proxyRequest,function (proxyFeedback) {
        if(proxyFeedback.status == 200){
            var body = '';
            proxyFeedback.on('data',function (data) {
                body += data;
            }).on('end',function () {
                /*var exclude = proxyconf.filter;
                if (exclude) {
                    if (exclude.length > 0) {
                        for (var i in exclude) {
                            if (req.body.service == exclude[i]) {
                                var headers = JSON.stringify(proxyFeedback.headers);
                                var session = headers.substring(headers.lastIndexOf('set-cookie":["'), headers.lastIndexOf(';Path')).replace('set-cookie":["', "");
                                if (session) {
                                    res.cookie('JSESSIONID', session);
                                }
                            }
                        }
                    }
                }*/
                res.send(200, body);
            });
        }
        else{
            console.warn('app-proxyconfig error');
            res.send(500,error);
        }
    });
    proxy.write(data + '\n');
    proxy.end();
});

module.exports = app;