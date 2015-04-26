import express from 'express';
import * as controller from './controller';

let router = express.Router();

router.post('/', controller.create);

export default router;
