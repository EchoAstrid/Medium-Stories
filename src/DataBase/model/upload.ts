import { RowDataPacket } from "mysql2";

export interface upload_stories extends RowDataPacket{
upload_stories_id : number;
stories_id :number;
author : string;
title : string;
content_description : string;
image_url : string;
created_at : Date;
}

