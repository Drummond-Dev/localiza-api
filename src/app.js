"use strict";

import express from 'express';
import config from './config';
import cors from 'cors';

import clientsRoutes from './routes/clients.routes';

const app = express();

// Settings
app.set('port', config.port);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientsRoutes);

export default app;