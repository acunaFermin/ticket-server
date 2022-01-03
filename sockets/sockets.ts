import { Socket } from "dgram";
import { Tickets } from "../classes/tickets";

export const conectarCliente = (cliente: any, io: any) => {
	console.log("cliente conectado");
	io.emit("cliente-conectado", "conexion exitosa");
};

export const nuevoTicket = (cliente: any) => {
	cliente.on("nuevo-ticket", (ticket: number) => {
		cliente.broadcast.emit("ticket-nuevo", ticket);
		console.log(ticket);
	});
};

export const atendiendo = (cliente: any) => {
	cliente.on("atendiendo-cliente", (ticket: number) => {
		cliente.broadcast.emit("cliente-atendido", ticket);
	});
};
