import express, { Request, Response } from "express";

const router = express.Router();


router.get('/', async (req:Request, res: Response) => {
  console.log(req);
  return res.json({ message: 'Hello World' })
});


export default router;
