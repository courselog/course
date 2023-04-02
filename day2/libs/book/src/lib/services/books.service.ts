import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBook } from '@book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes' // should remove 'volumes'?
  private url = 'https://www.googleapis.com/books/v1/volumes?q=angular';
  constructor(private httpClient: HttpClient) { }

  getBooks$(term: string): Observable<IBook[]> {
    let params: HttpParams = new HttpParams();

    params = params.append('q', term);
    
    return this.httpClient.get<{items: any[]}>(this.BASE_URL, {params}).pipe(
      map(response=>this.mapResponseToBooks(response.items)));
  }

  private mapResponseToBooks(items: {id: string, volumeInfo: any}[]): IBook[] {
    let result = items.map(item =>
    ({
      id: item.id,
      title: item.volumeInfo.title,
      price: item.volumeInfo.pageCount,
      preivewImgUrl: item.volumeInfo.imageLinks.thumbnail,
      description: item.volumeInfo.description    
    }));

    return result;
  }
}
