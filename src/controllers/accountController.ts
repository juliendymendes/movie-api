import { Request, Response } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Criar nova conta
exports.createAccount = async (req: Request, res: Response) => {
    const { name, email, password, date_of_birth } = req.body;

    if(!name || !email || !password || !date_of_birth ) return res.status(400).json({ error: 'Dados incompletos' });
        
    try{
        const account = await prisma.account.create({
            data: {
            name,
            email,
            password,
            date_of_birth,
            },
        });
        return res.json(account);
    } catch (error) {
        return res.status(400).send(error);
    }
    
}