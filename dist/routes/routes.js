"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tickets_1 = require("../classes/tickets");
const router = (0, express_1.Router)();
router.get("/generarticket", (req, res) => {
    const ticket = tickets_1.Tickets.ticketInstance;
    res.json(ticket.generarTicket());
});
router.post("/atender", (req, res) => {
    const ticket = tickets_1.Tickets.ticketInstance;
    let escritorio = req.body.id;
    res.json(ticket.atenderCliente(escritorio));
});
exports.default = router;
