import express from 'express';
import { createArticle, getArticle, getArticles, updateArticle, deleteArticle } from '../controllers/controllerStore.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);


export default router;