import { Category } from "./category";

export interface Announcement {
    id?: string,
    message: string;
    title: string;
    author: string;
    categoryId: string;
    imageUrl: string;
}
