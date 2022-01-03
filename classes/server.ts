import express from "express";
import { SERVER_PORT } from "../global/env";
import http from "http";
import * as socket from "../sockets/sockets";

export default class SocketServer {
	//singletone
	private static _instance: SocketServer;

	public static get instance() {
		return this._instance || (this._instance = new this());
	}
	//singletone

	public app: express.Application;
	public port: number;

	public io: any;
	private httpServer: http.Server;

	private constructor() {
		this.app = express();

		this.port = SERVER_PORT;

		this.httpServer = http.createServer(this.app);

		this.io = require("socket.io")(this.httpServer);

		this.escucharSockets();
	}

	private escucharSockets() {
		console.log("Escuchando conexiones");

		this.io.on("connection", (cliente: any) => {
			socket.conectarCliente(cliente, this.io);

			socket.nuevoTicket(cliente);

			socket.atendiendo(cliente);
		});
	}

	start(callback: any) {
		this.httpServer.listen(this.port, callback);
	}
}
