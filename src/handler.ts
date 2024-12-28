import { Request, Response } from 'express';
import { GetAllstories, GetStoryById  } from './DataBase/Dao/stories';
import { stories } from './DataBase/model/stories';

export const homeHandler = async ( req: Request, res: Response) => {
    try{
        const stories = await GetAllstories();
        console.log(stories);
        res.render('index', {stories});
    }
    catch (error) {
        console.error('Error',error);
        res.status(500).send('Server error');
    } 
};
    export const uploadHandler = ( _: Request, res: Response) => {
        res.render('uploadstories');
};

export const storyHandler = ( _: Request, res: Response) => {
    res.render('stories');
};

export const getStoriesDetailHandler = async (req: Request, res: Response): Promise<void> => {
    const { storiesName } = req.params;
    console.log(storiesName);
    try {
      const stories = await GetStoryById(storiesName); 
      console.log(stories);
     res.render('stories-detail', { title: storiesName, stories: stories});
     
    } catch (error) {
       console.error('Error fetching artist details:', error);
        res.status(500).send('Internal server error');
   }
 };
 