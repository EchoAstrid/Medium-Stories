import { Request, Response } from 'express';


export const homeHandler = ( _: Request, res: Response) => {
    res.render('index');
};
    export const uploadHandler = ( _: Request, res: Response) => {
        res.render('uploadstory');
};

export const storyHandler = ( _: Request, res: Response) => {
    res.render('story');
};