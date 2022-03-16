"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tickets = void 0;
class Tickets {
    constructor() {
        //singletone
        this.ticket = 0;
        this.tickets = [0];
        this.clientes = [];
        this.clientesPorAtender = 0;
    }
    static get ticketInstance() {
        return this._ticketInstance || (this._ticketInstance = new this());
    }
    generarTicket() {
        this.ticket = this.tickets[this.tickets.length - 1] + 1;
        this.tickets[this.tickets.length] = this.ticket;
        let cliente = {
            ticket: this.ticket,
        };
        this.clientes.push(cliente);
        return this.ticket;
    }
    atenderCliente(escritorio) {
        this.ClientesPorAtender();
        if (this.clientesPorAtender == 0) {
            console.log("ya no hay clientes", this.clientes);
            return "ya no hay clientes";
        }
        else {
            for (let cliente of this.clientes) {
                if (!cliente.escritorio) {
                    cliente.escritorio = escritorio;
                    console.log(this.clientes);
                    console.log("clientes por atender:", this.clientesPorAtender);
                    return cliente;
                    break;
                }
            }
        }
    }
    ClientesPorAtender() {
        let atendidos = this.clientes.filter((cliente) => cliente.escritorio);
        this.clientesPorAtender = this.clientes.length - atendidos.length;
        return this.clientesPorAtender;
    }
}
exports.Tickets = Tickets;
