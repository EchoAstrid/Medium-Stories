import { Router } from 'express';
import { homeHandler, uploadHandler, storyHandler,getStoriesDetailHandler } from './handler';

const router = Router();

router.get('/', homeHandler); 
router.get('/uploadstory', uploadHandler);
router.get('/story', storyHandler);
router.get('/story-detail/:storyname',getStoriesDetailHandler);
 
export default router;
 
