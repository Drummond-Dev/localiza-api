"use strict"

import { Router } from 'express';

import { getClientById, getClients, addNewClient, deleteClientById, getTotalClients, updateClientById } from '../controllers/clients.controller';

const router = Router();

router.get('/clients', getClients);

router.post('/clients', addNewClient);

router.get('/clients/count', getTotalClients);

router.get('/clients/:id', getClientById);

router.delete('/clients/:id', deleteClientById);

router.put('/clients/:id', updateClientById);



export default router