"use strict";

import { getConnection, sql, queries } from '../database';

export const getClients = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllClients);

        console.log(result.recordset);
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ msg: 'Internal server erro' });
        res.send(err.nessage);
    }
};

export const addNewClient = async (req, res) => {
    const { name, email } = req.body;

    if (name == null || email == null) {
        return res.status(400).json({ msg: 'Por favor preencha todos os campos.' });
    }

    try {
        const pool = await getConnection();

        await pool.request().input("name", sql.NVarChar, name)
            .input("email", sql.NVarChar, email)
            .query(queries.addNewClient);

        res.json({ name, email });
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error' });
        res.send(err.message);
    }
};

export const getClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();

        const result = await pool.request()
            .input('id', id)
            .query(queries.getClientById);

        console.log(result);
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error' });
        res.send(err.message);
    }
};

export const deleteClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();

        const result = await pool.request()
            .input('id', id)
            .query(queries.deleteClient);

        console.log(result);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error' });
        res.send(err.message);
    }
};

export const getTotalClients = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalClients);

        console.log(result);
        res.json(result.recordset[0][""]);
    } catch (err) {
        res.status(500).json({ msg: 'Internal server erro' });
        res.send(err.nessage);
    }
};

export const updateClientById = async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;

    try {
        const pool = await getConnection();

        await pool.request()
            .input("id", sql.Int, id)
            .input("name", sql.NVarChar, name)
            .input("email", sql.NVarChar, email)
            .query(queries.updateClientById);

        res.json({ name, email });
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error' });
        res.send(err.message);
    }
}