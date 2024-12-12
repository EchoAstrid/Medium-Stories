import { Router } from 'express';
import { homeHandler, uploadHandler, storyHandler } from './handler';

const router = Router();

router.get('/', homeHandler); 
router.get('/uploadstory', uploadHandler);
router.get('/story', storyHandler);
 
export default router;
 
