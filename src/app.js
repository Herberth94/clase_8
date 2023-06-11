import express from "express";
import { connectMongo } from './utils/connections.js';
import morgan from "morgan";
import { Server } from 'socket.io';
import { __dirname } from './dirname.js';
import handlebars from 'express-handlebars';
import { routerVistaChatSocket } from "./routes/chat-vista-router.js";
import { MsgModel } from "./DAO/models/chat.model.js";


const app = express();
connectMongo();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/vista/chat', routerVistaChatSocket);

//archivos publicos
app.use(express.static(__dirname + '/public'));

const httpServer = app.listen(3000, ()=>{
    console.log("port:3000 ")
})
const socketServer = new Server(httpServer);
socketServer.on('connection', (socket) => {
   console.log('Cliente conectado');
  socket.on('msg_front_to_back', async (msg) => {
    console.log(msg)
    const msgCreated = await MsgModel.create(msg);
    console.log(msgCreated)
    const msgs = await MsgModel.find({});
    console.log(msgs)
    socketServer.emit('todos_los_msgs', msgs);
  });
});