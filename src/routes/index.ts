import express, { Request, Response } from "express";

const router = express.Router();


router.get('/', async (req:Request, res: Response) => {
  
  return res.send('ok' )
});


export default router;
