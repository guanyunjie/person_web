/**
 Created by Guanyunjie on 2017/4/2

     exports.proxy = {
     host: ip地址,
     port: 端口号,
     path: 请求地址,
     filter:登录的方法
 }
 */

exports.proxy = {
    host: "localhost",
    port: 8080,
    path: "http://localhost:8080/JavaServer/web/query",
    filter: []
}