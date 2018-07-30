import {Story} from "../model/story";
import axios from "axios";

export class StoryRepo{
  

    static async get  <T> (url:string): Promise<T> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        var response = await axios.get(url);
        return response.data as T;
    }

    static async GetStories():Promise<Story[]>{
       return await StoryRepo.get<Story[]>("https://localhost:9000/api/Stories");
    }
}