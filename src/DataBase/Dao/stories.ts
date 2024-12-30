import { db } from '../dbConnection';

import { stories } from '../model/stories';

// export const GetAllStories = async (): Promise<stories[]> => {
//     const [rows] = await db.query<stories[]>('SELECT * FROM stories');
//     return rows;
//   };

export const GetStoryById = async () => {
  try {
      const [rows] = await db.query<stories[]>('SELECT * FROM stories');
      return rows[0]; // Return the first row (the story)
  } catch (error) {
      console.error('Error fetching story details:', error);
      throw error;
  }
};

export const GetStoriesDetail = async () => {
    try {
        const [rows] = await db.query<stories[]>('SELECT * FROM stories ');
        return rows[0]; // Return the first row (the story)
    } catch (error) {
        console.error('Error fetching story details:', error);
        throw error;
    }
};


