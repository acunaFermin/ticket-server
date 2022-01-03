import { Cliente } from "../interfaces/clientes";

export class Tickets {
	//singletone
	private static _ticketInstance: Tickets;

	public static get ticketInstance() {
		return this._ticketInstance || (this._ticketInstance = new this());
	}
	//singletone

	ticket: number = 0;
	tickets: number[] = [0];
	clientes: Cliente[] = [];
	clientesPorAtender: number = 0;

	constructor() {}

	generarTicket() {
		this.ticket = this.tickets[this.tickets.length - 1] + 1;

		this.tickets[this.tickets.length] = this.ticket;

		let cliente: Cliente = {
			ticket: this.ticket,
		};

		this.clientes.push(cliente);

		return this.ticket;
	}

	atenderCliente(escritorio: number) {
		this.ClientesPorAtender();

		if (this.clientesPorAtender == 0) {
			console.log("ya no hay clientes", this.clientes);
			return "ya no hay clientes";
		} else {
			for (let cliente of this.clientes) {
				if (!cliente.escritorio) {
					cliente.escritorio = escritorio;
					console.log(this.clientes);
					console.log(
						"clientes por atender:",
						this.clientesPorAtender
					);
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
