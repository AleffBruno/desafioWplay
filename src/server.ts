//const app = express.default();
import app from './app';
import * as http from 'http';

const myHttp = http.createServer(app);

myHttp.listen(3000,function(){
    console.log("OK: localhost:3000");
})