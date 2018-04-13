/**
 * Created by pact on 2018/4/12.
 */
const jsonServer = require('json-server');
const bodyServer = require('body-parser');
const low = require('lowdb');
const storage = require('lowdb/file-async');

//创建一个 Express 服务器
const server = jsonServer.create();

//使用 json-server 默认选择的中间件（logger、static、cors 和 no-cache）
server.use(jsonServer.defaults());
//使用 body-parser 中间件
server.use(bodyServer.json());

//数据文件
const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

//创建一个 lowdb 实例
const db = low(dbfile, { storage });

//路由配置
server.listen(5000,() => {
    console.log('server is running at ' , 5000 , dbfile);
})