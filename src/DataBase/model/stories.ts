import { RowDataPacket } from "mysql2";

export interface stories extends RowDataPacket{
id : number;
title : string;
author : string;
content : string;
image_url? : string;
likes : number;
created_at : Date;
summary : string;
}
