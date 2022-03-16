"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atendiendo = exports.nuevoTicket = exports.conectarCliente = void 0;
const conectarCliente = (cliente, io) => {
    console.log("cliente conectado");
    io.emit("cliente-conectado", "conexion exitosa");
};
exports.conectarCliente = conectarCliente;
const nuevoTicket = (cliente) => {
    cliente.on("nuevo-ticket", (ticket) => {
        cliente.broadcast.emit("ticket-nuevo", ticket);
        console.log(ticket);
    });
};
exports.nuevoTicket = nuevoTicket;
const atendiendo = (cliente) => {
    cliente.on("atendiendo-cliente", (ticket) => {
        cliente.broadcast.emit("cliente-atendido", ticket);
    });
};
exports.atendiendo = atendiendo;
