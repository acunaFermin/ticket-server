import { Router, Request, Response } from "express";
import { Tickets } from "../classes/tickets";

const router = Router();

router.get("/generarticket", (req: Request, res: Response) => {
	const ticket = Tickets.ticketInstance;
	res.json(ticket.generarTicket());
});

router.post("/atender", (req: Request, res: Response) => {
	const ticket = Tickets.ticketInstance;

	let escritorio = req.body.id;

	res.json(ticket.atenderCliente(escritorio));
});

export default router;
