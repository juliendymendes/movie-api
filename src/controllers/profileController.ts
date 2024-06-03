import { Request, Response } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar novo perfil
exports.createProfile = async (req: Request, res: Response) => {
    const { name, account_id } = req.body;

    if(!name || !account_id) return res.status(400).json({ error: 'Dados incompletos' });
        
    try{
        const profile = await prisma.profile.create({
            data: {
            name,
            account_id
            },
        });
        return res.json(profile);
    } catch (error) {
        return res.status(400).send(error);
    }
    
}


// Busca todos os perfis da conta
exports.getAllByAccount = async (req: Request, res: Response) => {
	const account_id = Number(req.query.account_id);
console.log(account_id);

	if(!account_id) return res.status(400).json({ error: 'Dados incompletos' });
	try{
			const profiles = await prisma.profile.findMany({
				where:{
					account_id: account_id
				}
			})
			return res.json(profiles);
	} catch (error) {
			return res.status(400).send(error);
	}
}