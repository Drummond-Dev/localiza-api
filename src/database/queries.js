"use strict";

export const queries = {
    getAllClients: 'SELECT * FROM clients',
    addNewClient: 'INSERT INTO clients (name, email) VALUES (@name, @email)',
    getClientById: 'SELECT * FROM clients WHERE id = @id',
    deleteClient: 'DELETE FROM clients WHERE id = @id',
    getTotalClients: 'SELECT COUNT(*) FROM clients',
    updateClientById: 'UPDATE clients SET name = @name, email = @email WHERE id = @id',
}