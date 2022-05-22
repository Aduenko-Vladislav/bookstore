import axios from "axios";
import { IDetailsBookApi, INewBooksApi } from "./types";

class BookService {
  private readonly API_URL = "https://api.itbook.store/1.0/";

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<INewBooksApi> {
    const { data } = await this.api.get<INewBooksApi>("/new");
    return data;
  }
  public async getBookDetails (isbn:string): Promise<IDetailsBookApi>{
    const { data } = await this.api.get<IDetailsBookApi>(`/books/${isbn}`);
    return data;
  }
}
export const bookApi = new BookService();