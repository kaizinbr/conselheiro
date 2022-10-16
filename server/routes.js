import { Router } from "express";
import 'dotenv/config'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from 'multer';

import uploadConfig from './config/multer.js';
import curriculo from './models/curriculum.js';
import user from './models/usuario.js';

import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/conselho', async (req, res) => {
  const url = 'https://api.adviceslip.com/advice';

  const config = {
    method: 'get',
  };

    const tempCurriculo = await (await fetch(url, config)).json();

  console.log(pegaConselho);


  res.redirect(url);
});

export default router;

