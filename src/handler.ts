import { Request, Response } from 'express';
import { GetStoriesDetail,GetStoryById } from './DataBase/Dao/stories';
import { stories } from './DataBase/model/stories';

// export const lobbyGetHandler = async (req: Request, res: Response) => {
//     try {
//       const story = await GetAllStories();
//       console.log(story);
//       res.render('index', { story }); 
//     } 
//     catch (error) {
//         console.error('Error fetching songs:', error);
//         res.status(500).send('Internal Server Error');
//       }
//   };



export const homeHandler = async (req: Request, res: Response) => {
    
        const stories = await GetStoriesDetail();
        console.log(stories);
        res.render('index',{ stories });
 
  
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
      const stories = await GetStoryById (); 
      console.log(stories);
     res.render('storyDview', { title: storiesName, stories: stories});
     
    } catch (error) {
       console.error('Error fetching artist details:', error);
        res.status(500).send('Internal server error');
   }
 };
 