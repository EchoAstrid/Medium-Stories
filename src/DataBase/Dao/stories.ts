import { db } from '../dbConnection';

import { stories } from '../model/stories';

export const GetStoryById = async (id: string | number) => {
    try {
        const [rows] = await db.query<stories[]>('SELECT * FROM stories WHERE id = ?', [id]);
        return rows[0]; // Return the first row (the story)
    } catch (error) {
        console.error('Error fetching story details:', error);
        throw error;
    }
};


export const GetAllstories = async () => {
    try {
        const [rows] = await db.query<stories[]>('SELECT * FROM stories ');
        return rows[0]; // Return the first row (the story)
    } catch (error) {
        console.error('Error fetching story details:', error);
        throw error;
    }
};